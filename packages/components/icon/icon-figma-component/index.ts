import type { App } from 'vue';
import _IconFigmaComponent from './icon-figma-component.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFigmaComponent.name = getComponentsPrefix() + _IconFigmaComponent.name;

const IconFigmaComponent = Object.assign(_IconFigmaComponent, {
  install: (app: App) => {
    app.component(_IconFigmaComponent.name, _IconFigmaComponent);
  }
});

export default IconFigmaComponent;