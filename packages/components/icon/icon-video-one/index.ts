import type { App } from 'vue';
import _IconVideoOne from './icon-video-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideoOne.name = getComponentsPrefix() + _IconVideoOne.name;

const IconVideoOne = Object.assign(_IconVideoOne, {
  install: (app: App) => {
    app.component(_IconVideoOne.name, _IconVideoOne);
  }
});

export default IconVideoOne;