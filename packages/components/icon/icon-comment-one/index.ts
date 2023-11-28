import type { App } from 'vue';
import _IconCommentOne from './icon-comment-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCommentOne.name = getComponentsPrefix() + _IconCommentOne.name;

const IconCommentOne = Object.assign(_IconCommentOne, {
  install: (app: App) => {
    app.component(_IconCommentOne.name, _IconCommentOne);
  }
});

export default IconCommentOne;