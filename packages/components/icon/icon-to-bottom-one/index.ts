import type { App } from 'vue';
import _IconToBottomOne from './icon-to-bottom-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToBottomOne.name = getComponentsPrefix() + _IconToBottomOne.name;

const IconToBottomOne = Object.assign(_IconToBottomOne, {
  install: (app: App) => {
    app.component(_IconToBottomOne.name, _IconToBottomOne);
  }
});

export default IconToBottomOne;