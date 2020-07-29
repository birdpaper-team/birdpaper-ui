/*
 * @Author: Sam
 * @Date: 2020-07-13 15:16:03
 * @Last Modified by: Sam
 * @Last Modified time: 2020-07-13 15:16:23
 */

import bpSwitch from './src/bp-switch.vue';

bpSwitch.install = function (Vue) {

    Vue.component(bpSwitch.name, bpSwitch);

}

export default bpSwitch;