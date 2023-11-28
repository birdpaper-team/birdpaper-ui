import type { App } from 'vue';
import _IconWeixinSearch from './icon-weixin-search.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinSearch.name = getComponentsPrefix() + _IconWeixinSearch.name;

const IconWeixinSearch = Object.assign(_IconWeixinSearch, {
  install: (app: App) => {
    app.component(_IconWeixinSearch.name, _IconWeixinSearch);
  }
});

export default IconWeixinSearch;