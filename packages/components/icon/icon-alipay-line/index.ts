import type { App } from 'vue';
import _IconAlipayLine from './icon-alipay-line.vue';

const IconAlipayLine = Object.assign(_IconAlipayLine, {
  install: (app: App) => {
    app.component(_IconAlipayLine.name, _IconAlipayLine);
  }
});

export default IconAlipayLine;