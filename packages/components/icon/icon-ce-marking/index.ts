import type { App } from 'vue';
import _IconCeMarking from './icon-ce-marking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCeMarking.name = getComponentsPrefix() + _IconCeMarking.name;

const IconCeMarking = Object.assign(_IconCeMarking, {
  install: (app: App) => {
    app.component(_IconCeMarking.name, _IconCeMarking);
  }
});

export default IconCeMarking;