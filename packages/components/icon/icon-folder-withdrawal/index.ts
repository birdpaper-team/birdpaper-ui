import type { App } from 'vue';
import _IconFolderWithdrawal from './icon-folder-withdrawal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFolderWithdrawal.name = getComponentsPrefix() + _IconFolderWithdrawal.name;

const IconFolderWithdrawal = Object.assign(_IconFolderWithdrawal, {
  install: (app: App) => {
    app.component(_IconFolderWithdrawal.name, _IconFolderWithdrawal);
  }
});

export default IconFolderWithdrawal;