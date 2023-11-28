import type { App } from 'vue';
import _IconFileWithdrawal from './icon-file-withdrawal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileWithdrawal.name = getComponentsPrefix() + _IconFileWithdrawal.name;

const IconFileWithdrawal = Object.assign(_IconFileWithdrawal, {
  install: (app: App) => {
    app.component(_IconFileWithdrawal.name, _IconFileWithdrawal);
  }
});

export default IconFileWithdrawal;