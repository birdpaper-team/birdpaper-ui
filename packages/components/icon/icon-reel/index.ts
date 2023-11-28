import type { App } from 'vue';
import _IconReel from './icon-reel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReel.name = getComponentsPrefix() + _IconReel.name;

const IconReel = Object.assign(_IconReel, {
  install: (app: App) => {
    app.component(_IconReel.name, _IconReel);
  }
});

export default IconReel;