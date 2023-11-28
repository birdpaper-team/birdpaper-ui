import type { App } from 'vue';
import _IconRanking from './icon-ranking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRanking.name = getComponentsPrefix() + _IconRanking.name;

const IconRanking = Object.assign(_IconRanking, {
  install: (app: App) => {
    app.component(_IconRanking.name, _IconRanking);
  }
});

export default IconRanking;