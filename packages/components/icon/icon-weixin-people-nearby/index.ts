import type { App } from 'vue';
import _IconWeixinPeopleNearby from './icon-weixin-people-nearby.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeixinPeopleNearby.name = getComponentsPrefix() + _IconWeixinPeopleNearby.name;

const IconWeixinPeopleNearby = Object.assign(_IconWeixinPeopleNearby, {
  install: (app: App) => {
    app.component(_IconWeixinPeopleNearby.name, _IconWeixinPeopleNearby);
  }
});

export default IconWeixinPeopleNearby;