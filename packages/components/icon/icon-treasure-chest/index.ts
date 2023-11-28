import type { App } from 'vue';
import _IconTreasureChest from './icon-treasure-chest.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTreasureChest.name = getComponentsPrefix() + _IconTreasureChest.name;

const IconTreasureChest = Object.assign(_IconTreasureChest, {
  install: (app: App) => {
    app.component(_IconTreasureChest.name, _IconTreasureChest);
  }
});

export default IconTreasureChest;