import type { App } from 'vue';
import _IconTextWrapTruncation from './icon-text-wrap-truncation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextWrapTruncation.name = getComponentsPrefix() + _IconTextWrapTruncation.name;

const IconTextWrapTruncation = Object.assign(_IconTextWrapTruncation, {
  install: (app: App) => {
    app.component(_IconTextWrapTruncation.name, _IconTextWrapTruncation);
  }
});

export default IconTextWrapTruncation;