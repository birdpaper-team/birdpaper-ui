import type { App } from 'vue';
import _IconGameEmoji from './icon-game-emoji.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGameEmoji.name = getComponentsPrefix() + _IconGameEmoji.name;

const IconGameEmoji = Object.assign(_IconGameEmoji, {
  install: (app: App) => {
    app.component(_IconGameEmoji.name, _IconGameEmoji);
  }
});

export default IconGameEmoji;