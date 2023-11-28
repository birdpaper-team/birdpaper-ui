import type { App } from 'vue';
import _IconPeopleUpload from './icon-people-upload.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleUpload.name = getComponentsPrefix() + _IconPeopleUpload.name;

const IconPeopleUpload = Object.assign(_IconPeopleUpload, {
  install: (app: App) => {
    app.component(_IconPeopleUpload.name, _IconPeopleUpload);
  }
});

export default IconPeopleUpload;