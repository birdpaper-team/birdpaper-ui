import type { App } from 'vue';
import _IconArrowTurnForwardLine from './icon-arrow-turn-forward-line.vue';

const IconArrowTurnForwardLine = Object.assign(_IconArrowTurnForwardLine, {
  install: (app: App) => {
    app.component(_IconArrowTurnForwardLine.name, _IconArrowTurnForwardLine);
  }
});

export default IconArrowTurnForwardLine;