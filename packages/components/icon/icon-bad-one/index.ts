import type { App } from 'vue';
import _IconBadOne from './icon-bad-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBadOne.name = getComponentsPrefix() + _IconBadOne.name;

const IconBadOne = Object.assign(_IconBadOne, {
  install: (app: App) => {
    app.component(_IconBadOne.name, _IconBadOne);
  }
});

export default IconBadOne;