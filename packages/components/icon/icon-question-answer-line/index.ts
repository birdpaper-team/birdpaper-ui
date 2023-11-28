import type { App } from 'vue';
import _IconQuestionAnswerLine from './icon-question-answer-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQuestionAnswerLine.name = getComponentsPrefix() + _IconQuestionAnswerLine.name;

const IconQuestionAnswerLine = Object.assign(_IconQuestionAnswerLine, {
  install: (app: App) => {
    app.component(_IconQuestionAnswerLine.name, _IconQuestionAnswerLine);
  }
});

export default IconQuestionAnswerLine;