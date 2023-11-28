import type { App } from 'vue';
import _IconCopyLink from './icon-copy-link.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCopyLink.name = getComponentsPrefix() + _IconCopyLink.name;

const IconCopyLink = Object.assign(_IconCopyLink, {
  install: (app: App) => {
    app.component(_IconCopyLink.name, _IconCopyLink);
  }
});

export default IconCopyLink;