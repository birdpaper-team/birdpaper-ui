import type { App } from 'vue';
import _IconCloseSmall from './icon-close-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseSmall.name = getComponentsPrefix() + _IconCloseSmall.name;

const IconCloseSmall = Object.assign(_IconCloseSmall, {
  install: (app: App) => {
    app.component(_IconCloseSmall.name, _IconCloseSmall);
  }
});

export default IconCloseSmall;