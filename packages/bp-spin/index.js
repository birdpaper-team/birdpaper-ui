/*
 * @Author: Sam
 * @Date: 2021-03-05 09:34:04
 * @Last Modified by:   Sam
 * @Last Modified time: 2021-03-05 09:34:04
 */

import bpSpin from './src/bp-spin.vue';

bpSpin.install = function (Vue) {

    Vue.component(bpSpin.name, bpSpin);

}

export default bpSpin;