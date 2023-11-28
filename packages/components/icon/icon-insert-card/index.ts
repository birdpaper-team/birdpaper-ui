import type { App } from 'vue';
import _IconInsertCard from './icon-insert-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInsertCard.name = getComponentsPrefix() + _IconInsertCard.name;

const IconInsertCard = Object.assign(_IconInsertCard, {
  install: (app: App) => {
    app.component(_IconInsertCard.name, _IconInsertCard);
  }
});

export default IconInsertCard;