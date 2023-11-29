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

export default options;
