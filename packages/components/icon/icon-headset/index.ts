import type { App } from 'vue';
import _IconHeadset from './icon-headset.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeadset.name = getComponentsPrefix() + _IconHeadset.name;

const IconHeadset = Object.assign(_IconHeadset, {
  install: (app: App) => {
    app.component(_IconHeadset.name, _IconHeadset);
  }
});

export default IconHeadset;