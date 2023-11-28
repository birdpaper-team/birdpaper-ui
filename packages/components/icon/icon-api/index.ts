import type { App } from 'vue';
import _IconApi from './icon-api.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconApi.name = getComponentsPrefix() + _IconApi.name;

const IconApi = Object.assign(_IconApi, {
  install: (app: App) => {
    app.component(_IconApi.name, _IconApi);
  }
});

export default IconApi;