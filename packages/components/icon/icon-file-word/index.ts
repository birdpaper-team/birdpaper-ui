import type { App } from 'vue';
import _IconFileWord from './icon-file-word.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileWord.name = getComponentsPrefix() + _IconFileWord.name;

const IconFileWord = Object.assign(_IconFileWord, {
  install: (app: App) => {
    app.component(_IconFileWord.name, _IconFileWord);
  }
});

export default IconFileWord;