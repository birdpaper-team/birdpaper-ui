import type { App } from 'vue';
import _IconStickers from './icon-stickers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStickers.name = getComponentsPrefix() + _IconStickers.name;

const IconStickers = Object.assign(_IconStickers, {
  install: (app: App) => {
    app.component(_IconStickers.name, _IconStickers);
  }
});

export default IconStickers;