import type { App } from 'vue';
import _IconShare from './icon-share.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShare.name = getComponentsPrefix() + _IconShare.name;

const IconShare = Object.assign(_IconShare, {
  install: (app: App) => {
    app.component(_IconShare.name, _IconShare);
  }
});

export default IconShare;