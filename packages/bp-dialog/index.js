/*
 * @Author: Sam
 * @Date: 2020-04-01 15:07:33
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-01 15:07:57
 */

import bpDialog from './src/bp-dialog.vue';

bpDialog.install = function (Vue) {

    Vue.component(bpDialog.name, bpDialog);

}

export default bpDialog;