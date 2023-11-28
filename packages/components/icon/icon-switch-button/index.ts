import type { App } from 'vue';
import _IconSwitchButton from './icon-switch-button.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitchButton.name = getComponentsPrefix() + _IconSwitchButton.name;

const IconSwitchButton = Object.assign(_IconSwitchButton, {
  install: (app: App) => {
    app.component(_IconSwitchButton.name, _IconSwitchButton);
  }
});

export default IconSwitchButton;