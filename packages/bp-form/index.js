/*
 * @Author: Sam
 * @Date: 2021-02-05 21:41:12
 * @Last Modified by: Sam
 * @Last Modified time: 2021-08-31 16:52:34
 */

import bpForm from './src/bp-form.vue';

bpForm.install = function (Vue) {

    Vue.component(bpForm.name, bpForm);

}

export default bpForm;