import type { App } from 'vue';
import _IconQuillPenLine from './icon-quill-pen-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQuillPenLine.name = getComponentsPrefix() + _IconQuillPenLine.name;

const IconQuillPenLine = Object.assign(_IconQuillPenLine, {
  install: (app: App) => {
    app.component(_IconQuillPenLine.name, _IconQuillPenLine);
  }
});

export default IconQuillPenLine;