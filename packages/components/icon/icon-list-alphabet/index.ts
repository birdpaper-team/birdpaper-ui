import type { App } from 'vue';
import _IconListAlphabet from './icon-list-alphabet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListAlphabet.name = getComponentsPrefix() + _IconListAlphabet.name;

const IconListAlphabet = Object.assign(_IconListAlphabet, {
  install: (app: App) => {
    app.component(_IconListAlphabet.name, _IconListAlphabet);
  }
});

export default IconListAlphabet;