import type { App } from 'vue';
import _IconThumbsUp from './icon-thumbs-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThumbsUp.name = getComponentsPrefix() + _IconThumbsUp.name;

const IconThumbsUp = Object.assign(_IconThumbsUp, {
  install: (app: App) => {
    app.component(_IconThumbsUp.name, _IconThumbsUp);
  }
});

export default IconThumbsUp;