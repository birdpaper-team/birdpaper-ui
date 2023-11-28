import type { App } from 'vue';
import _IconTencentQq from './icon-tencent-qq.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTencentQq.name = getComponentsPrefix() + _IconTencentQq.name;

const IconTencentQq = Object.assign(_IconTencentQq, {
  install: (app: App) => {
    app.component(_IconTencentQq.name, _IconTencentQq);
  }
});

export default IconTencentQq;