import type { App } from 'vue';
import _IconSdCard from './icon-sd-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSdCard.name = getComponentsPrefix() + _IconSdCard.name;

const IconSdCard = Object.assign(_IconSdCard, {
  install: (app: App) => {
    app.component(_IconSdCard.name, _IconSdCard);
  }
});

export default IconSdCard;