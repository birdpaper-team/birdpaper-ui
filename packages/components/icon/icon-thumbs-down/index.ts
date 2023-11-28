import type { App } from 'vue';
import _IconThumbsDown from './icon-thumbs-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThumbsDown.name = getComponentsPrefix() + _IconThumbsDown.name;

const IconThumbsDown = Object.assign(_IconThumbsDown, {
  install: (app: App) => {
    app.component(_IconThumbsDown.name, _IconThumbsDown);
  }
});

export default IconThumbsDown;