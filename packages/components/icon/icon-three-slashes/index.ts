import type { App } from 'vue';
import _IconThreeSlashes from './icon-three-slashes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThreeSlashes.name = getComponentsPrefix() + _IconThreeSlashes.name;

const IconThreeSlashes = Object.assign(_IconThreeSlashes, {
  install: (app: App) => {
    app.component(_IconThreeSlashes.name, _IconThreeSlashes);
  }
});

export default IconThreeSlashes;