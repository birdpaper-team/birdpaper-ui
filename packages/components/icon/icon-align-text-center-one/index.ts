import type { App } from 'vue';
import _IconAlignTextCenterOne from './icon-align-text-center-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextCenterOne.name = getComponentsPrefix() + _IconAlignTextCenterOne.name;

const IconAlignTextCenterOne = Object.assign(_IconAlignTextCenterOne, {
  install: (app: App) => {
    app.component(_IconAlignTextCenterOne.name, _IconAlignTextCenterOne);
  }
});

export default IconAlignTextCenterOne;