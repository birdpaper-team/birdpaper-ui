import type { App } from 'vue';
import _IconListView from './icon-list-view.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListView.name = getComponentsPrefix() + _IconListView.name;

const IconListView = Object.assign(_IconListView, {
  install: (app: App) => {
    app.component(_IconListView.name, _IconListView);
  }
});

export default IconListView;