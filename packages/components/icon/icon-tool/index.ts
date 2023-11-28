import type { App } from 'vue';
import _IconTool from './icon-tool.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTool.name = getComponentsPrefix() + _IconTool.name;

const IconTool = Object.assign(_IconTool, {
  install: (app: App) => {
    app.component(_IconTool.name, _IconTool);
  }
});

export default IconTool;