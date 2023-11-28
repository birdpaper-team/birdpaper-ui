import type { App } from 'vue';
import _IconReplyAllLine from './icon-reply-all-line.vue';

const IconReplyAllLine = Object.assign(_IconReplyAllLine, {
  install: (app: App) => {
    app.component(_IconReplyAllLine.name, _IconReplyAllLine);
  }
});

export default IconReplyAllLine;