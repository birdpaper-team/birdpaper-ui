import type { App } from 'vue';
import _IconGridSixteen from './icon-grid-sixteen.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGridSixteen.name = getComponentsPrefix() + _IconGridSixteen.name;

const IconGridSixteen = Object.assign(_IconGridSixteen, {
  install: (app: App) => {
    app.component(_IconGridSixteen.name, _IconGridSixteen);
  }
});

export default IconGridSixteen;