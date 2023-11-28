import type { App } from 'vue';
import _IconLinkCloudFaild from './icon-link-cloud-faild.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkCloudFaild.name = getComponentsPrefix() + _IconLinkCloudFaild.name;

const IconLinkCloudFaild = Object.assign(_IconLinkCloudFaild, {
  install: (app: App) => {
    app.component(_IconLinkCloudFaild.name, _IconLinkCloudFaild);
  }
});

export default IconLinkCloudFaild;