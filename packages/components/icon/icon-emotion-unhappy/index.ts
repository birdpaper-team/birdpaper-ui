import type { App } from 'vue';
import _IconEmotionUnhappy from './icon-emotion-unhappy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmotionUnhappy.name = getComponentsPrefix() + _IconEmotionUnhappy.name;

const IconEmotionUnhappy = Object.assign(_IconEmotionUnhappy, {
  install: (app: App) => {
    app.component(_IconEmotionUnhappy.name, _IconEmotionUnhappy);
  }
});

export default IconEmotionUnhappy;