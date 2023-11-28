import type { App } from 'vue';
import _IconSnakeZodiac from './icon-snake-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSnakeZodiac.name = getComponentsPrefix() + _IconSnakeZodiac.name;

const IconSnakeZodiac = Object.assign(_IconSnakeZodiac, {
  install: (app: App) => {
    app.component(_IconSnakeZodiac.name, _IconSnakeZodiac);
  }
});

export default IconSnakeZodiac;