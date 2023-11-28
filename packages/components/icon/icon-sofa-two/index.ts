import type { App } from 'vue';
import _IconSofaTwo from './icon-sofa-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSofaTwo.name = getComponentsPrefix() + _IconSofaTwo.name;

const IconSofaTwo = Object.assign(_IconSofaTwo, {
  install: (app: App) => {
    app.component(_IconSofaTwo.name, _IconSofaTwo);
  }
});

export default IconSofaTwo;