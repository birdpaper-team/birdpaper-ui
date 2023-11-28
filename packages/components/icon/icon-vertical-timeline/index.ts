import type { App } from 'vue';
import _IconVerticalTimeline from './icon-vertical-timeline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVerticalTimeline.name = getComponentsPrefix() + _IconVerticalTimeline.name;

const IconVerticalTimeline = Object.assign(_IconVerticalTimeline, {
  install: (app: App) => {
    app.component(_IconVerticalTimeline.name, _IconVerticalTimeline);
  }
});

export default IconVerticalTimeline;