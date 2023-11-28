import type { App } from 'vue';
import _IconChair from './icon-chair.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChair.name = getComponentsPrefix() + _IconChair.name;

const IconChair = Object.assign(_IconChair, {
  install: (app: App) => {
    app.component(_IconChair.name, _IconChair);
  }
});

export default IconChair;