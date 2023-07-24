import { App } from "vue";
import _image from "./src/image.vue";
import { getComponentsPrefix } from "../../utils/config";

_image.name = getComponentsPrefix() + _image.name;

const Image = Object.assign(_image, {
  install: (app: App) => {
    app.component(_image.name, _image);
  },
});

export type ImageInstance = InstanceType<typeof _image>;
export default Image;
