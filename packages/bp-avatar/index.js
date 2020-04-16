/*
 * @Author: Sam
 * @Date: 2020-04-11 18:38:30
 * @Last Modified by:   Sam
 * @Last Modified time: 2020-04-11 18:38:30
 */

import bpAvatar from './src/bp-avatar.vue';

bpAvatar.install = function (Vue) {

    Vue.component(bpAvatar.name, bpAvatar);

}

export default bpAvatar;