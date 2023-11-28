import type { App } from 'vue';
import _IconPlayVolleyball from './icon-play-volleyball.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlayVolleyball.name = getComponentsPrefix() + _IconPlayVolleyball.name;

const IconPlayVolleyball = Object.assign(_IconPlayVolleyball, {
  install: (app: App) => {
    app.component(_IconPlayVolleyball.name, _IconPlayVolleyball);
  }
});

export default IconPlayVolleyball;