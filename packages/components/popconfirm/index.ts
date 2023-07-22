import { App } from "vue";
import _popconfirm from "./src/popconfirm.vue";
import { getComponentsPrefix } from "../../utils/config";

_popconfirm.name = getComponentsPrefix() + _popconfirm.name;

const Popconfirm = Object.assign(_popconfirm, {
  install: (app: App) => {
    app.component(_popconfirm.name, _popconfirm);
  },
});

export type PopconfirmInstance = InstanceType<typeof _popconfirm>;
export default Popconfirm;
