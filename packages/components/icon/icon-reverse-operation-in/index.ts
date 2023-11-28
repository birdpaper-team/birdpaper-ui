import type { App } from 'vue';
import _IconReverseOperationIn from './icon-reverse-operation-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReverseOperationIn.name = getComponentsPrefix() + _IconReverseOperationIn.name;

const IconReverseOperationIn = Object.assign(_IconReverseOperationIn, {
  install: (app: App) => {
    app.component(_IconReverseOperationIn.name, _IconReverseOperationIn);
  }
});

export default IconReverseOperationIn;