import type { App } from 'vue';
import _IconLadderOne from './icon-ladder-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLadderOne.name = getComponentsPrefix() + _IconLadderOne.name;

const IconLadderOne = Object.assign(_IconLadderOne, {
  install: (app: App) => {
    app.component(_IconLadderOne.name, _IconLadderOne);
  }
});

export default IconLadderOne;