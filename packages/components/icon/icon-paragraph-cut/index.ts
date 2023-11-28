import type { App } from 'vue';
import _IconParagraphCut from './icon-paragraph-cut.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParagraphCut.name = getComponentsPrefix() + _IconParagraphCut.name;

const IconParagraphCut = Object.assign(_IconParagraphCut, {
  install: (app: App) => {
    app.component(_IconParagraphCut.name, _IconParagraphCut);
  }
});

export default IconParagraphCut;