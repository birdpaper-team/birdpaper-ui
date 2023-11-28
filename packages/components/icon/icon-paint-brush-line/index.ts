import type { App } from 'vue';
import _IconPaintBrushLine from './icon-paint-brush-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaintBrushLine.name = getComponentsPrefix() + _IconPaintBrushLine.name;

const IconPaintBrushLine = Object.assign(_IconPaintBrushLine, {
  install: (app: App) => {
    app.component(_IconPaintBrushLine.name, _IconPaintBrushLine);
  }
});

export default IconPaintBrushLine;