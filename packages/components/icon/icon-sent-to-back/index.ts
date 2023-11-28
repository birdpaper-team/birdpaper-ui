import type { App } from 'vue';
import _IconSentToBack from './icon-sent-to-back.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSentToBack.name = getComponentsPrefix() + _IconSentToBack.name;

const IconSentToBack = Object.assign(_IconSentToBack, {
  install: (app: App) => {
    app.component(_IconSentToBack.name, _IconSentToBack);
  }
});

export default IconSentToBack;