import type { App } from 'vue';
import _IconDogZodiac from './icon-dog-zodiac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDogZodiac.name = getComponentsPrefix() + _IconDogZodiac.name;

const IconDogZodiac = Object.assign(_IconDogZodiac, {
  install: (app: App) => {
    app.component(_IconDogZodiac.name, _IconDogZodiac);
  }
});

export default IconDogZodiac;