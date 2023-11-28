import type { App } from 'vue';
import _IconPaint from './icon-paint.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaint.name = getComponentsPrefix() + _IconPaint.name;

const IconPaint = Object.assign(_IconPaint, {
  install: (app: App) => {
    app.component(_IconPaint.name, _IconPaint);
  }
});

export default IconPaint;