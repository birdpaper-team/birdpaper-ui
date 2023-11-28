import type { App } from 'vue';
import _IconDislikeTwo from './icon-dislike-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDislikeTwo.name = getComponentsPrefix() + _IconDislikeTwo.name;

const IconDislikeTwo = Object.assign(_IconDislikeTwo, {
  install: (app: App) => {
    app.component(_IconDislikeTwo.name, _IconDislikeTwo);
  }
});

export default IconDislikeTwo;