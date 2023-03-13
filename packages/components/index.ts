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
