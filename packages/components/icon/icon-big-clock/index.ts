import type { App } from 'vue';
import _IconBigClock from './icon-big-clock.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBigClock.name = getComponentsPrefix() + _IconBigClock.name;

const IconBigClock = Object.assign(_IconBigClock, {
  install: (app: App) => {
    app.component(_IconBigClock.name, _IconBigClock);
  }
});

export default IconBigClock;