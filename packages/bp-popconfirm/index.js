/*
 * @Author: Sam
 * @Date: 2021-03-25 11:08:04
 * @Last Modified by:   Sam
 * @Last Modified time: 2021-03-25 11:08:04
 */

import bpPopconfirm from './src/bp-popconfirm.vue';

bpPopconfirm.install = function (Vue) {

    Vue.component(bpPopconfirm.name, bpPopconfirm);

}

export default bpPopconfirm;