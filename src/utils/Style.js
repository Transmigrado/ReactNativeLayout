const isObject = o =>
  o !== null && typeof o === 'object' && Array.isArray(o) === false;

const removeUndefinedValues = o => Object.keys(o).reduce(
    (acc, cur) => (o[cur] !== undefined ? {...acc, [cur]: o[cur]} : acc),
    {});

const extractPadding = props => {
  const {padding} = props;

  if (padding === undefined) {
    return {};
  }

  if (isObject(padding)) {
    const {horizontal, h, vertical, v} = props;
    return {
      paddingLeft: padding.left,
      paddingBottom: padding.bottom,
      paddingRight: padding.right,
      paddingTop: padding.top,
      paddingVertical: vertical || v,
      paddingHorizontal: horizontal || h,
    };
  }

  return {
    padding,
  };
};

const extractBorderRadius = props => {
  const {radius} = props;

  if (radius === undefined) {
    return {};
  }

  if (isObject(radius)) {
    const {left, right, top, bottom} = radius;
    return {
      borderBottomEndRadius: bottom || left || radius.bottom_left,
      borderBottomStartRadius: bottom || right || radius.bottom_right,
      borderTopEndRadius: top || left || radius.top_left,
      borderTopStartRadius: top || right || radius.top_right,
    };
  }

  return {
    borderRadius: radius,
  };
};

export const propToStyleSheet = (props: {}) => 
    removeUndefinedValues({
        padding: extractPadding(props),
        borderRadius: extractBorderRadius(props),
        width: props.size,
        height: props.size,
        backgroundColor: props.background,
  });