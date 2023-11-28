import type { App } from 'vue';
import _IconMailReview from './icon-mail-review.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailReview.name = getComponentsPrefix() + _IconMailReview.name;

const IconMailReview = Object.assign(_IconMailReview, {
  install: (app: App) => {
    app.component(_IconMailReview.name, _IconMailReview);
  }
});

export default IconMailReview;