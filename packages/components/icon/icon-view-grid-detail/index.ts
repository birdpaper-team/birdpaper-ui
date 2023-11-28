import type { App } from 'vue';
import _IconViewGridDetail from './icon-view-grid-detail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViewGridDetail.name = getComponentsPrefix() + _IconViewGridDetail.name;

const IconViewGridDetail = Object.assign(_IconViewGridDetail, {
  install: (app: App) => {
    app.component(_IconViewGridDetail.name, _IconViewGridDetail);
  }
});

export default IconViewGridDetail;