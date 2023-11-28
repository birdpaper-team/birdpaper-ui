import type { App } from 'vue';
import _IconParagraphBreakTwo from './icon-paragraph-break-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParagraphBreakTwo.name = getComponentsPrefix() + _IconParagraphBreakTwo.name;

const IconParagraphBreakTwo = Object.assign(_IconParagraphBreakTwo, {
  install: (app: App) => {
    app.component(_IconParagraphBreakTwo.name, _IconParagraphBreakTwo);
  }
});

export default IconParagraphBreakTwo;