import type { App } from 'vue';
import _IconHeart from './icon-heart.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeart.name = getComponentsPrefix() + _IconHeart.name;

const IconHeart = Object.assign(_IconHeart, {
  install: (app: App) => {
    app.component(_IconHeart.name, _IconHeart);
  }
});

export default IconHeart;