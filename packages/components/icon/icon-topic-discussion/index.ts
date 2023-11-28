import type { App } from 'vue';
import _IconTopicDiscussion from './icon-topic-discussion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTopicDiscussion.name = getComponentsPrefix() + _IconTopicDiscussion.name;

const IconTopicDiscussion = Object.assign(_IconTopicDiscussion, {
  install: (app: App) => {
    app.component(_IconTopicDiscussion.name, _IconTopicDiscussion);
  }
});

export default IconTopicDiscussion;