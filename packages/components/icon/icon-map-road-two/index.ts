import type { App } from 'vue';
import _IconMapRoadTwo from './icon-map-road-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMapRoadTwo.name = getComponentsPrefix() + _IconMapRoadTwo.name;

const IconMapRoadTwo = Object.assign(_IconMapRoadTwo, {
  install: (app: App) => {
    app.component(_IconMapRoadTwo.name, _IconMapRoadTwo);
  }
});

export default IconMapRoadTwo;