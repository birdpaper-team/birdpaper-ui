/*
 * @Author: Sam
 * @Date: 2020-05-07 14:51:04
 * @Last Modified by:   Sam
 * @Last Modified time: 2020-05-07 14:51:04
 */

import bpCheckbox from './src/bp-checkbox.vue';

bpCheckbox.install = function (Vue) {

    Vue.component(bpCheckbox.name, bpCheckbox);

}

export default bpCheckbox;