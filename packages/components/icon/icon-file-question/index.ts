import type { App } from 'vue';
import _IconFileQuestion from './icon-file-question.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileQuestion.name = getComponentsPrefix() + _IconFileQuestion.name;

const IconFileQuestion = Object.assign(_IconFileQuestion, {
  install: (app: App) => {
    app.component(_IconFileQuestion.name, _IconFileQuestion);
  }
});

export default IconFileQuestion;