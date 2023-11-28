import type { App } from 'vue';
import _IconUserBusiness from './icon-user-business.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUserBusiness.name = getComponentsPrefix() + _IconUserBusiness.name;

const IconUserBusiness = Object.assign(_IconUserBusiness, {
  install: (app: App) => {
    app.component(_IconUserBusiness.name, _IconUserBusiness);
  }
});

export default IconUserBusiness;