import type { App } from 'vue';
import _IconFileRemovalOne from './icon-file-removal-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileRemovalOne.name = getComponentsPrefix() + _IconFileRemovalOne.name;

const IconFileRemovalOne = Object.assign(_IconFileRemovalOne, {
  install: (app: App) => {
    app.component(_IconFileRemovalOne.name, _IconFileRemovalOne);
  }
});

export default IconFileRemovalOne;