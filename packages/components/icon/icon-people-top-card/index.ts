import type { App } from 'vue';
import _IconPeopleTopCard from './icon-people-top-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleTopCard.name = getComponentsPrefix() + _IconPeopleTopCard.name;

const IconPeopleTopCard = Object.assign(_IconPeopleTopCard, {
  install: (app: App) => {
    app.component(_IconPeopleTopCard.name, _IconPeopleTopCard);
  }
});

export default IconPeopleTopCard;