import type { App } from 'vue';
import _IconCertificate from './icon-certificate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCertificate.name = getComponentsPrefix() + _IconCertificate.name;

const IconCertificate = Object.assign(_IconCertificate, {
  install: (app: App) => {
    app.component(_IconCertificate.name, _IconCertificate);
  }
});

export default IconCertificate;