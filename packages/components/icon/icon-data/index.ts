import type { App } from 'vue';
import _IconData from './icon-data.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconData.name = getComponentsPrefix() + _IconData.name;

const IconData = Object.assign(_IconData, {
  install: (app: App) => {
    app.component(_IconData.name, _IconData);
  }
});

export default IconData;