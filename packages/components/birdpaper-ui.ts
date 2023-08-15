import { App, Plugin } from "vue";
import Button from "./button";
import Input from "./input";
import Textarea from "./textarea";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Switch from "./switch";
import Select from "./select";
import Pagination from "./pagination";
import Table from "./table";
import Space from "./space";
import Alert from "./alert";
import Tag from "./tag";
import Modal from "./modal";
import Spin from "./spin";
import Grid from "./grid";
import Link from "./link";
import Popconfirm from "./popconfirm";
import Image from "./image";
import Drawer from "./drawer";
import Tooltip from "./tooltip";
import Message from "./message";

const components: Record<string, Plugin> = {
  Button,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Switch,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Tag,
  Modal,
  Spin,
  Grid,
  Link,
  Popconfirm,
  Image,
  Drawer,
  Tooltip,
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
  Switch,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Tag,
  Modal,
  Spin,
  Grid,
  Link,
  Popconfirm,
  Image,
  Drawer,
  Tooltip,
  Message,
};
