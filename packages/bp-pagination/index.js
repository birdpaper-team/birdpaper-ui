/*
 * @Author: Sam
 * @Date: 2021-03-25 11:08:04
 * @Last Modified by: Sam
 * @Last Modified time: 2021-07-21 20:30:44
 */

import bpPagination from './src/bp-pagination.vue';

bpPagination.install = function (Vue) {

    Vue.component(bpPagination.name, bpPagination);

}

export default bpPagination;