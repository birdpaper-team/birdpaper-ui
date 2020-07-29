/*
 * @Author: Sam
 * @Date: 2020-07-06 10:18:09
 * @Last Modified by: Sam
 * @Last Modified time: 2020-07-06 10:18:31
 */

import bpRadio from './src/bp-radio.vue';

bpRadio.install = function (Vue) {

    Vue.component(bpRadio.name, bpRadio);

}

export default bpRadio;