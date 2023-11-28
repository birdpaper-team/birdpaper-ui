import type { App } from 'vue';
import _IconMedicalBox from './icon-medical-box.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMedicalBox.name = getComponentsPrefix() + _IconMedicalBox.name;

const IconMedicalBox = Object.assign(_IconMedicalBox, {
  install: (app: App) => {
    app.component(_IconMedicalBox.name, _IconMedicalBox);
  }
});

export default IconMedicalBox;