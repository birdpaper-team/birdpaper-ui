import type { App } from 'vue';
import _IconMemoryCard from './icon-memory-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMemoryCard.name = getComponentsPrefix() + _IconMemoryCard.name;

const IconMemoryCard = Object.assign(_IconMemoryCard, {
  install: (app: App) => {
    app.component(_IconMemoryCard.name, _IconMemoryCard);
  }
});

export default IconMemoryCard;