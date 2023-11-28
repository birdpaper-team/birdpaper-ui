import type { App } from 'vue';
import _IconPauseOne from './icon-pause-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPauseOne.name = getComponentsPrefix() + _IconPauseOne.name;

const IconPauseOne = Object.assign(_IconPauseOne, {
  install: (app: App) => {
    app.component(_IconPauseOne.name, _IconPauseOne);
  }
});

export default IconPauseOne;