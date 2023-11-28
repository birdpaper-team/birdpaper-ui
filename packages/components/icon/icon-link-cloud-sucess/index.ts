import type { App } from 'vue';
import _IconLinkCloudSucess from './icon-link-cloud-sucess.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkCloudSucess.name = getComponentsPrefix() + _IconLinkCloudSucess.name;

const IconLinkCloudSucess = Object.assign(_IconLinkCloudSucess, {
  install: (app: App) => {
    app.component(_IconLinkCloudSucess.name, _IconLinkCloudSucess);
  }
});

export default IconLinkCloudSucess;