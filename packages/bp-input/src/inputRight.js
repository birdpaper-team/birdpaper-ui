/*
 * @Author: Sam
 * @Date: 2021-05-27 14:32:08
 * @Last Modified by: Sam
 * @Last Modified time: 2021-05-28 08:54:02
 */
import {
  computed,
  getCurrentInstance,
  reactive
} from "vue";

// 右侧操作显示
// 优先级：password > slot > clearable > showLimit > suffixIcon

export const useInputRight = (props, emit) => {
  const {
    proxy
  } = getCurrentInstance();

  const rightOption = reactive({
    show: false,
    visibled: false,
    icon: "",
    text: "",
  });

  const isPassword = props.type === 'password';
  const isClearable = props.clearable;
  const isShowLimit = props.showLimit;
  const hasSuffixIcon = props.suffixIcon !== "";

  rightOption.show = computed(() => !props.disabled && !props.readonly);

  /**
   * 获取当前实例的输入框类型，默认为 password
   * 仅在 password 类型下控制明文显示时判断
   * @returns {String} type
   */
  const getCurrentInputType = () => {
    const input = proxy.$refs.inp || {};
    const {
      type = 'password'
    } = input
    return type;
  }

  /**
   * 设置当前输入框的 type
   * @param {*} type 输入框类型
   * @returns {Promise}
   */
  const setCurrentInputType = (type = 'text') => {
    return new Promise((resolve, reject) => {
      proxy.$refs.inp.type = type;
      resolve(type);
    }).catch(err => {
      reject(err)
    });
  }

  // password 下切换类型对应的 Icon 类名
  const PSW_ICON_OBJ = {
    text: "ri-eye-line",
    password: "ri-eye-fill"
  }

  // password 下切换类型对应的输入框类型值
  const PSW_TYPE_OBJ = {
    text: "password",
    password: "text"
  }

  /**
   * 右侧区域显示控制
   * @param {*} inpVal 输入框值
   * @returns
   */
  const showRightArea = (inpVal = "") => {
    if (isPassword) {
      rightOption.visibled = true;
      return;
    }
    if (isClearable) {
      rightOption.visibled = inpVal !== "";
      return;
    }
    if (hasSuffixIcon || isShowLimit) {
      rightOption.visibled = true;
      return;
    }
  };

  /**
   * 右侧内容控制
   * @returns
   */
  const renderRightArea = () => {
    rightOption.text = computed(() => {
      return isShowLimit ? `${props.modelValue.length}/${props.maxLength}` : '';
    });

    if (isPassword) {
      rightOption.icon = PSW_ICON_OBJ[getCurrentInputType()];
      return;
    }

    if (isClearable) {
      rightOption.icon = "ri-close-circle-fill";
      return;
    }

    if (isShowLimit) {
      rightOption.icon = "";
      return;
    }

    if (hasSuffixIcon) {
      rightOption.icon = props.suffixIcon;
      return;
    }
  };

  // 右侧区域点击触发
  const onRightOptionClick = (e) => {
    // 密码输入框下文本类型显示切换
    if (isPassword) {
      // 获取当前的输入框类型并根据映射字典进行切换
      return setCurrentInputType(PSW_TYPE_OBJ[getCurrentInputType()]).then(type => {
        rightOption.icon = PSW_ICON_OBJ[type];
      });
    }
    // 清空值
    if (isClearable) {
      e.target.value = "";
      rightOption.visibled = false;
      emit("update:modelValue", "");
      emit("clear", "");
      return;
    }
  };

  return {
    rightOption,
    onRightOptionClick,
    showRightArea,
    renderRightArea,
  };
}