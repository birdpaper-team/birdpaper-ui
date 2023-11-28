import type { App } from 'vue';
import _IconHanfuChineseStyle from './icon-hanfu-chinese-style.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHanfuChineseStyle.name = getComponentsPrefix() + _IconHanfuChineseStyle.name;

const IconHanfuChineseStyle = Object.assign(_IconHanfuChineseStyle, {
  install: (app: App) => {
    app.component(_IconHanfuChineseStyle.name, _IconHanfuChineseStyle);
  }
});

export default IconHanfuChineseStyle;