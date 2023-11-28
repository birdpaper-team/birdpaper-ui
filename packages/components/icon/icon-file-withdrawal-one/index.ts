import type { App } from 'vue';
import _IconFileWithdrawalOne from './icon-file-withdrawal-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileWithdrawalOne.name = getComponentsPrefix() + _IconFileWithdrawalOne.name;

const IconFileWithdrawalOne = Object.assign(_IconFileWithdrawalOne, {
  install: (app: App) => {
    app.component(_IconFileWithdrawalOne.name, _IconFileWithdrawalOne);
  }
});

export default IconFileWithdrawalOne;