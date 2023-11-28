import type { App } from 'vue';
import _IconSlightlySmilingFace from './icon-slightly-smiling-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlightlySmilingFace.name = getComponentsPrefix() + _IconSlightlySmilingFace.name;

const IconSlightlySmilingFace = Object.assign(_IconSlightlySmilingFace, {
  install: (app: App) => {
    app.component(_IconSlightlySmilingFace.name, _IconSlightlySmilingFace);
  }
});

export default IconSlightlySmilingFace;