import type { App } from 'vue';
import _IconFileDoc from './icon-file-doc.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileDoc.name = getComponentsPrefix() + _IconFileDoc.name;

const IconFileDoc = Object.assign(_IconFileDoc, {
  install: (app: App) => {
    app.component(_IconFileDoc.name, _IconFileDoc);
  }
});

export default IconFileDoc;