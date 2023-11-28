import type { App } from 'vue';
import _IconMemoryOne from './icon-memory-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMemoryOne.name = getComponentsPrefix() + _IconMemoryOne.name;

const IconMemoryOne = Object.assign(_IconMemoryOne, {
  install: (app: App) => {
    app.component(_IconMemoryOne.name, _IconMemoryOne);
  }
});

export default IconMemoryOne;