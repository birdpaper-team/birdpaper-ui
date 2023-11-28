import type { App } from 'vue';
import _IconDocDetail from './icon-doc-detail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDocDetail.name = getComponentsPrefix() + _IconDocDetail.name;

const IconDocDetail = Object.assign(_IconDocDetail, {
  install: (app: App) => {
    app.component(_IconDocDetail.name, _IconDocDetail);
  }
});

export default IconDocDetail;