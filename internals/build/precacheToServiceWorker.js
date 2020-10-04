const fs = require('fs');
const path = require('path');
const pathToEntry = './build/service-worker.js';
const precacheManifestPath = './build' + fromDir('./build', '.js')
const splitBy = path => `importScripts(
  "${path}"
);`;
const builtJsContent = fs.readFileSync(pathToEntry).toString();
const precacheManifest = fs.readFileSync(precacheManifestPath).toString();
const parts = builtJsContent.split(splitBy(fromDir('./build', '.js')));

const fileWithPreload = [
    parts[0],
    precacheManifest,
    parts[1]
];


function fromDir(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.indexOf(filter) >= 0) {
            if (isPrecache(filename)) {
                return filename.replace('build\\', '/')
            }
        }
        ;
    }
    ;
};

function isPrecache(filename) {
    return filename.match('precache-manifest')
}

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));


try {
    fs.unlinkSync(precacheManifestPath)
    //file removed
} catch(err) {
    console.error(err)
}