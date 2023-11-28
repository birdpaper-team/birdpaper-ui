import type { App } from 'vue';
import _IconNotebookAndPen from './icon-notebook-and-pen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNotebookAndPen.name = getComponentsPrefix() + _IconNotebookAndPen.name;

const IconNotebookAndPen = Object.assign(_IconNotebookAndPen, {
  install: (app: App) => {
    app.component(_IconNotebookAndPen.name, _IconNotebookAndPen);
  }
});

export default IconNotebookAndPen;