import type { App } from 'vue';
import _IconMisalignedSemicircle from './icon-misaligned-semicircle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMisalignedSemicircle.name = getComponentsPrefix() + _IconMisalignedSemicircle.name;

const IconMisalignedSemicircle = Object.assign(_IconMisalignedSemicircle, {
  install: (app: App) => {
    app.component(_IconMisalignedSemicircle.name, _IconMisalignedSemicircle);
  }
});

export default IconMisalignedSemicircle;