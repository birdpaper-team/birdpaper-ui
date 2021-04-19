/*
 * @Author: Sam
 * @Date: 2021-03-29 14:17:25
 * @Last Modified by: Sam
 * @Last Modified time: 2021-03-29 14:17:59
 */

import bpTag from './src/bp-tag.vue';

bpTag.install = function (Vue) {

    Vue.component(bpTag.name, bpTag);

}

export default bpTag;