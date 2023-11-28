import type { App } from 'vue';
import _IconExpressionlessFace from './icon-expressionless-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpressionlessFace.name = getComponentsPrefix() + _IconExpressionlessFace.name;

const IconExpressionlessFace = Object.assign(_IconExpressionlessFace, {
  install: (app: App) => {
    app.component(_IconExpressionlessFace.name, _IconExpressionlessFace);
  }
});

export default IconExpressionlessFace;