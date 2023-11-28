import type { App } from 'vue';
import _IconBadTwo from './icon-bad-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBadTwo.name = getComponentsPrefix() + _IconBadTwo.name;

const IconBadTwo = Object.assign(_IconBadTwo, {
  install: (app: App) => {
    app.component(_IconBadTwo.name, _IconBadTwo);
  }
});

export default IconBadTwo;