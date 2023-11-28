import type { App } from 'vue';
import _IconSofa from './icon-sofa.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSofa.name = getComponentsPrefix() + _IconSofa.name;

const IconSofa = Object.assign(_IconSofa, {
  install: (app: App) => {
    app.component(_IconSofa.name, _IconSofa);
  }
});

export default IconSofa;