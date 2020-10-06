const fs = require('fs');
const path = require('path');
const pathToEntry = './build/service-worker.js';
const preCacheManifestPath = './build' + fromDir('./build', '.js')
const splitBy = path => `importScripts(
  "${path}"
);`;
const builtJsContent = fs.readFileSync(pathToEntry).toString();
const preCacheManifest = fs.readFileSync(preCacheManifestPath).toString();
const parts = builtJsContent.split(splitBy(fromDir('./build', '.js')));

const fileWithPreload = [
    parts[0],
    preCacheManifest,
    parts[1]
];

function fromDir(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.indexOf(filter) >= 0) {
            if (isPreCache(filename)) {
                return filename.replace('build', '')
                // return filename.replace('build\\', '/')
            }
        }
        ;
    }
    ;
};

function isPreCache(filename) {
    return filename.match('precache-manifest')
}

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));


try {
    fs.unlinkSync(preCacheManifestPath)
    //file removed
} catch(err) {
    console.error(err)
}
