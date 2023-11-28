import type { App } from 'vue';
import _IconMessagesOne from './icon-messages-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessagesOne.name = getComponentsPrefix() + _IconMessagesOne.name;

const IconMessagesOne = Object.assign(_IconMessagesOne, {
  install: (app: App) => {
    app.component(_IconMessagesOne.name, _IconMessagesOne);
  }
});

export default IconMessagesOne;