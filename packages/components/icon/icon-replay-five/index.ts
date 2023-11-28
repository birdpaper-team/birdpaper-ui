import type { App } from 'vue';
import _IconReplayFive from './icon-replay-five.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReplayFive.name = getComponentsPrefix() + _IconReplayFive.name;

const IconReplayFive = Object.assign(_IconReplayFive, {
  install: (app: App) => {
    app.component(_IconReplayFive.name, _IconReplayFive);
  }
});

export default IconReplayFive;