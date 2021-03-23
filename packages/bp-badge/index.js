/*
 * @Author: Sam
 * @Date: 2020-07-14 10:05:54
 * @Last Modified by:   Sam
 * @Last Modified time: 2020-07-14 10:05:54
 */

import bpBadge from './src/bp-badge.vue';

bpBadge.install = function (Vue) {

    Vue.component(bpBadge.name, bpBadge);

}

export default bpBadge;