import type { App } from 'vue';
import _IconPreviewCloseOne from './icon-preview-close-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPreviewCloseOne.name = getComponentsPrefix() + _IconPreviewCloseOne.name;

const IconPreviewCloseOne = Object.assign(_IconPreviewCloseOne, {
  install: (app: App) => {
    app.component(_IconPreviewCloseOne.name, _IconPreviewCloseOne);
  }
});

export default IconPreviewCloseOne;