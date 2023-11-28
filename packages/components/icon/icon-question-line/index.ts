import type { App } from 'vue';
import _IconQuestionLine from './icon-question-line.vue';

const IconQuestionLine = Object.assign(_IconQuestionLine, {
  install: (app: App) => {
    app.component(_IconQuestionLine.name, _IconQuestionLine);
  }
});

export default IconQuestionLine;