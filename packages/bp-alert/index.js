/*
 * @Author: Sam
 * @Date: 2020-04-28 10:39:46
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-28 11:04:52
 */

import bpAlert from './src/bp-alert.vue';

bpAlert.install = function (Vue) {

    Vue.component(bpAlert.name, bpAlert);

}

export default bpAlert;