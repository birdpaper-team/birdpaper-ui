import type { App } from 'vue';
import _IconNotebookOne from './icon-notebook-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNotebookOne.name = getComponentsPrefix() + _IconNotebookOne.name;

const IconNotebookOne = Object.assign(_IconNotebookOne, {
  install: (app: App) => {
    app.component(_IconNotebookOne.name, _IconNotebookOne);
  }
});

export default IconNotebookOne;