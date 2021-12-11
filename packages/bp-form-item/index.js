/*
 * @Author: Sam
 * @Date: 2021-02-05 21:41:12
 * @Last Modified by: Sam
 * @Last Modified time: 2021-09-01 08:25:13
 */

import bpFormItem from './src/bp-form-item.vue';

bpFormItem.install = function (Vue) {

    Vue.component(bpFormItem.name, bpFormItem);

}

export default bpFormItem;