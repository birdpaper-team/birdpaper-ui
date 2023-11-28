import type { App } from 'vue';
import _IconClothesPantsShort from './icon-clothes-pants-short.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesPantsShort.name = getComponentsPrefix() + _IconClothesPantsShort.name;

const IconClothesPantsShort = Object.assign(_IconClothesPantsShort, {
  install: (app: App) => {
    app.component(_IconClothesPantsShort.name, _IconClothesPantsShort);
  }
});

export default IconClothesPantsShort;