/**
 * @Author: Sam
 * @Date: 2021-10-09 16:43:00
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-10-09 16:43:00
 */

import bpDatePicker from './src/bp-date-picker.vue';

bpDatePicker.install = function (Vue) {

    Vue.component(bpDatePicker.name, bpDatePicker);

}

export default bpDatePicker;