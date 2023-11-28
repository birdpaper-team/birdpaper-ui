import type { App } from 'vue';
import _IconShuffleOne from './icon-shuffle-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShuffleOne.name = getComponentsPrefix() + _IconShuffleOne.name;

const IconShuffleOne = Object.assign(_IconShuffleOne, {
  install: (app: App) => {
    app.component(_IconShuffleOne.name, _IconShuffleOne);
  }
});

export default IconShuffleOne;