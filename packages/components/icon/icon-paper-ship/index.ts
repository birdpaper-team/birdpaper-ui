import type { App } from 'vue';
import _IconPaperShip from './icon-paper-ship.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaperShip.name = getComponentsPrefix() + _IconPaperShip.name;

const IconPaperShip = Object.assign(_IconPaperShip, {
  install: (app: App) => {
    app.component(_IconPaperShip.name, _IconPaperShip);
  }
});

export default IconPaperShip;