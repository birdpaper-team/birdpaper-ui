import { App } from "vue";
import _pagination from "./src/pagination.vue";
import { getComponentsPrefix } from "../../utils/config";

_pagination.name = getComponentsPrefix() + _pagination.name;

const Pagination = Object.assign(_pagination, {
  install: (app: App) => {
    app.component(_pagination.name, _pagination);
  },
});

export type PaginationInstance = InstanceType<typeof _pagination>;
export default Pagination;
