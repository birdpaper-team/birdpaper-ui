import type { App } from 'vue';
import _IconHamburgerOne from './icon-hamburger-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHamburgerOne.name = getComponentsPrefix() + _IconHamburgerOne.name;

const IconHamburgerOne = Object.assign(_IconHamburgerOne, {
  install: (app: App) => {
    app.component(_IconHamburgerOne.name, _IconHamburgerOne);
  }
});

export default IconHamburgerOne;