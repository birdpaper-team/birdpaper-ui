import { App } from "vue";

import Button from "./button";
import Table from "./table";
import Space from "./space";
import { default as row, col } from "./grid";

export type { ButtonInstance } from "./button";

const components = [Button, Table, Space, row, col];

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
  row,
  col,
};
