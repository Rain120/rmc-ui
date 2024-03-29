import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { IconSizeProps, CustomProps, CustomIconProps } from '../_util/customProps';
import { WrapperComponent } from '../_util/WrapperComponent';
import { getIconLists } from './icons/index';
import warning from "../_util/warning";
import './style';

interface IconProps extends IconSizeProps, CustomProps, CustomIconProps {
  type: string;
}

export default class Icon extends Component<IconProps> {

  renderSvg() {
    const { type, ...restProps } = this.props;
    console.log(getIconLists(type))
    return WrapperComponent(getIconLists(type), restProps);
  }

  render() {
    const {
      style,
      className,
      type,
      viewBox,
      children,
      component: Component
    } = this.props;
    const prefixCls = setPrefix('icon');
    const wrapCls = classnames(prefixCls, className);

    let innerNode: React.ReactNode;

    const innerSvgProps: CustomIconProps = {
      ...this.props
    };

    warning(
      Boolean(type || Component || children),
      'Icon',
      'Should have `type` prop or `component` prop or `children`.',
    );

    if (!viewBox) {
      delete innerSvgProps['viewBox'];
    }

    if (Component) {
      innerNode = <Component />;
    } else if (children) {
      warning(
        Boolean(viewBox) ||
          (React.Children.count(children) === 1 &&
            React.isValidElement(children) &&
            React.Children.only(children).type === 'use'),
        'Icon',
        'Make sure that you provide correct `viewBox`' +
          ' prop (default `0 0 1024 1024`) to the icon.',
      );
      innerNode = (
        <svg {...innerSvgProps} viewBox={viewBox}>
          {children}
        </svg>
      );
    }

    return (
      <div className={wrapCls} style={style}>
        {type ? this.renderSvg() : innerNode}
      </div>
    )
  }
}
