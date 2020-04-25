/*
 * @Author: Sam
 * @Date: 2020-04-21 12:33:06
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-24 12:25:58
 */

import bpItemBar from './src/bp-item-bar.vue';

bpItemBar.install = function (Vue) {

    Vue.component(bpItemBar.name, bpItemBar);

}

export default bpItemBar;