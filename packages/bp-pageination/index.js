/*
 * @Author: Sam
 * @Date: 2021-06-12 19:04:02
 * @Last Modified by: Sam
 * @Last Modified time: 2021-06-12 19:04:52
 */

import bpPageination from './src/bp-pageination.vue';

bpPageination.install = function (Vue) {

    Vue.component(bpPageination.name, bpPageination);

}

export default bpPageination;