/**
 * @Author: Sam
 * @Date: 2019-12-16 11:05:36
 * @Last Modified by: Sam
 * @Last Modified time: 2022-01-29 14:56:36
 */

import bpButton from './src/bp-button.vue';

bpButton.install = function (Vue) {

    Vue.component(bpButton.name, bpButton);

}

export default bpButton;