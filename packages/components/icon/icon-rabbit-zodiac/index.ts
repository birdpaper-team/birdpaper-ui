import type { App } from 'vue';
import _IconRabbitZodiac from './icon-rabbit-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRabbitZodiac.name = getComponentsPrefix() + _IconRabbitZodiac.name;

const IconRabbitZodiac = Object.assign(_IconRabbitZodiac, {
  install: (app: App) => {
    app.component(_IconRabbitZodiac.name, _IconRabbitZodiac);
  }
});

export default IconRabbitZodiac;