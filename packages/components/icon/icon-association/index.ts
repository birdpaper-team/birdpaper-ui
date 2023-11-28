import type { App } from 'vue';
import _IconAssociation from './icon-association.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAssociation.name = getComponentsPrefix() + _IconAssociation.name;

const IconAssociation = Object.assign(_IconAssociation, {
  install: (app: App) => {
    app.component(_IconAssociation.name, _IconAssociation);
  }
});

export default IconAssociation;