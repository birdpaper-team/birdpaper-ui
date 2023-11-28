import type { App } from 'vue';
import _IconSpiderMan from './icon-spider-man.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSpiderMan.name = getComponentsPrefix() + _IconSpiderMan.name;

const IconSpiderMan = Object.assign(_IconSpiderMan, {
  install: (app: App) => {
    app.component(_IconSpiderMan.name, _IconSpiderMan);
  }
});

export default IconSpiderMan;