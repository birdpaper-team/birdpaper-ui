import type { App } from 'vue';
import _IconGolfCourse from './icon-golf-course.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGolfCourse.name = getComponentsPrefix() + _IconGolfCourse.name;

const IconGolfCourse = Object.assign(_IconGolfCourse, {
  install: (app: App) => {
    app.component(_IconGolfCourse.name, _IconGolfCourse);
  }
});

export default IconGolfCourse;