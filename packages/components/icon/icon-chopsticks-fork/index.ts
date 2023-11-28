import type { App } from 'vue';
import _IconChopsticksFork from './icon-chopsticks-fork.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChopsticksFork.name = getComponentsPrefix() + _IconChopsticksFork.name;

const IconChopsticksFork = Object.assign(_IconChopsticksFork, {
  install: (app: App) => {
    app.component(_IconChopsticksFork.name, _IconChopsticksFork);
  }
});

export default IconChopsticksFork;