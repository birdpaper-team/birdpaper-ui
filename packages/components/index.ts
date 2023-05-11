import { App, Plugin } from "vue";
import Button from "./button";
import Input from "./input";
import Textarea from "./textarea";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Select from "./select";
import Pagination from "./pagination";
import Table from "./table";
import Space from "./space";
import Alert from "./alert";
import Grid from "./grid";
import Message from "./message";

const components: Record<string, Plugin> = {
  Button,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Grid,
  Message,
};

const install = function (app: App) {
  for (const key of Object.keys(components)) {
    app.use(components[key]);
  }
};

export { default as Message } from "./message";

export default {
  install,
  Button,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Grid,
  Message,
};
