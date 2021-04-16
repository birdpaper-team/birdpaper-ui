/*
 * @Author: Sam
 * @Date: 2021-04-12 11:04:18
 * @Last Modified by: Sam
 * @Last Modified time: 2021-04-12 11:04:52
 */

import bpDropdown from './src/bp-dropdown.vue';

bpDropdown.install = function (Vue) {

    Vue.component(bpDropdown.name, bpDropdown);

}

export default bpDropdown;