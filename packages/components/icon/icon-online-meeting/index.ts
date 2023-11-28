import type { App } from 'vue';
import _IconOnlineMeeting from './icon-online-meeting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOnlineMeeting.name = getComponentsPrefix() + _IconOnlineMeeting.name;

const IconOnlineMeeting = Object.assign(_IconOnlineMeeting, {
  install: (app: App) => {
    app.component(_IconOnlineMeeting.name, _IconOnlineMeeting);
  }
});

export default IconOnlineMeeting;