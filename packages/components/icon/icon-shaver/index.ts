import type { App } from 'vue';
import _IconShaver from './icon-shaver.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShaver.name = getComponentsPrefix() + _IconShaver.name;

const IconShaver = Object.assign(_IconShaver, {
  install: (app: App) => {
    app.component(_IconShaver.name, _IconShaver);
  }
});

export default IconShaver;