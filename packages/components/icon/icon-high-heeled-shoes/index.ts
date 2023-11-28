import type { App } from 'vue';
import _IconHighHeeledShoes from './icon-high-heeled-shoes.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHighHeeledShoes.name = getComponentsPrefix() + _IconHighHeeledShoes.name;

const IconHighHeeledShoes = Object.assign(_IconHighHeeledShoes, {
  install: (app: App) => {
    app.component(_IconHighHeeledShoes.name, _IconHighHeeledShoes);
  }
});

export default IconHighHeeledShoes;