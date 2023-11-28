import type { App } from 'vue';
import _IconReverseOperationOut from './icon-reverse-operation-out.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReverseOperationOut.name = getComponentsPrefix() + _IconReverseOperationOut.name;

const IconReverseOperationOut = Object.assign(_IconReverseOperationOut, {
  install: (app: App) => {
    app.component(_IconReverseOperationOut.name, _IconReverseOperationOut);
  }
});

export default IconReverseOperationOut;