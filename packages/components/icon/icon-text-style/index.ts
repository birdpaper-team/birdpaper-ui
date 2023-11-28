import type { App } from 'vue';
import _IconTextStyle from './icon-text-style.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextStyle.name = getComponentsPrefix() + _IconTextStyle.name;

const IconTextStyle = Object.assign(_IconTextStyle, {
  install: (app: App) => {
    app.component(_IconTextStyle.name, _IconTextStyle);
  }
});

export default IconTextStyle;