import type { App } from 'vue';
import _IconBuildingLine from './icon-building-line.vue';

const IconBuildingLine = Object.assign(_IconBuildingLine, {
  install: (app: App) => {
    app.component(_IconBuildingLine.name, _IconBuildingLine);
  }
});

export default IconBuildingLine;