import type { App } from 'vue';
import _IconRecordPlayer from './icon-record-player.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecordPlayer.name = getComponentsPrefix() + _IconRecordPlayer.name;

const IconRecordPlayer = Object.assign(_IconRecordPlayer, {
  install: (app: App) => {
    app.component(_IconRecordPlayer.name, _IconRecordPlayer);
  }
});

export default IconRecordPlayer;