import type { App } from 'vue';
import _IconPullRequests from './icon-pull-requests.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPullRequests.name = getComponentsPrefix() + _IconPullRequests.name;

const IconPullRequests = Object.assign(_IconPullRequests, {
  install: (app: App) => {
    app.component(_IconPullRequests.name, _IconPullRequests);
  }
});

export default IconPullRequests;