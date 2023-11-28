import type { App } from 'vue';
import _IconTakeOffOne from './icon-take-off-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTakeOffOne.name = getComponentsPrefix() + _IconTakeOffOne.name;

const IconTakeOffOne = Object.assign(_IconTakeOffOne, {
  install: (app: App) => {
    app.component(_IconTakeOffOne.name, _IconTakeOffOne);
  }
});

export default IconTakeOffOne;