import type { App } from 'vue';
import _IconTexture from './icon-texture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTexture.name = getComponentsPrefix() + _IconTexture.name;

const IconTexture = Object.assign(_IconTexture, {
  install: (app: App) => {
    app.component(_IconTexture.name, _IconTexture);
  }
});

export default IconTexture;