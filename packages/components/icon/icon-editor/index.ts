import type { App } from 'vue';
import _IconEditor from './icon-editor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEditor.name = getComponentsPrefix() + _IconEditor.name;

const IconEditor = Object.assign(_IconEditor, {
  install: (app: App) => {
    app.component(_IconEditor.name, _IconEditor);
  }
});

export default IconEditor;