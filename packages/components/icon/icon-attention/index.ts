import type { App } from 'vue';
import _IconAttention from './icon-attention.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAttention.name = getComponentsPrefix() + _IconAttention.name;

const IconAttention = Object.assign(_IconAttention, {
  install: (app: App) => {
    app.component(_IconAttention.name, _IconAttention);
  }
});

export default IconAttention;