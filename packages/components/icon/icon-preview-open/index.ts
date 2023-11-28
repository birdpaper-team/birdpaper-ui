import type { App } from 'vue';
import _IconPreviewOpen from './icon-preview-open.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPreviewOpen.name = getComponentsPrefix() + _IconPreviewOpen.name;

const IconPreviewOpen = Object.assign(_IconPreviewOpen, {
  install: (app: App) => {
    app.component(_IconPreviewOpen.name, _IconPreviewOpen);
  }
});

export default IconPreviewOpen;