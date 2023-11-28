import type { App } from 'vue';
import _IconMicrowaves from './icon-microwaves.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicrowaves.name = getComponentsPrefix() + _IconMicrowaves.name;

const IconMicrowaves = Object.assign(_IconMicrowaves, {
  install: (app: App) => {
    app.component(_IconMicrowaves.name, _IconMicrowaves);
  }
});

export default IconMicrowaves;