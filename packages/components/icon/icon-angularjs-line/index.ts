import type { App } from 'vue';
import _IconAngularjsLine from './icon-angularjs-line.vue';

const IconAngularjsLine = Object.assign(_IconAngularjsLine, {
  install: (app: App) => {
    app.component(_IconAngularjsLine.name, _IconAngularjsLine);
  }
});

export default IconAngularjsLine;