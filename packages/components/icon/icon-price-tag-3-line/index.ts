import type { App } from 'vue';
import _IconPriceTag3Line from './icon-price-tag-3-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPriceTag3Line.name = getComponentsPrefix() + _IconPriceTag3Line.name;

const IconPriceTag3Line = Object.assign(_IconPriceTag3Line, {
  install: (app: App) => {
    app.component(_IconPriceTag3Line.name, _IconPriceTag3Line);
  }
});

export default IconPriceTag3Line;