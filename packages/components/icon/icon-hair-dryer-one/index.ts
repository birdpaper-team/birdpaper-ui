import type { App } from 'vue';
import _IconHairDryerOne from './icon-hair-dryer-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHairDryerOne.name = getComponentsPrefix() + _IconHairDryerOne.name;

const IconHairDryerOne = Object.assign(_IconHairDryerOne, {
  install: (app: App) => {
    app.component(_IconHairDryerOne.name, _IconHairDryerOne);
  }
});

export default IconHairDryerOne;