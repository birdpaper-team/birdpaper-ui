import type { App } from 'vue';
import _IconSettingTwo from './icon-setting-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSettingTwo.name = getComponentsPrefix() + _IconSettingTwo.name;

const IconSettingTwo = Object.assign(_IconSettingTwo, {
  install: (app: App) => {
    app.component(_IconSettingTwo.name, _IconSettingTwo);
  }
});

export default IconSettingTwo;