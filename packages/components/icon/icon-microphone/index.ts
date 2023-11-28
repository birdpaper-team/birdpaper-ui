import type { App } from 'vue';
import _IconMicrophone from './icon-microphone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicrophone.name = getComponentsPrefix() + _IconMicrophone.name;

const IconMicrophone = Object.assign(_IconMicrophone, {
  install: (app: App) => {
    app.component(_IconMicrophone.name, _IconMicrophone);
  }
});

export default IconMicrophone;