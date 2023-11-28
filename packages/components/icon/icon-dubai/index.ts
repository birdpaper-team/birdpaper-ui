import type { App } from 'vue';
import _IconDubai from './icon-dubai.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDubai.name = getComponentsPrefix() + _IconDubai.name;

const IconDubai = Object.assign(_IconDubai, {
  install: (app: App) => {
    app.component(_IconDubai.name, _IconDubai);
  }
});

export default IconDubai;