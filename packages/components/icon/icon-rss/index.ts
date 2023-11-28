import type { App } from 'vue';
import _IconRss from './icon-rss.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRss.name = getComponentsPrefix() + _IconRss.name;

const IconRss = Object.assign(_IconRss, {
  install: (app: App) => {
    app.component(_IconRss.name, _IconRss);
  }
});

export default IconRss;