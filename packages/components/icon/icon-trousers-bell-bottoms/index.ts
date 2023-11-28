import type { App } from 'vue';
import _IconTrousersBellBottoms from './icon-trousers-bell-bottoms.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrousersBellBottoms.name = getComponentsPrefix() + _IconTrousersBellBottoms.name;

const IconTrousersBellBottoms = Object.assign(_IconTrousersBellBottoms, {
  install: (app: App) => {
    app.component(_IconTrousersBellBottoms.name, _IconTrousersBellBottoms);
  }
});

export default IconTrousersBellBottoms;