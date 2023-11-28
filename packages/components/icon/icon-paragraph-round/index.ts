import type { App } from 'vue';
import _IconParagraphRound from './icon-paragraph-round.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParagraphRound.name = getComponentsPrefix() + _IconParagraphRound.name;

const IconParagraphRound = Object.assign(_IconParagraphRound, {
  install: (app: App) => {
    app.component(_IconParagraphRound.name, _IconParagraphRound);
  }
});

export default IconParagraphRound;