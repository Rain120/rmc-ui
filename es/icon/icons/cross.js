import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Cross extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { fillRule: "evenodd", d: "M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z" })));
    }
}
Cross.defaultProps = {
    type: 'cross',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=cross.js.map