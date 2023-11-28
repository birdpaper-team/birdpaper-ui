import type { App } from 'vue';
import _IconReplyLine from './icon-reply-line.vue';

const IconReplyLine = Object.assign(_IconReplyLine, {
  install: (app: App) => {
    app.component(_IconReplyLine.name, _IconReplyLine);
  }
});

export default IconReplyLine;