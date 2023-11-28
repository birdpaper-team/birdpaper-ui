import type { App } from 'vue';
import _IconScreenshotOne from './icon-screenshot-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScreenshotOne.name = getComponentsPrefix() + _IconScreenshotOne.name;

const IconScreenshotOne = Object.assign(_IconScreenshotOne, {
  install: (app: App) => {
    app.component(_IconScreenshotOne.name, _IconScreenshotOne);
  }
});

export default IconScreenshotOne;