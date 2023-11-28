import type { App } from 'vue';
import _IconRuleTwo from './icon-rule-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRuleTwo.name = getComponentsPrefix() + _IconRuleTwo.name;

const IconRuleTwo = Object.assign(_IconRuleTwo, {
  install: (app: App) => {
    app.component(_IconRuleTwo.name, _IconRuleTwo);
  }
});

export default IconRuleTwo;