import type { App } from 'vue';
import _IconColorCard from './icon-color-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconColorCard.name = getComponentsPrefix() + _IconColorCard.name;

const IconColorCard = Object.assign(_IconColorCard, {
  install: (app: App) => {
    app.component(_IconColorCard.name, _IconColorCard);
  }
});

export default IconColorCard;