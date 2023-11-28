import type { App } from 'vue';
import _IconRoadOne from './icon-road-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoadOne.name = getComponentsPrefix() + _IconRoadOne.name;

const IconRoadOne = Object.assign(_IconRoadOne, {
  install: (app: App) => {
    app.component(_IconRoadOne.name, _IconRoadOne);
  }
});

export default IconRoadOne;