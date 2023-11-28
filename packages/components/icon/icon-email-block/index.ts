import type { App } from 'vue';
import _IconEmailBlock from './icon-email-block.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailBlock.name = getComponentsPrefix() + _IconEmailBlock.name;

const IconEmailBlock = Object.assign(_IconEmailBlock, {
  install: (app: App) => {
    app.component(_IconEmailBlock.name, _IconEmailBlock);
  }
});

export default IconEmailBlock;