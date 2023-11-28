import type { App } from 'vue';
import _IconPaperclip from './icon-paperclip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaperclip.name = getComponentsPrefix() + _IconPaperclip.name;

const IconPaperclip = Object.assign(_IconPaperclip, {
  install: (app: App) => {
    app.component(_IconPaperclip.name, _IconPaperclip);
  }
});

export default IconPaperclip;