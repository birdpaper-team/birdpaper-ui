import type { App } from 'vue';
import _IconRecordDisc from './icon-record-disc.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecordDisc.name = getComponentsPrefix() + _IconRecordDisc.name;

const IconRecordDisc = Object.assign(_IconRecordDisc, {
  install: (app: App) => {
    app.component(_IconRecordDisc.name, _IconRecordDisc);
  }
});

export default IconRecordDisc;