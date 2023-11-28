import type { App } from 'vue';
import _IconHeadphoneSound from './icon-headphone-sound.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeadphoneSound.name = getComponentsPrefix() + _IconHeadphoneSound.name;

const IconHeadphoneSound = Object.assign(_IconHeadphoneSound, {
  install: (app: App) => {
    app.component(_IconHeadphoneSound.name, _IconHeadphoneSound);
  }
});

export default IconHeadphoneSound;