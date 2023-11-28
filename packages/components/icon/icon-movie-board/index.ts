import type { App } from 'vue';
import _IconMovieBoard from './icon-movie-board.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMovieBoard.name = getComponentsPrefix() + _IconMovieBoard.name;

const IconMovieBoard = Object.assign(_IconMovieBoard, {
  install: (app: App) => {
    app.component(_IconMovieBoard.name, _IconMovieBoard);
  }
});

export default IconMovieBoard;