import type { App } from 'vue';
import _IconWord from './icon-word.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWord.name = getComponentsPrefix() + _IconWord.name;

const IconWord = Object.assign(_IconWord, {
  install: (app: App) => {
    app.component(_IconWord.name, _IconWord);
  }
});

export default IconWord;