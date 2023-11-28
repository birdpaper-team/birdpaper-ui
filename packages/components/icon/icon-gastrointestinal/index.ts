import type { App } from 'vue';
import _IconGastrointestinal from './icon-gastrointestinal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGastrointestinal.name = getComponentsPrefix() + _IconGastrointestinal.name;

const IconGastrointestinal = Object.assign(_IconGastrointestinal, {
  install: (app: App) => {
    app.component(_IconGastrointestinal.name, _IconGastrointestinal);
  }
});

export default IconGastrointestinal;