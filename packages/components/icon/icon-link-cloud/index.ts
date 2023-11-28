import type { App } from 'vue';
import _IconLinkCloud from './icon-link-cloud.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkCloud.name = getComponentsPrefix() + _IconLinkCloud.name;

const IconLinkCloud = Object.assign(_IconLinkCloud, {
  install: (app: App) => {
    app.component(_IconLinkCloud.name, _IconLinkCloud);
  }
});

export default IconLinkCloud;