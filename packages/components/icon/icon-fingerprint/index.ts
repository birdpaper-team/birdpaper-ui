import type { App } from 'vue';
import _IconFingerprint from './icon-fingerprint.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFingerprint.name = getComponentsPrefix() + _IconFingerprint.name;

const IconFingerprint = Object.assign(_IconFingerprint, {
  install: (app: App) => {
    app.component(_IconFingerprint.name, _IconFingerprint);
  }
});

export default IconFingerprint;