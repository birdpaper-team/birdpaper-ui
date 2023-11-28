import type { App } from 'vue';
import _IconFanqiexiaoshuo from './icon-fanqiexiaoshuo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFanqiexiaoshuo.name = getComponentsPrefix() + _IconFanqiexiaoshuo.name;

const IconFanqiexiaoshuo = Object.assign(_IconFanqiexiaoshuo, {
  install: (app: App) => {
    app.component(_IconFanqiexiaoshuo.name, _IconFanqiexiaoshuo);
  }
});

export default IconFanqiexiaoshuo;