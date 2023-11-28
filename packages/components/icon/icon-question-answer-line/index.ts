import type { App } from 'vue';
import _IconQuestionAnswerLine from './icon-question-answer-line.vue';

const IconQuestionAnswerLine = Object.assign(_IconQuestionAnswerLine, {
  install: (app: App) => {
    app.component(_IconQuestionAnswerLine.name, _IconQuestionAnswerLine);
  }
});

export default IconQuestionAnswerLine;