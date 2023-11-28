import type { App } from 'vue';
import _IconArrowTurnBackLine from './icon-arrow-turn-back-line.vue';

const IconArrowTurnBackLine = Object.assign(_IconArrowTurnBackLine, {
  install: (app: App) => {
    app.component(_IconArrowTurnBackLine.name, _IconArrowTurnBackLine);
  }
});

export default IconArrowTurnBackLine;