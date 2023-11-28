import type { App } from 'vue';
import _IconFloorTile from './icon-floor-tile.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFloorTile.name = getComponentsPrefix() + _IconFloorTile.name;

const IconFloorTile = Object.assign(_IconFloorTile, {
  install: (app: App) => {
    app.component(_IconFloorTile.name, _IconFloorTile);
  }
});

export default IconFloorTile;