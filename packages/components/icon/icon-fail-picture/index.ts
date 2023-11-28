import type { App } from 'vue';
import _IconFailPicture from './icon-fail-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFailPicture.name = getComponentsPrefix() + _IconFailPicture.name;

const IconFailPicture = Object.assign(_IconFailPicture, {
  install: (app: App) => {
    app.component(_IconFailPicture.name, _IconFailPicture);
  }
});

export default IconFailPicture;