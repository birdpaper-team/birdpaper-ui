import type { App } from 'vue';
import _IconContrastView from './icon-contrast-view.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconContrastView.name = getComponentsPrefix() + _IconContrastView.name;

const IconContrastView = Object.assign(_IconContrastView, {
  install: (app: App) => {
    app.component(_IconContrastView.name, _IconContrastView);
  }
});

export default IconContrastView;