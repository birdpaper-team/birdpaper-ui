import type { App } from 'vue';
import _IconMiniSdCard from './icon-mini-sd-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMiniSdCard.name = getComponentsPrefix() + _IconMiniSdCard.name;

const IconMiniSdCard = Object.assign(_IconMiniSdCard, {
  install: (app: App) => {
    app.component(_IconMiniSdCard.name, _IconMiniSdCard);
  }
});

export default IconMiniSdCard;