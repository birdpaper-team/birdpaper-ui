import type { App } from 'vue';
import _IconRattleOne from './icon-rattle-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRattleOne.name = getComponentsPrefix() + _IconRattleOne.name;

const IconRattleOne = Object.assign(_IconRattleOne, {
  install: (app: App) => {
    app.component(_IconRattleOne.name, _IconRattleOne);
  }
});

export default IconRattleOne;