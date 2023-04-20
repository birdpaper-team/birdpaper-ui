import { App } from "vue";
import _textarea from "./src/textarea.vue";
import { getComponentsPrefix } from "../../utils/config";

_textarea.name = getComponentsPrefix() + _textarea.name;

const Textarea = Object.assign(_textarea, {
  install: (app: App) => {
    app.component(_textarea.name, _textarea);
  },
});

export type TextareaInstance = InstanceType<typeof _textarea>;
export default Textarea;
