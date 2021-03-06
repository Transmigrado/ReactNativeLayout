import { isObject } from './Eval'

const removeUndefinedValues = o => Object.keys(o).reduce(
    (acc, cur) => (o[cur] !== undefined ? {...acc, [cur]: o[cur]} : acc),
    {});

const extractPadding = props => {
  const {padding} = props;

  if (padding === undefined) {
    return {};
  }

  if (isObject(padding)) {
    const {horizontal, h, vertical, v} = padding;
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

const extractBackground = (props: {}) => {
    const { background } = props;

    if (background === undefined) {
        return {};
    }

    return {
        backgroundColor: background
    }
} 

const extractPosition = (props: {}) => {
  const { top, left, right, bottom } = props;
  
  if (top) {
    return {top: props.offset.y, left: props.offset.x};
  }

  if (bottom) {
    return {bottom: props.offset.y, left:props.offset.x};
  }



  return {};


}

const extractSize = (props: {}) => {
  const { size } = props;
  
  return {
    width: size,
    height: size
  };
}


export const propToStyleSheet = (props: {}) => 
    removeUndefinedValues({
        ...removeUndefinedValues(extractPadding(props)),
        ...removeUndefinedValues(extractBorderRadius(props)),
        ...removeUndefinedValues(extractBackground(props)),
        ...removeUndefinedValues(extractPosition(props)),
        ...removeUndefinedValues(extractSize(props))
});