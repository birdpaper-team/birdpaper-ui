import type { App } from 'vue';
import _IconFileQualityOne from './icon-file-quality-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileQualityOne.name = getComponentsPrefix() + _IconFileQualityOne.name;

const IconFileQualityOne = Object.assign(_IconFileQualityOne, {
  install: (app: App) => {
    app.component(_IconFileQualityOne.name, _IconFileQualityOne);
  }
});

export default IconFileQualityOne;