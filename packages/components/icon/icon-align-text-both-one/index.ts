import type { App } from 'vue';
import _IconAlignTextBothOne from './icon-align-text-both-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextBothOne.name = getComponentsPrefix() + _IconAlignTextBothOne.name;

const IconAlignTextBothOne = Object.assign(_IconAlignTextBothOne, {
  install: (app: App) => {
    app.component(_IconAlignTextBothOne.name, _IconAlignTextBothOne);
  }
});

export default IconAlignTextBothOne;