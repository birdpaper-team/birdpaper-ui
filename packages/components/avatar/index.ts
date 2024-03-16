import { App } from "vue";
import _avatar from "./src/avatar.vue";
import { getComponentsPrefix } from "../../utils/config";

_avatar.name = getComponentsPrefix() + _avatar.name;

const Avatar = Object.assign(_avatar, {
  install: (app: App) => {
    app.component(_avatar.name, _avatar);
  },
});

export type AvatarInstance = InstanceType<typeof _avatar>;
export default Avatar;
