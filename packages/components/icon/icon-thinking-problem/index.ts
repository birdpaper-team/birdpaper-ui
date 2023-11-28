import type { App } from 'vue';
import _IconThinkingProblem from './icon-thinking-problem.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThinkingProblem.name = getComponentsPrefix() + _IconThinkingProblem.name;

const IconThinkingProblem = Object.assign(_IconThinkingProblem, {
  install: (app: App) => {
    app.component(_IconThinkingProblem.name, _IconThinkingProblem);
  }
});

export default IconThinkingProblem;