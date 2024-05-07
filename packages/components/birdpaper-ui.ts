import { App, Plugin } from "vue";
import Button from "./button";
import ButtonGroup from "./buttonGroup";
import Input from "./input";
import InputNumber from "./inputNumber";
import Textarea from "./textarea";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Switch from "./switch";
import Select from "./select";
import Pagination from "./pagination";
import Table from "./table";
import Space from "./space";
import Alert from "./alert";
import Avatar from "./avatar";
import Tag from "./tag";
import Modal from "./modal";
import Spin from "./spin";
import Grid from "./grid";
import Link from "./link";
import Popconfirm from "./popconfirm";
import DatePicker from "./datePicker";
import TimePicker from "./timePicker";
import Image from "./image";
import Empty from "./empty";
import Drawer from "./drawer";
import Tooltip from "./tooltip";
import Trigger from "./trigger";
import Form from "./form";
import VerifyCode from "./verifyCode";
import Message from "./message";

const install = (app: App, option?: unknown) => {
  for (const key of Object.keys(components)) {
    app.use(components[key]);
  }
};

const components: Record<string, Plugin> = {
  Button,
  ButtonGroup,
  Input,
  InputNumber,
  Textarea,
  Radio,
  Checkbox,
  Switch,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Avatar,
  Tag,
  Modal,
  Spin,
  Grid,
  Link,
  Popconfirm,
  DatePicker,
  TimePicker,
  Image,
  Empty,
  Drawer,
  Tooltip,
  Trigger,
  Form,
  VerifyCode,
  Message,
};
export { default as Message } from "./message";

export default {
  ...components,
  install
};
