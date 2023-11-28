import type { App } from 'vue';
import _IconGymnasticsOne from './icon-gymnastics-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGymnasticsOne.name = getComponentsPrefix() + _IconGymnasticsOne.name;

const IconGymnasticsOne = Object.assign(_IconGymnasticsOne, {
  install: (app: App) => {
    app.component(_IconGymnasticsOne.name, _IconGymnasticsOne);
  }
});

export default IconGymnasticsOne;