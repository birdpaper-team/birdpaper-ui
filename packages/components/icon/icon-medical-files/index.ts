import type { App } from 'vue';
import _IconMedicalFiles from './icon-medical-files.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMedicalFiles.name = getComponentsPrefix() + _IconMedicalFiles.name;

const IconMedicalFiles = Object.assign(_IconMedicalFiles, {
  install: (app: App) => {
    app.component(_IconMedicalFiles.name, _IconMedicalFiles);
  }
});

export default IconMedicalFiles;