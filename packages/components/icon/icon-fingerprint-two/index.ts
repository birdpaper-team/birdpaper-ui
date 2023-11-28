import type { App } from 'vue';
import _IconFingerprintTwo from './icon-fingerprint-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFingerprintTwo.name = getComponentsPrefix() + _IconFingerprintTwo.name;

const IconFingerprintTwo = Object.assign(_IconFingerprintTwo, {
  install: (app: App) => {
    app.component(_IconFingerprintTwo.name, _IconFingerprintTwo);
  }
});

export default IconFingerprintTwo;