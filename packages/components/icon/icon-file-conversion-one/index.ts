import type { App } from 'vue';
import _IconFileConversionOne from './icon-file-conversion-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileConversionOne.name = getComponentsPrefix() + _IconFileConversionOne.name;

const IconFileConversionOne = Object.assign(_IconFileConversionOne, {
  install: (app: App) => {
    app.component(_IconFileConversionOne.name, _IconFileConversionOne);
  }
});

export default IconFileConversionOne;