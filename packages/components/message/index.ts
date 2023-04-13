import { App } from "vue";
import _message from "./src/message.vue";
import { getComponentsPrefix } from "../../utils/config";

_message.name = getComponentsPrefix() + _message.name;

const Message = Object.assign(_message, {
  install: (app: App) => {
    app.component(_message.name, _message);
  },
});

export default Message;
