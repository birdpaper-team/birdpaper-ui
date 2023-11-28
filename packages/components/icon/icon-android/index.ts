import type { App } from 'vue';
import _IconAndroid from './icon-android.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAndroid.name = getComponentsPrefix() + _IconAndroid.name;

const IconAndroid = Object.assign(_IconAndroid, {
  install: (app: App) => {
    app.component(_IconAndroid.name, _IconAndroid);
  }
});

export default IconAndroid;