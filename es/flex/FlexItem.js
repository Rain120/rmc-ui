var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from 'components/_util/setPrefix';
export default class FlexItem extends Component {
    render() {
        const _a = this.props, { className, children, style } = _a, resetProps = __rest(_a, ["className", "children", "style"]);
        const prefixCls = setPrefix('flex-item');
        const wrapCls = classnames(className, prefixCls);
        return (React.createElement("div", Object.assign({ className: wrapCls, style: style }, resetProps), children));
    }
}
//# sourceMappingURL=FlexItem.js.map