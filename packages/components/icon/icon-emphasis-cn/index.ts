import type { App } from 'vue';
import _IconEmphasisCn from './icon-emphasis-cn.vue';

const IconEmphasisCn = Object.assign(_IconEmphasisCn, {
  install: (app: App) => {
    app.component(_IconEmphasisCn.name, _IconEmphasisCn);
  }
});

export default IconEmphasisCn;