import type { App } from 'vue';
import _IconArrowGoBackLine from './icon-arrow-go-back-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowGoBackLine.name = getComponentsPrefix() + _IconArrowGoBackLine.name;

const IconArrowGoBackLine = Object.assign(_IconArrowGoBackLine, {
  install: (app: App) => {
    app.component(_IconArrowGoBackLine.name, _IconArrowGoBackLine);
  }
});

export default IconArrowGoBackLine;