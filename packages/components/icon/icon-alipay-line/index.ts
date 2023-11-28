import type { App } from 'vue';
import _IconAlipayLine from './icon-alipay-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlipayLine.name = getComponentsPrefix() + _IconAlipayLine.name;

const IconAlipayLine = Object.assign(_IconAlipayLine, {
  install: (app: App) => {
    app.component(_IconAlipayLine.name, _IconAlipayLine);
  }
});

export default IconAlipayLine;