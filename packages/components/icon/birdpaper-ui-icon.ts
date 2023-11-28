import type { App, Plugin } from 'vue';
import IconZoomIn from './icon-zoom-in';
import IconZoomInternal from './icon-zoom-internal';
import IconZoomOut from './icon-zoom-out';
import IconZoom from './icon-zoom';

const icons: Record<string, Plugin> = {
  IconZoomIn,
  IconZoomInternal,
  IconZoomOut,
  IconZoom
};

const install = (app: App) => {
  for (const key of Object.keys(icons)) {
    app.use(icons[key]);
  }
};

const BpVueIcon = {
  ...icons,
  install
};

export default BpVueIcon;
