import type { App } from 'vue';
import _IconQingniaoClue from './icon-qingniao-clue.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconQingniaoClue.name = getComponentsPrefix() + _IconQingniaoClue.name;

const IconQingniaoClue = Object.assign(_IconQingniaoClue, {
  install: (app: App) => {
    app.component(_IconQingniaoClue.name, _IconQingniaoClue);
  }
});

export default IconQingniaoClue;