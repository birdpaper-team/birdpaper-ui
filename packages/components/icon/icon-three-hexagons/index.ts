import type { App } from 'vue';
import _IconThreeHexagons from './icon-three-hexagons.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThreeHexagons.name = getComponentsPrefix() + _IconThreeHexagons.name;

const IconThreeHexagons = Object.assign(_IconThreeHexagons, {
  install: (app: App) => {
    app.component(_IconThreeHexagons.name, _IconThreeHexagons);
  }
});

export default IconThreeHexagons;