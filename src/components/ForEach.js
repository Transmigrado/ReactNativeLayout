import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { isObject, objToProps } from '../utils/Eval';


type Props = {
  scroll: boolean,
  children?: React.Node,
  data: Array
}

const ForEach = (rootProps : Props) => {

  const { data, scroll } = rootProps
  
  const objToComponent = (item, element, constraint) => {
    const Component = element.type;

    let props = objToProps(item, element.props);

    const {isLast, isFirst, isOdd, isPair} = constraint;

    if (
      (isLast && props.nolast) ||
      (isFirst && props.nofirst) ||
      (isOdd && props.pair) ||
      (isPair && props.odd)
    ) {
      return null;
    }

    if (element.props.children !== undefined) {
      if (isObject(element.props.children)) {
        const Children = objToComponent(
          item,
          element.props.children,
          constraint,
        );

        return <Component {...props}>{Children}</Component>;
      } else if (element.props.children instanceof Array) {
        return (
          <Component {...props}>
            {[...element.props.children].map(e =>
              objToComponent(item, e, constraint),
            )}
          </Component>
        );
      }
    }

    return <Component {...props} />;
  };

  const mapper = ({item, children, parent}, i) => {
    const isLast = parent === data.length - 1;
    const isFirst = parent === 0;
    const isOdd = parent % 2 === 0;
    const isPair = parent % 2 !== 0;

    if (children instanceof Array) {
      return (
        <React.Fragment key={`key-${i}`}>
          {[...children]
            .map(e => ({item, children: e, parent: i}))
            .map(mapper)}
        </React.Fragment>
      );
    }

    return objToComponent(item, children, {
      isLast,
      isFirst,
      isOdd,
      isPair,
    });
  };

  const compose = (item, i) => ({item, children: rootProps.children});

  if(scroll){
    return <ScrollView>{data.map(compose).map(mapper)}</ScrollView>
  }
  return (
    <>{data.map(compose).map(mapper)}</>
  );

 
}

export default ForEach 