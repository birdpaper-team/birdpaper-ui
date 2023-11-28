import type { App } from 'vue';
import _IconQuestionFill from './icon-question-fill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQuestionFill.name = getComponentsPrefix() + _IconQuestionFill.name;

const IconQuestionFill = Object.assign(_IconQuestionFill, {
  install: (app: App) => {
    app.component(_IconQuestionFill.name, _IconQuestionFill);
  }
});

export default IconQuestionFill;