import type { App } from 'vue';
import _IconVideoConference from './icon-video-conference.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideoConference.name = getComponentsPrefix() + _IconVideoConference.name;

const IconVideoConference = Object.assign(_IconVideoConference, {
  install: (app: App) => {
    app.component(_IconVideoConference.name, _IconVideoConference);
  }
});

export default IconVideoConference;