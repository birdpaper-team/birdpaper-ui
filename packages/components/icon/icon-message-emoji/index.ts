import type { App } from 'vue';
import _IconMessageEmoji from './icon-message-emoji.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageEmoji.name = getComponentsPrefix() + _IconMessageEmoji.name;

const IconMessageEmoji = Object.assign(_IconMessageEmoji, {
  install: (app: App) => {
    app.component(_IconMessageEmoji.name, _IconMessageEmoji);
  }
});

export default IconMessageEmoji;