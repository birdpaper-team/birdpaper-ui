import type { App } from 'vue';
import _IconComments from './icon-comments.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconComments.name = getComponentsPrefix() + _IconComments.name;

const IconComments = Object.assign(_IconComments, {
  install: (app: App) => {
    app.component(_IconComments.name, _IconComments);
  }
});

export default IconComments;