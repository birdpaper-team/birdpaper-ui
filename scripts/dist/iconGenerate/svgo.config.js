"use strict";
// https://github.com/svg/svgo
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
        'removeStyleElement',
        'removeScriptElement',
        'removeDimensions',
        {
            name: 'removeAttrs',
            params: {
                attrs: [
                    'class',
                    'style',
                ],
            },
        },
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [
                    { ':class': 'iconClass' },
                    { ':style': 'innerStyle' },
                    { '@click': 'onClick' },
                ],
            },
        },
    ],
};
exports.default = options;
//# sourceMappingURL=svgo.config.js.map