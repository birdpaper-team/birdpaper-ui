import type { App } from 'vue';
import _IconComment from './icon-comment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconComment.name = getComponentsPrefix() + _IconComment.name;

const IconComment = Object.assign(_IconComment, {
  install: (app: App) => {
    app.component(_IconComment.name, _IconComment);
  }
});

export default IconComment;