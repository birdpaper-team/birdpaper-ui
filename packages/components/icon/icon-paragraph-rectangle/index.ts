import type { App } from 'vue';
import _IconParagraphRectangle from './icon-paragraph-rectangle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParagraphRectangle.name = getComponentsPrefix() + _IconParagraphRectangle.name;

const IconParagraphRectangle = Object.assign(_IconParagraphRectangle, {
  install: (app: App) => {
    app.component(_IconParagraphRectangle.name, _IconParagraphRectangle);
  }
});

export default IconParagraphRectangle;