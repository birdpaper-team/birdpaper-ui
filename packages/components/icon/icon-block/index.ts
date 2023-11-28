import type { App } from 'vue';
import _IconBlock from './icon-block.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlock.name = getComponentsPrefix() + _IconBlock.name;

const IconBlock = Object.assign(_IconBlock, {
  install: (app: App) => {
    app.component(_IconBlock.name, _IconBlock);
  }
});

export default IconBlock;