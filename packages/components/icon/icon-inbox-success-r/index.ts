import type { App } from 'vue';
import _IconInboxSuccessR from './icon-inbox-success-r.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInboxSuccessR.name = getComponentsPrefix() + _IconInboxSuccessR.name;

const IconInboxSuccessR = Object.assign(_IconInboxSuccessR, {
  install: (app: App) => {
    app.component(_IconInboxSuccessR.name, _IconInboxSuccessR);
  }
});

export default IconInboxSuccessR;