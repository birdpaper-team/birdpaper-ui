import type { App } from 'vue';
import _IconLightMember from './icon-light-member.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLightMember.name = getComponentsPrefix() + _IconLightMember.name;

const IconLightMember = Object.assign(_IconLightMember, {
  install: (app: App) => {
    app.component(_IconLightMember.name, _IconLightMember);
  }
});

export default IconLightMember;