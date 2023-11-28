import type { App } from 'vue';
import _IconSwitchThemes from './icon-switch-themes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitchThemes.name = getComponentsPrefix() + _IconSwitchThemes.name;

const IconSwitchThemes = Object.assign(_IconSwitchThemes, {
  install: (app: App) => {
    app.component(_IconSwitchThemes.name, _IconSwitchThemes);
  }
});

export default IconSwitchThemes;