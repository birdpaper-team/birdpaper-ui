import { App } from "vue";
import _tag from "./src/tag.vue";
import { getComponentsPrefix } from "../../utils/config";

_tag.name = getComponentsPrefix() + _tag.name;

const Tag = Object.assign(_tag, {
  install: (app: App) => {
    app.component(_tag.name, _tag);
  },
});

export type TagInstance = InstanceType<typeof _tag>;
export default Tag;
