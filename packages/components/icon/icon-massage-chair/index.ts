import type { App } from 'vue';
import _IconMassageChair from './icon-massage-chair.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMassageChair.name = getComponentsPrefix() + _IconMassageChair.name;

const IconMassageChair = Object.assign(_IconMassageChair, {
  install: (app: App) => {
    app.component(_IconMassageChair.name, _IconMassageChair);
  }
});

export default IconMassageChair;