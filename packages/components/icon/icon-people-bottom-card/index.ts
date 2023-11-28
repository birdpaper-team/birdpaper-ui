import type { App } from 'vue';
import _IconPeopleBottomCard from './icon-people-bottom-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleBottomCard.name = getComponentsPrefix() + _IconPeopleBottomCard.name;

const IconPeopleBottomCard = Object.assign(_IconPeopleBottomCard, {
  install: (app: App) => {
    app.component(_IconPeopleBottomCard.name, _IconPeopleBottomCard);
  }
});

export default IconPeopleBottomCard;