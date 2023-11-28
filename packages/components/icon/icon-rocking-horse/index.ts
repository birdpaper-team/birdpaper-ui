import type { App } from 'vue';
import _IconRockingHorse from './icon-rocking-horse.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRockingHorse.name = getComponentsPrefix() + _IconRockingHorse.name;

const IconRockingHorse = Object.assign(_IconRockingHorse, {
  install: (app: App) => {
    app.component(_IconRockingHorse.name, _IconRockingHorse);
  }
});

export default IconRockingHorse;