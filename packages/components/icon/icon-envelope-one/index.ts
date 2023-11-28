import type { App } from 'vue';
import _IconEnvelopeOne from './icon-envelope-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEnvelopeOne.name = getComponentsPrefix() + _IconEnvelopeOne.name;

const IconEnvelopeOne = Object.assign(_IconEnvelopeOne, {
  install: (app: App) => {
    app.component(_IconEnvelopeOne.name, _IconEnvelopeOne);
  }
});

export default IconEnvelopeOne;