import { App, Plugin } from "vue";
import Button from "./button";
import Input from "./input";
import Table from "./table";
import Space from "./space";
import Grid from "./grid";

const components: Record<string, Plugin> = { Button, Input, Table, Space, Grid };

const install = function (app: App) {
  for (const key of Object.keys(components)) {
    app.use(components[key]);
  }
};

export default {
  install,
  Button,
  Input,
  Table,
  Space,
  Grid,
};
