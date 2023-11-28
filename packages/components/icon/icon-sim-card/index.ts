import type { App } from 'vue';
import _IconSimCard from './icon-sim-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSimCard.name = getComponentsPrefix() + _IconSimCard.name;

const IconSimCard = Object.assign(_IconSimCard, {
  install: (app: App) => {
    app.component(_IconSimCard.name, _IconSimCard);
  }
});

export default IconSimCard;