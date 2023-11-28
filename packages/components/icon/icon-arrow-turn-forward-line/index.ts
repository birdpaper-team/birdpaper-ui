import type { App } from 'vue';
import _IconArrowTurnForwardLine from './icon-arrow-turn-forward-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowTurnForwardLine.name = getComponentsPrefix() + _IconArrowTurnForwardLine.name;

const IconArrowTurnForwardLine = Object.assign(_IconArrowTurnForwardLine, {
  install: (app: App) => {
    app.component(_IconArrowTurnForwardLine.name, _IconArrowTurnForwardLine);
  }
});

export default IconArrowTurnForwardLine;