import type { App } from 'vue';
import _IconWeixinFavorites from './icon-weixin-favorites.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinFavorites.name = getComponentsPrefix() + _IconWeixinFavorites.name;

const IconWeixinFavorites = Object.assign(_IconWeixinFavorites, {
  install: (app: App) => {
    app.component(_IconWeixinFavorites.name, _IconWeixinFavorites);
  }
});

export default IconWeixinFavorites;