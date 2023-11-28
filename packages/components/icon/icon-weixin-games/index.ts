import type { App } from 'vue';
import _IconWeixinGames from './icon-weixin-games.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinGames.name = getComponentsPrefix() + _IconWeixinGames.name;

const IconWeixinGames = Object.assign(_IconWeixinGames, {
  install: (app: App) => {
    app.component(_IconWeixinGames.name, _IconWeixinGames);
  }
});

export default IconWeixinGames;