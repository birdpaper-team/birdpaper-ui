/**
 * @ Author: Sam
 * @ Create Time: 2023-02-19 16:20:27
 * @ Modified by: Sam
 * @ Modified time: 2023-03-09 13:58:16
 * @ Description: 组件库入口
 */

import { App } from "vue";

import Button from "./button";
import Table from "./table";
import Space from "./space";

export type { ButtonInstance } from "./button";

const components = [Button, Table, Space];

const install = function (app: App) {
  components.map(component => {
    app.component(component.name, component);
  });
};

export default {
  install,
  Button,
  Table,
  Space,
};
