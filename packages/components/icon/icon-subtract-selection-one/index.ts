import type { App } from 'vue';
import _IconSubtractSelectionOne from './icon-subtract-selection-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSubtractSelectionOne.name = getComponentsPrefix() + _IconSubtractSelectionOne.name;

const IconSubtractSelectionOne = Object.assign(_IconSubtractSelectionOne, {
  install: (app: App) => {
    app.component(_IconSubtractSelectionOne.name, _IconSubtractSelectionOne);
  }
});

export default IconSubtractSelectionOne;