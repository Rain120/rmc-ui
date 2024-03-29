import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class EllipsisCircle extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("g", { fillRule: "evenodd" },
                React.createElement("path", { d: "M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z" }),
                React.createElement("circle", { cx: "21.888", cy: "22.701", r: "2.445" }),
                React.createElement("circle", { cx: "12.23", cy: "22.701", r: "2.445" }),
                React.createElement("circle", { cx: "31.546", cy: "22.701", r: "2.445" }))));
    }
}
EllipsisCircle.defaultProps = {
    type: 'ellipsis-circle',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=ellipsis-circle.js.map