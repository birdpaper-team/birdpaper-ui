import type { App } from 'vue';
import _IconTrophy from './icon-trophy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrophy.name = getComponentsPrefix() + _IconTrophy.name;

const IconTrophy = Object.assign(_IconTrophy, {
  install: (app: App) => {
    app.component(_IconTrophy.name, _IconTrophy);
  }
});

export default IconTrophy;