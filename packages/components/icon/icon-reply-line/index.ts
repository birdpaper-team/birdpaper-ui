import type { App } from 'vue';
import _IconReplyLine from './icon-reply-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReplyLine.name = getComponentsPrefix() + _IconReplyLine.name;

const IconReplyLine = Object.assign(_IconReplyLine, {
  install: (app: App) => {
    app.component(_IconReplyLine.name, _IconReplyLine);
  }
});

export default IconReplyLine;