import type { App } from 'vue';
import _IconTopic from './icon-topic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTopic.name = getComponentsPrefix() + _IconTopic.name;

const IconTopic = Object.assign(_IconTopic, {
  install: (app: App) => {
    app.component(_IconTopic.name, _IconTopic);
  }
});

export default IconTopic;