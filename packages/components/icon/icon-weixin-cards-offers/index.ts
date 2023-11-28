import type { App } from 'vue';
import _IconWeixinCardsOffers from './icon-weixin-cards-offers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinCardsOffers.name = getComponentsPrefix() + _IconWeixinCardsOffers.name;

const IconWeixinCardsOffers = Object.assign(_IconWeixinCardsOffers, {
  install: (app: App) => {
    app.component(_IconWeixinCardsOffers.name, _IconWeixinCardsOffers);
  }
});

export default IconWeixinCardsOffers;