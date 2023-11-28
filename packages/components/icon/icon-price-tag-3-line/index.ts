import type { App } from 'vue';
import _IconPriceTag3Line from './icon-price-tag-3-line.vue';

const IconPriceTag3Line = Object.assign(_IconPriceTag3Line, {
  install: (app: App) => {
    app.component(_IconPriceTag3Line.name, _IconPriceTag3Line);
  }
});

export default IconPriceTag3Line;