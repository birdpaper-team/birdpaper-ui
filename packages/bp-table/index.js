/*
 * @Author: Sam
 * @Date: 2020-05-25 13:39:48
 * @Last Modified by: Sam
 * @Last Modified time: 2020-05-26 13:36:39
 */

import bpTable from './src/bp-table.vue';

bpTable.install = function (Vue) {

    Vue.component(bpTable.name, bpTable);

}

export default bpTable;