import type { App } from 'vue';
import _IconVideoTwo from './icon-video-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideoTwo.name = getComponentsPrefix() + _IconVideoTwo.name;

const IconVideoTwo = Object.assign(_IconVideoTwo, {
  install: (app: App) => {
    app.component(_IconVideoTwo.name, _IconVideoTwo);
  }
});

export default IconVideoTwo;