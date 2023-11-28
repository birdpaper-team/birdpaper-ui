import type { App } from 'vue';
import _IconCopyOne from './icon-copy-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCopyOne.name = getComponentsPrefix() + _IconCopyOne.name;

const IconCopyOne = Object.assign(_IconCopyOne, {
  install: (app: App) => {
    app.component(_IconCopyOne.name, _IconCopyOne);
  }
});

export default IconCopyOne;