import type { App } from 'vue';
import _IconZhihuLine from './icon-zhihu-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconZhihuLine.name = getComponentsPrefix() + _IconZhihuLine.name;

const IconZhihuLine = Object.assign(_IconZhihuLine, {
  install: (app: App) => {
    app.component(_IconZhihuLine.name, _IconZhihuLine);
  }
});

export default IconZhihuLine;