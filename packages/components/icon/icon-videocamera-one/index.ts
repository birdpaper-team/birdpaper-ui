import type { App } from 'vue';
import _IconVideocameraOne from './icon-videocamera-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideocameraOne.name = getComponentsPrefix() + _IconVideocameraOne.name;

const IconVideocameraOne = Object.assign(_IconVideocameraOne, {
  install: (app: App) => {
    app.component(_IconVideocameraOne.name, _IconVideocameraOne);
  }
});

export default IconVideocameraOne;