/*
 * @Author: Sam
 * @Date: 2020-04-02 14:25:39
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-02 14:26:01
 */

import bpMask from './src/bp-mask.vue';

bpMask.install = function (Vue) {

    Vue.component(bpMask.name, bpMask);

}

export default bpMask;