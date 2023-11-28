import type { App } from 'vue';
import _IconMemoryCardOne from './icon-memory-card-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMemoryCardOne.name = getComponentsPrefix() + _IconMemoryCardOne.name;

const IconMemoryCardOne = Object.assign(_IconMemoryCardOne, {
  install: (app: App) => {
    app.component(_IconMemoryCardOne.name, _IconMemoryCardOne);
  }
});

export default IconMemoryCardOne;