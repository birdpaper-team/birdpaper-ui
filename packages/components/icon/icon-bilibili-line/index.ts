import type { App } from 'vue';
import _IconBilibiliLine from './icon-bilibili-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBilibiliLine.name = getComponentsPrefix() + _IconBilibiliLine.name;

const IconBilibiliLine = Object.assign(_IconBilibiliLine, {
  install: (app: App) => {
    app.component(_IconBilibiliLine.name, _IconBilibiliLine);
  }
});

export default IconBilibiliLine;