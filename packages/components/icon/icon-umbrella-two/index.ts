import type { App } from 'vue';
import _IconUmbrellaTwo from './icon-umbrella-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUmbrellaTwo.name = getComponentsPrefix() + _IconUmbrellaTwo.name;

const IconUmbrellaTwo = Object.assign(_IconUmbrellaTwo, {
  install: (app: App) => {
    app.component(_IconUmbrellaTwo.name, _IconUmbrellaTwo);
  }
});

export default IconUmbrellaTwo;