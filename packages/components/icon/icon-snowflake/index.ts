import type { App } from 'vue';
import _IconSnowflake from './icon-snowflake.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSnowflake.name = getComponentsPrefix() + _IconSnowflake.name;

const IconSnowflake = Object.assign(_IconSnowflake, {
  install: (app: App) => {
    app.component(_IconSnowflake.name, _IconSnowflake);
  }
});

export default IconSnowflake;