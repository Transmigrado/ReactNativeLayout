const isObject = o =>
  o !== null && typeof o === 'object' && Array.isArray(o) === false;

const objToProps = (item, props) =>
  Object.keys(props)
    .map(e => {
      const value = props[e];

      if (
        (typeof value === 'string' || value instanceof String) &&
        /\:{1}([A-Za-z0-9])*/g.test(value)
      ) {
        const key = value.replace(':', '');
        return {key: e, value: item[key]};
      }

      return {key: e, value};
    })
    .reduce((acc, cur) => ({...acc, [cur.key]: cur.value}), {});

export { isObject, objToProps}