import type { App } from 'vue';
import _IconKettleOne from './icon-kettle-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKettleOne.name = getComponentsPrefix() + _IconKettleOne.name;

const IconKettleOne = Object.assign(_IconKettleOne, {
  install: (app: App) => {
    app.component(_IconKettleOne.name, _IconKettleOne);
  }
});

export default IconKettleOne;