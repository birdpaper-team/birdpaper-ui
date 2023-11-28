import type { App } from 'vue';
import _IconPlayWrong from './icon-play-wrong.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayWrong.name = getComponentsPrefix() + _IconPlayWrong.name;

const IconPlayWrong = Object.assign(_IconPlayWrong, {
  install: (app: App) => {
    app.component(_IconPlayWrong.name, _IconPlayWrong);
  }
});

export default IconPlayWrong;