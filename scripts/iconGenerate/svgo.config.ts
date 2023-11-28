// https://github.com/svg/svgo

import { OptimizeOptions } from 'svgo';

const options: OptimizeOptions = {
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
          'stroke-width',
          'stroke-linecap',
          'stroke-linejoin',
        ],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { ':class': 'iconClass' },
          { ':style': 'innerStyle' },
          { ':stroke-width': 'strokeWidth' },
          { ':stroke-linecap': 'strokeLinecap' },
          { ':stroke-linejoin': 'strokeLinejoin' },
          { '@click': 'onClick' },
        ],
      },
    },
  ],
};

export default options;
