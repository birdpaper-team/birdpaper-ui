import type { App } from 'vue';
import _IconViewGridCard from './icon-view-grid-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViewGridCard.name = getComponentsPrefix() + _IconViewGridCard.name;

const IconViewGridCard = Object.assign(_IconViewGridCard, {
  install: (app: App) => {
    app.component(_IconViewGridCard.name, _IconViewGridCard);
  }
});

export default IconViewGridCard;