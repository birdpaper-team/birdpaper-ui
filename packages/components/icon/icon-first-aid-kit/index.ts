import type { App } from 'vue';
import _IconFirstAidKit from './icon-first-aid-kit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFirstAidKit.name = getComponentsPrefix() + _IconFirstAidKit.name;

const IconFirstAidKit = Object.assign(_IconFirstAidKit, {
  install: (app: App) => {
    app.component(_IconFirstAidKit.name, _IconFirstAidKit);
  }
});

export default IconFirstAidKit;