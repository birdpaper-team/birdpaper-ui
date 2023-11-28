import type { App } from 'vue';
import _IconClassroom from './icon-classroom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClassroom.name = getComponentsPrefix() + _IconClassroom.name;

const IconClassroom = Object.assign(_IconClassroom, {
  install: (app: App) => {
    app.component(_IconClassroom.name, _IconClassroom);
  }
});

export default IconClassroom;