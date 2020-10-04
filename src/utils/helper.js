import loadable from '@loadable/component'

export const withParams = (routes) => {
  return routes.map((item) => {
    const params = item.params;
    delete item.params;
    return {
      ...item,
      ...params,
      exact: true,
      key: ID(),
      component: loadable(() => import(`../screens/${item.screen}`)),
    };
  });
};

export const route = (path, screen, params = {}) => ({
  path,
  screen,
  params,
});

export const ID = () => "_" + Math.random().toString(36).substr(2, 36);

export const serialize = (form) => {
  const serialized = {};

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    if (
      !field.name ||
      field.disabled ||
      field.type === "file" ||
      field.type === "reset" ||
      field.type === "submit" ||
      field.type === "button"
    )
      continue;

    if (field.type === "select-multiple") {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized[field.name] = field.options[n].value;
      }
    } else if (
      (field.type !== "checkbox" && field.type !== "radio") ||
      field.checked
    ) {
      serialized[field.name] = field.value;
    }
  }
  return serialized;
};

export const removeConsole = () => {
    Object.keys(console).forEach(item => {
        if (typeof console[item] === "function") {
            console[item] = noop
        }
    })
}
export const noop = () => {}