/**
 * @ Author: Sam
 * @ Create Time: 2023-02-19 16:20:27
 * @ Modified by: Sam
 * @ Modified time: 2023-02-19 17:54:33
 * @ Description:
 */

import { App } from "vue";

import Button from "./button";

const components = [Button];

const install = function (app: App) {
  components.map(component => {
    app.component(component.name, component);
  });
};

export default {
  install,
  Button,
};
