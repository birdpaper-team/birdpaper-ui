import type { App } from 'vue';
import _IconFork from './icon-fork.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFork.name = getComponentsPrefix() + _IconFork.name;

const IconFork = Object.assign(_IconFork, {
  install: (app: App) => {
    app.component(_IconFork.name, _IconFork);
  }
});

export default IconFork;