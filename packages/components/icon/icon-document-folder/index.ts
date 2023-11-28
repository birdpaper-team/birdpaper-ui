import type { App } from 'vue';
import _IconDocumentFolder from './icon-document-folder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDocumentFolder.name = getComponentsPrefix() + _IconDocumentFolder.name;

const IconDocumentFolder = Object.assign(_IconDocumentFolder, {
  install: (app: App) => {
    app.component(_IconDocumentFolder.name, _IconDocumentFolder);
  }
});

export default IconDocumentFolder;