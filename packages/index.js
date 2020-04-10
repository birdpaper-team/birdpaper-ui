/*
 * @Author: Sam
 * @Date: 2020-01-11 10:30:29
 * @Last Modified by: Sam
 * @Last Modified time: 2020-04-02 13:54:31
 */
import Vue from 'vue';
// 导入组件
import bpButton from './bp-button';
import bpInput from './bp-input';
import bpRow from './bp-row';
import bpCol from './bp-col';
import msg from './bp-message';
import bpSelect from './bp-select';
import bpOption from './bp-option';
import bpDialog from './bp-dialog';
import bpMask from './bp-mask';

Vue.prototype.$message = msg;

const components = [
  bpButton,
  bpInput,
  bpDialog,
  bpMask,
  bpSelect,
  bpOption,
  bpRow,
  bpCol
];

// install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {

  // 判断是否安装
  if (install.installed) {
    return;
  };

  // 遍历注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });

}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 具体的组件列表
  bpButton,
  bpSelect,
  bpOption,
  bpDialog,
  bpInput,
  bpMask,
  bpRow,
  bpCol,
}
export const Message = {
  msg
}