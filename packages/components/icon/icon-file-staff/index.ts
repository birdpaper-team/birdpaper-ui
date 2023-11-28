import type { App } from 'vue';
import _IconFileStaff from './icon-file-staff.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileStaff.name = getComponentsPrefix() + _IconFileStaff.name;

const IconFileStaff = Object.assign(_IconFileStaff, {
  install: (app: App) => {
    app.component(_IconFileStaff.name, _IconFileStaff);
  }
});

export default IconFileStaff;