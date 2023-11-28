import type { App } from 'vue';
import _IconTvOne from './icon-tv-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTvOne.name = getComponentsPrefix() + _IconTvOne.name;

const IconTvOne = Object.assign(_IconTvOne, {
  install: (app: App) => {
    app.component(_IconTvOne.name, _IconTvOne);
  }
});

export default IconTvOne;