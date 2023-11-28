import type { App } from 'vue';
import _IconTorch from './icon-torch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTorch.name = getComponentsPrefix() + _IconTorch.name;

const IconTorch = Object.assign(_IconTorch, {
  install: (app: App) => {
    app.component(_IconTorch.name, _IconTorch);
  }
});

export default IconTorch;