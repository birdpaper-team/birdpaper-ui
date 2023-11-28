import type { App } from 'vue';
import _IconRecord from './icon-record.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecord.name = getComponentsPrefix() + _IconRecord.name;

const IconRecord = Object.assign(_IconRecord, {
  install: (app: App) => {
    app.component(_IconRecord.name, _IconRecord);
  }
});

export default IconRecord;