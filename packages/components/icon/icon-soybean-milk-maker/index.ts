import type { App } from 'vue';
import _IconSoybeanMilkMaker from './icon-soybean-milk-maker.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSoybeanMilkMaker.name = getComponentsPrefix() + _IconSoybeanMilkMaker.name;

const IconSoybeanMilkMaker = Object.assign(_IconSoybeanMilkMaker, {
  install: (app: App) => {
    app.component(_IconSoybeanMilkMaker.name, _IconSoybeanMilkMaker);
  }
});

export default IconSoybeanMilkMaker;