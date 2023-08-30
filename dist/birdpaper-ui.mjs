var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, computed, useSlots, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, ref, nextTick, Fragment, toDisplayString, watch, resolveComponent, renderList, createBlock, withCtx, createTextVNode, reactive, Comment, provide, onMounted, onBeforeUnmount, resolveDirective, withDirectives, withModifiers, createVNode, Teleport, Transition, vShow, inject, watchEffect, resolveDynamicComponent, mergeProps, toHandlerKey, normalizeStyle, onUnmounted, TransitionGroup, render } from "vue";
const _sfc_main$x = defineComponent({
  name: "Button",
  props: {
    /** 按钮类型 Type of the button */
    type: { type: String, default: "normal" },
    /** 按钮尺寸 Size of the button */
    size: { type: String, default: "normal" },
    /** 按钮形状 Shape of the button */
    shape: { type: String, default: "square" },
    /** 按钮状态 Status of the button */
    status: { type: String, default: "normal" },
    /** 是否加载 Loading or not */
    loading: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 按钮图标 Button icon */
    icon: { type: String, default: "" },
    /** 是否撑满父级 Block or not */
    block: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const name = "bp-btn";
    const isDisabled = computed(() => props.disabled || props.loading);
    const btnClass = computed(() => {
      let className = [
        name,
        `${name}-${props.shape}-${props.size}`,
        `${name}-type-${props.type}-status-${props.status}`,
        { "has-default-slot": !!useSlots().default },
        { "is-block": props.block }
      ];
      return className;
    });
    const btnIcon = computed(() => {
      return props.loading ? "bp-icon-loading ri-loader-4-line" : props.icon;
    });
    const onClick = () => {
      if (!props.disabled)
        return emit("click");
    };
    return {
      isDisabled,
      btnClass,
      btnIcon,
      onClick
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$l = ["disabled"];
const _hoisted_2$f = {
  key: 0,
  class: "left-icon"
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.btnClass),
    type: "button",
    disabled: _ctx.isDisabled,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [
    _ctx.btnIcon ? (openBlock(), createElementBlock("span", _hoisted_2$f, [
      createElementVNode("i", {
        class: normalizeClass(_ctx.btnIcon)
      }, null, 2)
    ])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$l);
}
const _button = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$m]]);
const DEFAULT_PREFIX = "Bp";
const getComponentsPrefix = (name) => {
  return name ?? DEFAULT_PREFIX;
};
_button.name = getComponentsPrefix() + _button.name;
const Button = Object.assign(_button, {
  install: (app) => {
    app.component(_button.name, _button);
  }
});
const _sfc_main$w = defineComponent({
  name: "Input",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [String, Number], default: "" },
    /** 输入框类型 Type of the input */
    type: { type: String, default: "text" },
    /** 输入框尺寸 Size of the input */
    size: { type: String, default: "normal" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 是否只读状态 Readonly or not */
    readonly: { type: Boolean, default: false },
    /** 是否警示状态 Danger or not */
    isDanger: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text*/
    placeholder: { type: String, default: "" },
    /** 限制输入最大长度 Restricts the maximum input length */
    maxlength: { type: Number, default: null },
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: { type: Boolean, default: false },
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
    const name = "bp-input";
    const inpRef = ref();
    const inpType = computed(() => isPasswordType.value ? "password" : "text");
    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
    });
    function getStatus() {
      return props.disabled && "disabled" || props.readonly && "readonly" || props.isDanger && "danger" || "normal";
    }
    const showClear = computed(
      () => props.type === "text" && props.modelValue && props.clearable && !props.disabled && !props.readonly
    );
    const handleClear = () => {
      emit("update:modelValue", "");
      nextTick(() => handleFocus());
    };
    const showWordLimit = computed(() => {
      return props.maxlength && props.showLimit && props.type === "text";
    });
    const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);
    const showPassword = ref(false);
    const isPasswordType = computed(() => props.type === "password" && !showPassword.value);
    const triggerPassword = () => {
      showPassword.value = !showPassword.value;
      nextTick(() => handleFocus());
    };
    const handleFocus = () => inpRef.value.focus();
    const handleBlur = () => inpRef.value.blur();
    const onFocus = () => emit("focus");
    const onBlur = () => emit("blur");
    const onKeypress = () => emit("keypress");
    const onKeyup = () => emit("keyup");
    const onInput = (e) => {
      const targetValue = e.target.value;
      emit("update:modelValue", targetValue);
    };
    return {
      inpRef,
      inpType,
      inpClass,
      showClear,
      handleClear,
      handleFocus,
      showPassword,
      showWordLimit,
      limitText,
      slots,
      handleBlur,
      onFocus,
      onBlur,
      onKeypress,
      onKeyup,
      onInput,
      triggerPassword
    };
  }
});
const _hoisted_1$k = ["type", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$e = {
  key: 0,
  class: "suffix"
};
const _hoisted_3$a = ["textContent"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.inpClass)
  }, [
    createElementVNode("input", {
      ref: "inpRef",
      class: "bp-input-inner",
      type: _ctx.inpType,
      spellcheck: false,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      cursor: _ctx.modelValue.length,
      placeholder: _ctx.placeholder,
      maxlength: _ctx.maxlength,
      value: _ctx.modelValue,
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onKeypress: _cache[2] || (_cache[2] = (...args) => _ctx.onKeypress && _ctx.onKeypress(...args)),
      onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.onKeyup && _ctx.onKeyup(...args)),
      onInput: _cache[4] || (_cache[4] = (...args) => _ctx.onInput && _ctx.onInput(...args))
    }, null, 40, _hoisted_1$k),
    _ctx.slots.suffix || _ctx.showClear || _ctx.showWordLimit || _ctx.type === "password" ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
      !_ctx.slots.suffix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showClear ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "ri-close-line click-icon",
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        })) : createCommentVNode("", true),
        _ctx.showWordLimit ? (openBlock(), createElementBlock("span", {
          key: 1,
          textContent: toDisplayString(_ctx.limitText)
        }, null, 8, _hoisted_3$a)) : createCommentVNode("", true),
        _ctx.type === "password" ? (openBlock(), createElementBlock("i", {
          key: 2,
          onClick: _cache[6] || (_cache[6] = (...args) => _ctx.triggerPassword && _ctx.triggerPassword(...args)),
          class: normalizeClass(["click-icon", _ctx.showPassword ? "ri-eye-fill" : "ri-eye-close-fill"])
        }, null, 2)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "suffix")
    ])) : createCommentVNode("", true)
  ], 2);
}
const BpInput = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$l]]);
BpInput.name = getComponentsPrefix() + BpInput.name;
const Input = Object.assign(BpInput, {
  install: (app) => {
    app.component(BpInput.name, BpInput);
  }
});
const _sfc_main$v = defineComponent({
  name: "Textarea",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: String, default: "" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 是否只读状态 Readonly or not */
    readonly: { type: Boolean, default: false },
    /** 是否警示状态 Danger or not */
    isDanger: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text*/
    placeholder: { type: String, default: "" },
    /** 限制输入最大长度 Restricts the maximum input length */
    maxlength: { type: Number, default: null },
    /** 行数 */
    rows: { type: Number, default: 3 },
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit }) {
    const name = "bp-textarea";
    const inpRef = ref();
    const inpClass = computed(() => {
      const status = getStatus();
      return [name, `${name}-status-${status}`];
    });
    function getStatus() {
      return props.disabled && "disabled" || props.readonly && "readonly" || props.isDanger && "danger" || "normal";
    }
    const showWordLimit = computed(() => {
      return props.maxlength && props.showLimit;
    });
    const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);
    const onFocus = () => emit("focus");
    const onBlur = () => emit("blur");
    const onKeypress = () => emit("keypress");
    const onKeyup = () => emit("keyup");
    const onInput = (e) => {
      const targetValue = e.target.value;
      emit("update:modelValue", targetValue);
    };
    return {
      name,
      inpRef,
      inpClass,
      getStatus,
      showWordLimit,
      limitText,
      onFocus,
      onBlur,
      onKeypress,
      onKeyup,
      onInput
    };
  }
});
const _hoisted_1$j = ["rows", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$d = { class: "suffix" };
const _hoisted_3$9 = ["textContent"];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.inpClass)
  }, [
    createElementVNode("textarea", {
      ref: "inpRef",
      class: "bp-textarea-inner",
      rows: _ctx.rows,
      spellcheck: false,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      cursor: _ctx.modelValue.length,
      placeholder: _ctx.placeholder,
      maxlength: _ctx.maxlength,
      value: _ctx.modelValue,
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onKeypress: _cache[2] || (_cache[2] = (...args) => _ctx.onKeypress && _ctx.onKeypress(...args)),
      onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.onKeyup && _ctx.onKeyup(...args)),
      onInput: _cache[4] || (_cache[4] = (...args) => _ctx.onInput && _ctx.onInput(...args))
    }, null, 40, _hoisted_1$j),
    createElementVNode("div", _hoisted_2$d, [
      _ctx.showWordLimit ? (openBlock(), createElementBlock("span", {
        key: 0,
        textContent: toDisplayString(_ctx.limitText)
      }, null, 8, _hoisted_3$9)) : createCommentVNode("", true)
    ])
  ], 2);
}
const _textarea = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$k]]);
_textarea.name = getComponentsPrefix() + _textarea.name;
const Textarea = Object.assign(_textarea, {
  install: (app) => {
    app.component(_textarea.name, _textarea);
  }
});
const _sfc_main$u = defineComponent({
  name: "Radio",
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number, Boolean], default: false },
    /** 选项的值 */
    value: { type: [String, Number, Boolean], default: false },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const name = "bp-radio";
    const handleInput = () => {
      if (props.disabled)
        return;
      emit("update:modelValue", props.value);
      emit("change", props.value);
    };
    const isCheck = computed(() => props.modelValue === props.value);
    return {
      name,
      handleInput,
      isCheck
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.name, _ctx.disabled ? `${_ctx.name}-disabled` : ""]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
  }, [
    createElementVNode("input", {
      type: "radio",
      class: normalizeClass(`${_ctx.name}-inner`)
    }, null, 2),
    createElementVNode("span", {
      class: normalizeClass([`${_ctx.name}-radio`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
    }, null, 2),
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.name}-label`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const _radio = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$j]]);
const _sfc_main$t = defineComponent({
  name: "RadioGroup",
  components: { bpRadio: _radio },
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number] },
    /** 选项列表 */
    optionList: { type: Array, default: () => [] },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-radio-group";
    const val = ref(props.modelValue ?? "");
    const updateValue = (val2) => {
      emit("update:modelValue", val2);
    };
    watch(
      () => props.modelValue,
      () => val.value = props.modelValue
    );
    return {
      name,
      val,
      updateValue
    };
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_radio = resolveComponent("bp-radio");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.name)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.optionList, (v) => {
      return openBlock(), createBlock(_component_bp_radio, {
        modelValue: _ctx.val,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event),
        disabled: _ctx.disabled,
        value: v.value,
        onChange: _ctx.updateValue
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(v.label), 1)
        ]),
        _: 2
      }, 1032, ["modelValue", "disabled", "value", "onChange"]);
    }), 256))
  ], 2);
}
const _radioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$i]]);
_radio.name = getComponentsPrefix() + _radio.name;
_radioGroup.name = getComponentsPrefix() + _radioGroup.name;
const Radio = Object.assign(_radio, {
  install: (app) => {
    app.component(_radio.name, _radio);
    app.component(_radioGroup.name, _radioGroup);
  }
});
const _sfc_main$s = defineComponent({
  name: "Checkbox",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-checkbox";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });
    const isCheck = computed(() => props.modelValue);
    const handleClick = () => {
      emit("update:modelValue", !props.modelValue);
    };
    return {
      cls,
      name,
      isCheck,
      handleClick
    };
  }
});
const _hoisted_1$i = {
  key: 0,
  class: "ri-check-line"
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("input", {
      type: "checkbox",
      class: normalizeClass(`${_ctx.name}-inner`)
    }, null, 2),
    createElementVNode("span", {
      class: normalizeClass([`${_ctx.name}-checkbox`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
    }, [
      _ctx.isCheck ? (openBlock(), createElementBlock("i", _hoisted_1$i)) : createCommentVNode("", true)
    ], 2),
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.name}-label`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const _checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$h]]);
_checkbox.name = getComponentsPrefix() + _checkbox.name;
const Checkbox = Object.assign(_checkbox, {
  install: (app) => {
    app.component(_checkbox.name, _checkbox);
  }
});
const _sfc_main$r = defineComponent({
  name: "Switch",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [Boolean, Number, String], default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 选中时的值 */
    checkValue: { type: [Boolean, Number, String], default: true },
    /** 未选中时的值 */
    uncheckValue: { type: [Boolean, Number, String], default: false },
    /** 触发改变前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const name = "bp-switch";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });
    const isCheck = computed(() => props.modelValue === props.checkValue);
    const loading = ref(false);
    const handleClick = async () => {
      if (props.disabled || loading.value)
        return;
      try {
        loading.value = true;
        const res = await props.onBeforeOk();
        if (!res)
          return;
        emit("update:modelValue", isCheck.value ? props.uncheckValue : props.checkValue);
      } catch (error) {
        console.log("[ Switch -onBeforeOk error]", error);
      } finally {
        loading.value = false;
      }
    };
    return {
      name,
      cls,
      isCheck,
      loading,
      handleClick
    };
  }
});
const _hoisted_1$h = {
  key: 0,
  class: "switch-icon-loading ri-loader-4-line"
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("input", {
      type: "checkbox",
      class: normalizeClass(`${_ctx.name}-inner`)
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass([`${_ctx.name}-slider`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
    }, [
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.name}-slider-dot`)
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("i", _hoisted_1$h)) : createCommentVNode("", true)
      ], 2)
    ], 2)
  ], 2);
}
const _switch = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$g]]);
_switch.name = getComponentsPrefix() + _switch.name;
const Switch = Object.assign(_switch, {
  install: (app) => {
    app.component(_switch.name, _switch);
  }
});
class SelectOption {
  constructor() {
    /** 选项文本 */
    __publicField(this, "label", "");
    /** 选项值 */
    __publicField(this, "value", "");
  }
}
const selectInjectionKey = Symbol("SelectCtxKey");
const vClickOutside = {
  mounted(el, binding) {
    function eventHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.value && typeof binding.value === "function") {
        binding.value(e);
      }
    }
    el.__click_outside__ = eventHandler;
    document.addEventListener("click", eventHandler);
  },
  beforeUnmount(el) {
    document.removeEventListener("click", el.__click_outside__);
    delete el.__click_outside__;
  }
};
const isNull = (data) => !data && data != 0;
const isString = (data) => typeof data === "string";
const throttle = (fn, delay) => {
  var lastTime;
  var timer;
  var delay = delay || 200;
  return function() {
    var args = arguments;
    var nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        lastTime = nowTime;
        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
};
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
const off = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
const warn = (module, info) => {
  console.warn(`[ A warning of birdpaper-ui ] - ${module}: ` + info);
};
const isElement = (vn) => {
  return Boolean(
    vn && vn.shapeFlag & 1
    /* ELEMENT */
  );
};
const isComponent = (vn, type) => {
  return Boolean(
    vn && vn.shapeFlag & 6
    /* COMPONENT */
  );
};
const isTextChildren = (child, children) => {
  return Boolean(child && child.shapeFlag & 8);
};
const isArrayChildren = (vn, children) => {
  return Boolean(
    vn && vn.shapeFlag & 16
    /* ARRAY_CHILDREN */
  );
};
const opt = Object.prototype.toString;
const isArray = (obj) => {
  return opt.call(obj) === "[object Array]";
};
const isSlotsChildren = (vn, children) => {
  return Boolean(
    vn && vn.shapeFlag & 32
    /* SLOTS_CHILDREN */
  );
};
const getAllElements = (children, includeText = false) => {
  var _a, _b;
  const results = [];
  for (const item of children ?? []) {
    if (isElement(item) || isComponent(item) || includeText && isTextChildren(item, item.children)) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements((_b = (_a = item.children).default) == null ? void 0 : _b.call(_a), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
const useSelect = (slots) => {
  const currentSelect = reactive(new SelectOption());
  const isFocus = ref(false);
  const valueMap = computed(() => {
    var _a, _b, _c;
    try {
      let obj = {};
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment) ?? [];
      for (const item of children) {
        if (item.type["name"] === "BpOption") {
          obj[item.props.value] = item.props.label || ((_c = (_b = item.children)["default"]) == null ? void 0 : _c.call(_b)[0].children);
        }
      }
      return obj;
    } catch (error) {
      return {};
    }
  });
  return {
    isFocus,
    currentSelect,
    valueMap
  };
};
const _sfc_main$q = defineComponent({
  name: "Select",
  components: { BpInput },
  directives: { clickOutside: vClickOutside },
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [String, Number], default: "" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    // TODO /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const name = "bp-select";
    const selectRef = ref();
    const inpRef = ref();
    const optionBoxRef = ref();
    const { currentSelect, valueMap, isFocus } = useSelect(slots);
    provide(selectInjectionKey, {
      modelValue: props.modelValue,
      currentSelect,
      onSelect: (v, payload) => {
        currentSelect.value = v;
        currentSelect.label = payload.label;
        emit("update:modelValue", currentSelect.value);
        emit("change", currentSelect.value);
        isFocus.value = false;
      }
    });
    const clsName = computed(() => {
      let cls = [name];
      if (isFocus.value)
        cls.push(`${name}-focus`);
      if (props.disabled)
        cls.push(`${name}-disabled`);
      return cls;
    });
    const handleClick = () => {
      if (props.disabled)
        return;
      handleTrigger();
      isFocus.value = !isFocus.value;
      isFocus.value && inpRef.value.handleFocus();
    };
    const onClickOutside = () => isFocus.value = false;
    const onMouseleave = () => !isFocus.value && inpRef.value.handleBlur();
    const setValue = () => {
      currentSelect.value = props.modelValue;
      currentSelect.label = valueMap.value[currentSelect.value];
    };
    watch(
      () => valueMap.value,
      () => setValue(),
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.modelValue,
      () => setValue()
    );
    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleTrigger, 100));
      });
    });
    onBeforeUnmount(() => {
      off(window, "resize", handleTrigger);
    });
    const handleTrigger = () => {
      var _a;
      const rect = (_a = selectRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!rect)
        return;
      optionBoxRef.value.setAttribute(
        "style",
        `display: ${isFocus.value ? "block" : "none"};
         width: ${rect.width}px;
         left: ${rect.left}px;
         top: ${rect.top + rect.height + document.documentElement.scrollTop}px;`
      );
    };
    return {
      name,
      selectRef,
      inpRef,
      optionBoxRef,
      currentSelect,
      isFocus,
      clsName,
      handleClick,
      onClickOutside,
      onMouseleave
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_input = resolveComponent("bp-input");
  const _directive_clickOutside = resolveDirective("clickOutside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass(_ctx.clsName),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseleave && _ctx.onMouseleave(...args))
  }, [
    createVNode(_component_bp_input, {
      ref: "inpRef",
      disabled: _ctx.disabled,
      modelValue: _ctx.currentSelect.label,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentSelect.label = $event),
      readonly: "",
      placeholder: _ctx.placeholder
    }, {
      suffix: withCtx(() => [
        createElementVNode("i", {
          class: normalizeClass([`${_ctx.name}-icon-inner`, `ri-arrow-${_ctx.isFocus ? "up" : "down"}-s-line`])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["disabled", "modelValue", "placeholder"]),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        name: "fade-select",
        appear: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref: "optionBoxRef",
            class: normalizeClass(`${_ctx.name}-option-box`)
          }, [
            createElementVNode("ul", {
              class: normalizeClass(`${_ctx.name}-option-list`)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2)
          ], 2), [
            [vShow, _ctx.isFocus]
          ])
        ]),
        _: 3
      })
    ]))
  ], 34)), [
    [_directive_clickOutside, _ctx.onClickOutside]
  ]);
}
const _select = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$f]]);
const _sfc_main$p = defineComponent({
  name: "Option",
  props: {
    value: { type: [String, Number, Boolean], default: "" },
    label: { type: String, default: "" }
  },
  setup(props) {
    const name = "bp-option";
    const ctx = ref();
    const slot = useSlots();
    const option = reactive(new SelectOption());
    const init = () => {
      var _a;
      ctx.value = inject(selectInjectionKey, null);
      option.label = props.label || ((_a = slot.default) == null ? void 0 : _a.call(slot)[0].children);
      option.value = props.value;
    };
    const clsName = computed(() => {
      let cls = [`${name}-item`];
      if (ctx.value.currentSelect.value === props.value)
        cls.push(`${name}-active`);
      return cls;
    });
    const handleClick = () => {
      var _a;
      (_a = ctx.value) == null ? void 0 : _a.onSelect(option.value, { ...option });
    };
    watch(
      () => props,
      () => {
        init();
      },
      {
        immediate: true
      }
    );
    return {
      name,
      clsName,
      handleClick
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.clsName),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("span", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
const _option = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$e]]);
_select.name = getComponentsPrefix() + _select.name;
_option.name = getComponentsPrefix() + _option.name;
const Select = Object.assign(_select, {
  install: (app) => {
    app.component(_select.name, _select);
    app.component(_option.name, _option);
  }
});
const _hoisted_1$g = ["textContent"];
const _hoisted_2$c = {
  key: 1,
  class: "ri-arrow-left-s-line"
};
const __default__$a = defineComponent({
  name: "PaginationPrev"
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    text: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const clsName = computed(() => {
      let cls = [`${name}-item`, `${name}-prev`];
      if (props.disabled) {
        cls.push(`${name}-item-disabled`);
      }
      return cls;
    });
    const handleClick = () => {
      if (props.disabled)
        return;
      emits("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(clsName.value),
        onClick: handleClick
      }, [
        __props.text ? (openBlock(), createElementBlock("span", {
          key: 0,
          textContent: toDisplayString(__props.text)
        }, null, 8, _hoisted_1$g)) : (openBlock(), createElementBlock("i", _hoisted_2$c))
      ], 2);
    };
  }
});
const _hoisted_1$f = ["textContent"];
const _hoisted_2$b = {
  key: 1,
  class: "ri-arrow-right-s-line"
};
const __default__$9 = defineComponent({
  name: "PaginationNext"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
    text: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const clsName = computed(() => {
      let cls = [`${name}-item`, `${name}-next`];
      if (props.disabled) {
        cls.push(`${name}-item-disabled`);
      }
      return cls;
    });
    const handleClick = () => {
      if (props.disabled)
        return;
      emits("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(clsName.value),
        onClick: handleClick
      }, [
        __props.text ? (openBlock(), createElementBlock("span", {
          key: 0,
          textContent: toDisplayString(__props.text)
        }, null, 8, _hoisted_1$f)) : (openBlock(), createElementBlock("i", _hoisted_2$b))
      ], 2);
    };
  }
});
const _hoisted_1$e = ["textContent"];
const __default__$8 = defineComponent({
  name: "PaginationTotal"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: {
    value: { type: Number, default: 0 },
    tmpString: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    const name = "bp-pagination";
    const paramsStr = "{total}";
    const text = ref("");
    watchEffect(() => {
      text.value = props.tmpString.replace(paramsStr, props.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([`${name}-item`, `${name}-total`])
      }, [
        createElementVNode("span", {
          class: "page-text",
          textContent: toDisplayString(text.value)
        }, null, 8, _hoisted_1$e)
      ], 2);
    };
  }
});
const _hoisted_1$d = ["onClick"];
const _hoisted_2$a = { key: 0 };
const _hoisted_3$8 = {
  key: 1,
  class: "ri-more-fill"
};
const __default__$7 = defineComponent({
  name: "PaginationPager"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    currentPage: { type: Number, default: 1 },
    pages: { type: Number, default: 0 },
    maxPager: { type: Number, default: 0 }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const pageList = ref([]);
    const onClick = (pageNum) => {
      emits("click", pageNum);
    };
    watchEffect(() => {
      const { pages, currentPage, maxPager } = props;
      pageList.value = [];
      if (pages < maxPager + 1) {
        for (let i = 1; i < pages + 1; i++) {
          pageList.value.push({ index: i, type: "number" });
        }
        return;
      }
      const omit_num = Number((maxPager / 2 + 1).toFixed());
      const middle_page_count = maxPager - 2;
      const is_front_omit = currentPage >= omit_num;
      const is_end_omit = currentPage <= Number(pages - omit_num);
      pageList.value = [{ index: 1, type: "number" }];
      is_front_omit && pageList.value.push({ index: currentPage - middle_page_count, type: "ellipsis" });
      let start_index;
      !is_front_omit && (start_index = 2);
      is_front_omit && is_end_omit && (start_index = currentPage - Number((middle_page_count / 2).toFixed()) + 1);
      !is_end_omit && (start_index = pages - middle_page_count);
      for (let i = start_index; i < middle_page_count + start_index; i++) {
        pageList.value.push({ index: i, type: "number" });
      }
      is_end_omit && pageList.value.push({ index: currentPage + middle_page_count, type: "ellipsis" });
      pageList.value.push({ index: pages, type: "number" });
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(pageList.value, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: `page-item-${index}`,
          class: normalizeClass([`${name}-pager`, `${name}-item`, item.index === __props.currentPage ? `${name}-item-active` : ""]),
          onClick: ($event) => onClick(item.index)
        }, [
          item.type === "number" ? (openBlock(), createElementBlock("span", _hoisted_2$a, toDisplayString(item.index), 1)) : (openBlock(), createElementBlock("i", _hoisted_3$8))
        ], 10, _hoisted_1$d);
      }), 128);
    };
  }
});
const _hoisted_1$c = {
  key: 0,
  class: "page-text"
};
const _hoisted_2$9 = {
  key: 1,
  class: "page-text"
};
const __default__$6 = defineComponent({
  name: "PaginationJumper"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    currentPage: { type: Number, default: 1 },
    pages: { type: Number, default: 0 },
    tmpString: { type: String, default: "前往{jumper}" }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const paramsStr = "{jumper}";
    const val = ref("");
    const text = reactive({ prefix: "", suffix: "" });
    const handleBlur = () => {
      let num = Number(val.value) ?? 1;
      num < 1 && (num = 1);
      num > props.pages && (num = props.pages);
      emits("change", num);
    };
    watchEffect(() => {
      try {
        const str = props.tmpString.split(paramsStr);
        if (str.length > 1) {
          text.prefix = str[0];
          text.suffix = str[1];
        }
      } catch (error) {
        warn("Pagination", "Split jumper paramsStr failure");
      }
    });
    return (_ctx, _cache) => {
      const _component_bp_input = resolveComponent("bp-input");
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([`${name}-item`, `${name}-jumper`])
      }, [
        text.prefix ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(text.prefix), 1)) : createCommentVNode("", true),
        createVNode(_component_bp_input, {
          modelValue: val.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => val.value = $event),
          size: "small",
          onBlur: handleBlur
        }, null, 8, ["modelValue"]),
        text.suffix ? (openBlock(), createElementBlock("span", _hoisted_2$9, toDisplayString(text.suffix), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const __default__$5 = defineComponent({
  name: "PaginationSizes"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    currentSize: { type: Number, default: "" },
    sizesList: { type: Array, default: () => [] },
    tmpString: { type: String, default: "" }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const val = ref(props.currentSize || props.sizesList[0] || 10);
    const paramsStr = "{value}";
    const list = ref([]);
    const onChange = (v) => {
      emits("change", v);
    };
    watchEffect(() => {
      for (let i = 0; i < props.sizesList.length; i++) {
        const value = props.sizesList[i];
        const label = `${props.tmpString.replace(paramsStr, value)}`;
        list.value.push({ label, value });
      }
    });
    return (_ctx, _cache) => {
      const _component_bp_option = resolveComponent("bp-option");
      const _component_bp_select = resolveComponent("bp-select");
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(`${name}-item ${name}-sizes`)
      }, [
        createVNode(_component_bp_select, {
          modelValue: val.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => val.value = $event),
          style: { "width": "100px" },
          onChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (v) => {
              return openBlock(), createBlock(_component_bp_option, {
                value: v.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(v.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 256))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2);
    };
  }
});
const usePagination = (props, emits) => {
  const layoutMap = { prev: _sfc_main$o, next: _sfc_main$n, total: _sfc_main$m, pager: _sfc_main$l, jumper: _sfc_main$k, sizes: _sfc_main$j };
  const currentPage = ref(props.current || 1);
  const currentPageSize = ref(props.pageSize);
  const totalPagesNum = ref(0);
  const setPage = (type, pageNum) => {
    let num = currentPage.value;
    type === "prev" ? num-- : type === "next" ? num++ : num = pageNum ?? 1;
    currentPage.value = num < 1 ? 1 : num > totalPagesNum.value ? totalPagesNum.value : num;
    return currentPage.value;
  };
  const sizeSizes = (pageSizes) => {
    currentPageSize.value = pageSizes;
    return currentPageSize.value;
  };
  watchEffect(() => {
    totalPagesNum.value = Math.ceil(props.total / currentPageSize.value);
    if (currentPage.value > totalPagesNum.value) {
      setPage("page", totalPagesNum.value);
    }
  });
  const totalComponents = computed(() => {
    return {
      bind: {
        value: props.total,
        tmpString: props.totalTmpString
      }
    };
  });
  const prevComponents = computed(() => {
    return {
      bind: {
        text: props.prevText,
        disabled: currentPage.value === 1
      },
      eventName: "click",
      event: () => {
        const pages = setPage("prev");
        emits("update:current", pages);
        emits("page-change", pages);
      }
    };
  });
  const pagerComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        maxPager: props.maxPager,
        currentPage: currentPage.value
      },
      eventName: "click",
      event: (page) => {
        const pages = setPage("page", page);
        emits("update:current", pages);
        emits("page-change", pages);
      }
    };
  });
  const jumperComponents = computed(() => {
    return {
      bind: {
        pages: totalPagesNum.value,
        currentPage: currentPage.value,
        tmpString: props.jumperTmpString
      },
      eventName: "change",
      event: (page) => {
        const pages = setPage("page", page);
        emits("update:current", pages);
        emits("page-change", pages);
      }
    };
  });
  const nextComponents = computed(() => {
    return {
      bind: {
        text: props.nextText,
        disabled: currentPage.value === totalPagesNum.value
      },
      eventName: "click",
      event: () => {
        const pages = setPage("next");
        emits("update:current", pages);
        emits("page-change", pages);
      }
    };
  });
  const sizesComponents = computed(() => {
    return {
      bind: {
        currentSize: currentPageSize.value,
        sizesList: props.sizesList,
        tmpString: props.sizesTmpString
      },
      eventName: "change",
      event: (size) => {
        const sizes2 = sizeSizes(size);
        emits("update:pageSize", sizes2);
        emits("size-change", sizes2);
      }
    };
  });
  const componentsList = computed(() => {
    try {
      const layoutList = props.layout.replace(/\s*/g, "").split(",") || [];
      if (layoutList.length === 0)
        return [];
      const components2 = [];
      const componentMap = {
        total: totalComponents.value,
        prev: prevComponents.value,
        next: nextComponents.value,
        pager: pagerComponents.value,
        jumper: jumperComponents.value,
        sizes: sizesComponents.value
      };
      layoutList.map((name) => {
        components2.push({ name, component: layoutMap[name], ...componentMap[name] });
      });
      return components2;
    } catch (error) {
      warn("Pagination", "Render componentsList failure");
    }
  });
  return {
    componentsList
  };
};
const _sfc_main$i = defineComponent({
  name: "Pagination",
  props: {
    /** 布局配置 The layout config */
    layout: { type: String, default: "prev, pager, next" },
    /** 总数 The total number of */
    total: { type: Number, default: 0 },
    /** 当前页 The current number of pages */
    current: { type: Number, default: 1 },
    /** 每页显示条数 Size of entries per page */
    pageSize: { type: Number, default: () => 10 },
    /** 每页显示条数的选项 Option setting to display number of entries per page */
    sizesList: { type: Array, default: () => [10, 20, 50, 100] },
    /** 上一页按钮文案 Replace the icon displayed on the previous page */
    prevText: { type: String, default: "" },
    /** 下一页按钮文案 Replace the icon displayed on the next page */
    nextText: { type: String, default: "" },
    /** 最大页码数，须为大于等于 5 且小于等于 21 的奇数 The maximum number of pages must be an odd number greater than or equal to 5 and less than or equal to 21 */
    maxPager: { type: Number, default: 7 },
    /** 总条数文案 Replace the total copywriting templates */
    totalTmpString: { type: String, default: "共 {total} 条" },
    /** 页码跳转文案 Replace the jumper copywriting template */
    jumperTmpString: { type: String, default: "前往{jumper}" },
    /** 每页条数选项文案 Replace the sizes copywriting template */
    sizesTmpString: { type: String, default: "{value} 条/页" }
  },
  emits: ["update:current", "update:pageSize", "page-change", "size-change"],
  setup(props, { emit }) {
    const name = "bp-pagination";
    const { componentsList } = usePagination(props, emit);
    return {
      name,
      componentsList
    };
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.name)
  }, [
    createElementVNode("ul", {
      class: normalizeClass(`${_ctx.name}-container`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.componentsList, (item) => {
        return openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps(item.bind, {
          [toHandlerKey(item.eventName)]: item.event
        }), null, 16);
      }), 256))
    ], 2)
  ], 2);
}
const _pagination = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$d]]);
_pagination.name = getComponentsPrefix() + _pagination.name;
const Pagination = Object.assign(_pagination, {
  install: (app) => {
    app.component(_pagination.name, _pagination);
  }
});
const useTable = (props, slots) => {
  const bpTable = ref(null);
  const columns = ref([]);
  const table_width = ref();
  let _remainder_col = 0;
  let _fixed_width = 0;
  let _min_width_list = [];
  let _col_width_list = [];
  const _min_column_width = 80;
  const getColumnsBySlot = () => {
    var _a, _b, _c;
    if (!((_a = slots.columns) == null ? void 0 : _a.call(slots)))
      return;
    const children = getAllElements((_b = slots.columns) == null ? void 0 : _b.call(slots), true).filter((item) => item.type !== Comment);
    if (children.length === 0)
      return;
    let arr = [];
    for (let i = 0; i < children.length; i++) {
      arr.push((_c = children[i]) == null ? void 0 : _c.props);
    }
    return arr;
  };
  const cols = getColumnsBySlot() || props.cols;
  const initColumns = () => {
    const el = bpTable.value;
    if (cols.length === 0 || cols.length > 99)
      return;
    _fixed_width = 0;
    _remainder_col = cols.length;
    _min_width_list = [];
    for (let i = 0; i < cols.length; i++) {
      const { width, minWidth } = cols[i];
      if (width) {
        _fixed_width += Number(width);
        _remainder_col--;
      }
      minWidth && _min_width_list.push(minWidth);
    }
    table_width.value = el && el.offsetWidth - 2;
    _col_width_list = getWidthList() || [];
    columns.value = [];
    for (let i = 0; i < cols.length; i++) {
      columns.value.push({ ...cols[i], width: _col_width_list[i] });
    }
    return columns.value;
  };
  function getWidthList() {
    let width_list = [];
    let adapt_width = getAdaptWidth();
    if (_min_width_list.length) {
      _min_width_list.map((item, index) => {
        if (adapt_width > item) {
          _fixed_width += item;
          _remainder_col--;
          _min_width_list.splice(index, 1);
          adapt_width = getAdaptWidth();
        }
      });
    }
    for (let i = 0; i < cols.length; i++) {
      const { width, minWidth } = cols[i];
      if (width) {
        width_list.push(width);
        continue;
      }
      const hasMinWidth = minWidth && minWidth > adapt_width;
      if (hasMinWidth) {
        width_list.push(minWidth);
        continue;
      }
      width_list.push(adapt_width < _min_column_width ? _min_column_width : adapt_width);
    }
    return width_list;
  }
  function getAdaptWidth() {
    let width = (table_width.value - _fixed_width) / _remainder_col;
    return Number(Number(width).toFixed(2));
  }
  watch(
    () => props.cols,
    () => {
      initColumns();
    }
  );
  onMounted(() => {
    nextTick(() => {
      initColumns();
      on(
        window,
        "resize",
        throttle(() => initColumns(), 400)
      );
    });
  });
  onBeforeUnmount(() => off(window, "resize", () => initColumns()));
  return {
    initColumns,
    bpTable,
    table_width,
    columns
  };
};
const _hoisted_1$b = ["name"];
const __default__$4 = defineComponent({
  name: "TableColumns"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    // TODO
    cols: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("colgroup", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (item, index) => {
          return openBlock(), createElementBlock("col", {
            key: `bp-table-tr-${index}`,
            name: `bp_table_tr_${index}`,
            style: normalizeStyle(`width:${item.width}px;min-width:${item.width}px;max-width:${item.width}px`)
          }, null, 12, _hoisted_1$b);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$a = { class: "bp-table-header-thead" };
const __default__$3 = defineComponent({
  name: "TableHeader"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    // TODO
    headerList: { type: Array, default: () => [] }
  },
  setup(__props) {
    const thClass = (item) => {
      let align = `text-${item["headerAlign"] || item["align"] || "left"}`;
      let name = ["bp-table-th", align];
      return name;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$h, { cols: __props.headerList }, null, 8, ["cols"]),
        createElementVNode("thead", _hoisted_1$a, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headerList, (item, index) => {
              return openBlock(), createElementBlock("th", {
                key: `bp-table-thead-${index}`,
                class: normalizeClass(thClass(item))
              }, toDisplayString(item.title), 3);
            }), 128))
          ])
        ])
      ], 64);
    };
  }
});
const TableBody = /* @__PURE__ */ defineComponent({
  name: "TableBody",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {
    slots
  }) {
    var _a;
    const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
    const bodyRender = () => {
      return createVNode("tbody", {
        "class": "bp-table-body-tbody"
      }, [props.data.map((record, rowIndex) => {
        return createVNode("tr", null, [children.map((child, childIndex) => {
          const {
            dataIndex = childIndex
          } = child == null ? void 0 : child.props;
          const column = Object.assign({}, child);
          column.props = mergeProps(child.props, {
            record,
            rowIndex
          });
          return createVNode(Fragment, {
            "key": `bp-table-column-${rowIndex}-${dataIndex}`
          }, [column]);
        })]);
      })]);
    };
    return bodyRender;
  }
});
const _hoisted_1$9 = { class: "bp-table-body-tbody" };
const _hoisted_2$8 = { class: "bp-table-empty-tr" };
const _hoisted_3$7 = ["colspan"];
const _hoisted_4$6 = /* @__PURE__ */ createElementVNode("div", { class: "bp-table-empty-tr-inner" }, [
  /* @__PURE__ */ createElementVNode("i", { class: "ri-inbox-2-line" }),
  /* @__PURE__ */ createElementVNode("span", null, "暂无数据")
], -1);
const _hoisted_5$4 = [
  _hoisted_4$6
];
const __default__$2 = defineComponent({
  name: "TableEmpty"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    colspan: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tbody", _hoisted_1$9, [
        createElementVNode("tr", _hoisted_2$8, [
          createElementVNode("td", { colspan: __props.colspan }, _hoisted_5$4, 8, _hoisted_3$7)
        ])
      ]);
    };
  }
});
const _sfc_main$e = defineComponent({
  name: "Spin",
  props: {
    /** 是否开启加载 Loading or not */
    loading: { type: Boolean, default: false },
    /** 加载提示文字 The loading tip text */
    tip: { type: String, default: "" }
  },
  setup(props, { slots }) {
    const name = "bp-spin";
    return {
      name,
      slots
    };
  }
});
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode("i", { class: "bp-icon-loading ri-loader-4-line" }, null, -1);
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("i", { class: "bp-icon-loading ri-loader-4-line" }, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.name)
  }, [
    renderSlot(_ctx.$slots, "default"),
    _ctx.slots.default && _ctx.loading ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.name}-mask`)
    }, [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.name}-loading`)
      }, [
        _hoisted_1$8,
        createElementVNode("p", {
          class: normalizeClass(`${_ctx.name}-tip`)
        }, toDisplayString(_ctx.tip), 3)
      ], 2)
    ], 2)) : _ctx.loading ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.name}-loading`)
    }, _hoisted_3$6, 2)) : createCommentVNode("", true)
  ], 2);
}
const _spin = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$c]]);
_spin.name = getComponentsPrefix() + _spin.name;
const Spin = Object.assign(_spin, {
  install: (app) => {
    app.component(_spin.name, _spin);
  }
});
const _sfc_main$d = defineComponent({
  name: "Table",
  components: { TableHeader: _sfc_main$g, TableEmpty: _sfc_main$f, TableBody, bpSpin: Spin },
  props: {
    /* 表格头部列表 Table header list */
    cols: { type: Array, default: () => [] },
    /* 表格数据 Table data source */
    data: { type: Array, default: () => [] },
    /* 固定高度 Fixed height */
    height: { type: String, default: "" },
    /* 加载状态 loading or not */
    loading: { type: Boolean, default: false },
    /* 展示边框 Bordered or not */
    border: { type: Boolean, default: false },
    /* 斑马纹 Stripe or not */
    stripe: { type: Boolean, default: false }
  },
  setup(props, { slots }) {
    const { bpTable, columns, table_width } = useTable(props, slots);
    const isEmpty = computed(() => props.data.length === 0);
    const hasBorder = computed(() => props.border);
    const isStripe = computed(() => props.stripe);
    const fixedHeight = computed(() => props.height);
    const bodyAreaStyle = computed(() => {
      if (props.height) {
        return `width:${table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`;
      }
      return `width:${table_width.value}px`;
    });
    const innerClass = computed(() => {
      let name = [
        "bp-table-inner",
        { "bp-table-border": hasBorder.value },
        { "bp-table-stripe": isStripe.value },
        { "bp-table-fixed-header": fixedHeight.value }
      ];
      return name;
    });
    const tdClass = (v) => {
      let align = `text-${v["align"] || "left"}`;
      let name = ["bp-table-td", align];
      return name;
    };
    return {
      slots,
      bpTable,
      columns,
      table_width,
      isEmpty,
      bodyAreaStyle,
      innerClass,
      tdClass
    };
  }
});
const _hoisted_1$7 = {
  class: "bp-table",
  ref: "bpTable"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("div", { class: "scrollbar" }, null, -1);
const _hoisted_3$5 = {
  key: 2,
  class: "bp-table-body-tbody"
};
const _hoisted_4$5 = { class: "bp-table-td-content" };
const _hoisted_5$3 = { key: 0 };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_header = resolveComponent("table-header");
  const _component_table_empty = resolveComponent("table-empty");
  const _component_table_body = resolveComponent("table-body");
  const _component_bp_spin = resolveComponent("bp-spin");
  return openBlock(), createBlock(_component_bp_spin, { loading: _ctx.loading }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$7, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.innerClass)
        }, [
          createElementVNode("div", {
            class: "bp-table-body-area",
            style: normalizeStyle(_ctx.bodyAreaStyle)
          }, [
            _hoisted_2$6,
            createElementVNode("table", {
              class: "bp-table-body",
              style: normalizeStyle(`width:${_ctx.table_width}px`)
            }, [
              createVNode(_component_table_header, { "header-list": _ctx.columns }, null, 8, ["header-list"]),
              _ctx.isEmpty ? (openBlock(), createBlock(_component_table_empty, {
                key: 0,
                colspan: _ctx.columns.length
              }, null, 8, ["colspan"])) : !_ctx.isEmpty && _ctx.slots.columns ? (openBlock(), createBlock(_component_table_body, {
                key: 1,
                data: _ctx.data
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "columns")
                ]),
                _: 3
              }, 8, ["data"])) : (openBlock(), createElementBlock("tbody", _hoisted_3$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
                  return openBlock(), createElementBlock("tr", {
                    key: `bp-table-tbody-tr-${index}`
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (v, k) => {
                      return openBlock(), createElementBlock("td", {
                        key: `bp-table-tbody-td-${index}-${k}`,
                        class: normalizeClass(_ctx.tdClass(v))
                      }, [
                        createElementVNode("span", _hoisted_4$5, [
                          !v.scope ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(item[v.dataIndex]), 1)) : renderSlot(_ctx.$slots, v.scope.customRender, {
                            key: 1,
                            row: item,
                            index,
                            data: item[v.dataIndex]
                          })
                        ])
                      ], 2);
                    }), 128))
                  ]);
                }), 128))
              ]))
            ], 4)
          ], 4)
        ], 2)
      ], 512)
    ]),
    _: 3
  }, 8, ["loading"]);
}
const _table = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b]]);
const _sfc_main$c = defineComponent({
  name: "TableColumn",
  props: {
    /** 列标题 */
    title: { type: String },
    /** 行记录 */
    record: { type: Object, default: () => {
    } },
    /** 列标识字段 */
    dataIndex: { type: String },
    /** 行下标 */
    rowIndex: { type: Number },
    /** 列宽度 */
    width: { type: [Number, String] },
    /** 最小列宽 */
    minWidth: { type: [Number, String] },
    /** 对齐方式 */
    align: { type: String, default: "left" },
    /** 是否开启文本省略 */
    ellipsis: { type: Boolean, default: false },
    /** 是否开启文本气泡提示 */
    tooltip: { type: Boolean, default: false }
  },
  setup(props, { slots }) {
    const hasCustomCell = computed(() => !!(slots == null ? void 0 : slots.cell));
    const tdClass = computed(() => {
      let align = `text-${props.align || "left"}`;
      return ["bp-table-td", align];
    });
    return {
      hasCustomCell,
      tdClass
    };
  }
});
const _hoisted_1$6 = { class: "bp-table-td-content" };
const _hoisted_2$5 = { class: "text-ellipsis" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_tooltip = resolveComponent("bp-tooltip");
  return openBlock(), createElementBlock("td", {
    class: normalizeClass(_ctx.tdClass)
  }, [
    createElementVNode("span", _hoisted_1$6, [
      !_ctx.hasCustomCell ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.tooltip ? (openBlock(), createBlock(_component_bp_tooltip, {
          key: 0,
          content: _ctx.record[_ctx.dataIndex]
        }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_2$5, toDisplayString(_ctx.record[_ctx.dataIndex]), 1)
          ]),
          _: 1
        }, 8, ["content"])) : !_ctx.tooltip ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass([{ "text-ellipsis": _ctx.ellipsis }])
        }, toDisplayString(_ctx.record[_ctx.dataIndex]), 3)) : createCommentVNode("", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        _ctx.tooltip ? (openBlock(), createBlock(_component_bp_tooltip, {
          key: 0,
          content: _ctx.record[_ctx.dataIndex]
        }, {
          default: withCtx(() => [
            createElementVNode("span", {
              class: normalizeClass([{ "text-ellipsis": _ctx.ellipsis }])
            }, [
              renderSlot(_ctx.$slots, "cell", {
                record: _ctx.record,
                rowIndex: _ctx.rowIndex
              })
            ], 2)
          ]),
          _: 3
        }, 8, ["content"])) : renderSlot(_ctx.$slots, "cell", {
          key: 1,
          record: _ctx.record,
          rowIndex: _ctx.rowIndex
        })
      ], 64))
    ])
  ], 2);
}
const _tableColumn = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a]]);
_table.name = getComponentsPrefix() + _table.name;
_tableColumn.name = getComponentsPrefix() + _tableColumn.name;
const Table = Object.assign(_table, {
  install: (app) => {
    app.component(_table.name, _table);
    app.component(_tableColumn.name, _tableColumn);
  }
});
const _space = /* @__PURE__ */ defineComponent({
  name: "Space",
  props: {
    /** 间距大小 */
    size: {
      type: [Number, String],
      default: "normal"
    },
    /** 布局类型 */
    type: {
      type: String,
      default: "horizontal"
    },
    /** 水平对齐方式 */
    justify: {
      type: String,
      default: "flex-start"
    },
    /** 垂直对齐方式 */
    align: {
      type: String,
      default: "flex-start"
    }
  },
  setup(props, {
    slots
  }) {
    const typeMap = {
      mini: 4,
      small: 8,
      normal: 10,
      large: 24
    };
    const size = isString(props.size) ? typeMap[props.size] : props.size;
    const render2 = () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
      return createVNode("div", {
        "class": ["bp-space", `bp-space-${props.type}`],
        "style": `justify-content:${props.justify};align-items:${props.align}`
      }, [children.map((child, index) => {
        var _a2;
        const hasSplit = slots.split && index > 0;
        return createVNode(Fragment, {
          "key": child.key ?? `item-${index}`
        }, [hasSplit && createVNode("div", {
          "class": "bp-space-item",
          "style": props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`
        }, [(_a2 = slots.split) == null ? void 0 : _a2.call(slots)]), createVNode("div", {
          "class": "bp-space-item",
          "style": props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`
        }, [child])]);
      })]);
    };
    return render2;
  }
});
_space.name = getComponentsPrefix() + _space.name;
const Space = Object.assign(_space, {
  install: (app) => {
    app.component(_space.name, _space);
  }
});
const _sfc_main$b = defineComponent({
  name: "Alert",
  props: {
    type: { type: String, default: "info" },
    title: { type: String, default: "" },
    closeable: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const name = "bp-alert";
    const cls = computed(() => {
      return [name, `${name}-${props.type}`, props.title ? `${name}-with-title` : ""];
    });
    const isRender = ref(true);
    const handleClose = () => {
      isRender.value = false;
      emit("close");
    };
    return {
      name,
      cls,
      isRender,
      handleClose,
      slots
    };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "ri-information-fill"
};
const _hoisted_2$4 = {
  key: 1,
  class: "ri-checkbox-circle-fill"
};
const _hoisted_3$4 = {
  key: 2,
  class: "ri-error-warning-fill"
};
const _hoisted_4$4 = {
  key: 3,
  class: "ri-close-circle-fill"
};
const _hoisted_5$2 = ["textContent"];
const _hoisted_6$1 = {
  key: 0,
  class: "ri-close-line"
};
const _hoisted_7 = { key: 1 };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isRender ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.cls)
  }, [
    createElementVNode("div", {
      class: normalizeClass(`${_ctx.name}-icon`)
    }, [
      _ctx.type === "info" ? (openBlock(), createElementBlock("i", _hoisted_1$5)) : createCommentVNode("", true),
      _ctx.type === "success" ? (openBlock(), createElementBlock("i", _hoisted_2$4)) : createCommentVNode("", true),
      _ctx.type === "warning" ? (openBlock(), createElementBlock("i", _hoisted_3$4)) : createCommentVNode("", true),
      _ctx.type === "error" ? (openBlock(), createElementBlock("i", _hoisted_4$4)) : createCommentVNode("", true)
    ], 2),
    createElementVNode("div", {
      class: normalizeClass(`${_ctx.name}-body`)
    }, [
      _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.name}-title`)
      }, [
        createElementVNode("span", {
          textContent: toDisplayString(_ctx.title)
        }, null, 8, _hoisted_5$2)
      ], 2)) : createCommentVNode("", true),
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.name}-content`)
      }, [
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2)
    ], 2),
    createElementVNode("div", {
      class: normalizeClass(`${_ctx.name}-option`)
    }, [
      _ctx.closeable ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.name}-close-inner`),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
      }, [
        !_ctx.slots.close ? (openBlock(), createElementBlock("i", _hoisted_6$1)) : (openBlock(), createElementBlock("span", _hoisted_7, [
          renderSlot(_ctx.$slots, "close")
        ]))
      ], 2)) : createCommentVNode("", true)
    ], 2)
  ], 2)) : createCommentVNode("", true);
}
const _alert = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9]]);
_alert.name = getComponentsPrefix() + _alert.name;
const Alert = Object.assign(_alert, {
  install: (app) => {
    app.component(_alert.name, _alert);
  }
});
const _sfc_main$a = defineComponent({
  name: "Tag",
  props: {
    status: { type: String, default: "normal" },
    dot: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false }
  },
  setup(props) {
    const name = "bp-tag";
    const cls = computed(() => {
      return [name, props.dot ? `${name}-dot-box` : `${name}-${props.status}`];
    });
    const visible = ref(true);
    const handleClose = () => {
      if (!props.closeable)
        return;
      visible.value = false;
    };
    return {
      name,
      cls,
      visible,
      handleClose
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.dot ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([`${_ctx.name}-dot`, `${_ctx.name}-dot-${_ctx.status}`])
    }, null, 2)) : createCommentVNode("", true),
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.name}-inner`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closeable ? (openBlock(), createElementBlock("i", {
      key: 1,
      class: "ri-close-line",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
    })) : createCommentVNode("", true)
  ], 2)) : createCommentVNode("", true);
}
const _tag = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8]]);
_tag.name = getComponentsPrefix() + _tag.name;
const Tag = Object.assign(_tag, {
  install: (app) => {
    app.component(_tag.name, _tag);
  }
});
const _sfc_main$9 = defineComponent({
  name: "Modal",
  props: {
    /** 对话框显示状态 */
    modelValue: { type: Boolean, default: false },
    /** 对话框标题 */
    title: { type: String, default: "标题" },
    /** 标题对齐方式 */
    titleAlign: { type: String, default: "left" },
    /** 对话框宽度 */
    width: { type: String, default: "600px" },
    /** 对话框宽度 */
    top: { type: String, default: "20vh" },
    /** 是否隐藏底部区域 */
    hideFooter: { type: Boolean, default: false },
    /** 是否隐藏关闭图标 */
    hideClose: { type: Boolean, default: false },
    /** 是否展示边框 */
    border: { type: Boolean, default: false },
    /** 点击遮罩是否关闭 */
    maskClosable: { type: Boolean, default: true },
    /** 确认按钮是否处于加载状态 */
    okLoading: { type: Boolean, default: false },
    /** 确定按钮内容 */
    okText: { type: String, default: "确认" },
    /** 取消按钮内容 */
    cancleText: { type: String, default: "取消" },
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true }
  },
  emits: ["update:modelValue", "ok", "cancle"],
  setup(props, { emit, slots }) {
    const name = "bp-modal";
    const containerVisable = ref(false);
    const cls = computed(() => {
      let cls2 = [name];
      if (props.border) {
        cls2.push(`${name}-border`);
      }
      cls2.push(`${name}-title-${props.titleAlign}`);
      return cls2;
    });
    const handleMaskClick = () => {
      if (!props.maskClosable)
        return;
      handleCancle();
    };
    const handleCancle = () => {
      emit("cancle");
      emit("update:modelValue", false);
    };
    const confirmLoading = ref(false);
    const handleOk = async () => {
      try {
        confirmLoading.value = true;
        const res = await props.onBeforeOk();
        if (!res)
          return;
        emit("ok");
        emit("update:modelValue", false);
      } catch (error) {
        console.log("[ Modal -onBeforeOk error]", error);
      } finally {
        confirmLoading.value = false;
      }
    };
    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          containerVisable.value = true;
          return;
        }
        setTimeout(() => {
          containerVisable.value = false;
        }, 200);
      }
    );
    return {
      name,
      cls,
      confirmLoading,
      containerVisable,
      handleMaskClick,
      handleCancle,
      handleOk,
      slots
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_button = resolveComponent("bp-button");
  const _component_bp_space = resolveComponent("bp-space");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    withDirectives(createElementVNode("div", {
      class: normalizeClass(`${_ctx.name}-container`)
    }, [
      createVNode(Transition, { name: "fade-modal-mask" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(`${_ctx.name}-mask`)
          }, null, 2), [
            [vShow, _ctx.modelValue]
          ])
        ]),
        _: 1
      }),
      createVNode(Transition, { name: "modal-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(`${_ctx.name}-wrapper`),
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"]))
          }, [
            createElementVNode("div", {
              class: normalizeClass(_ctx.cls),
              style: normalizeStyle(`width:${_ctx.width};top:${_ctx.top}`)
            }, [
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.name}-header`)
              }, [
                createElementVNode("p", {
                  class: normalizeClass(`${_ctx.name}-header-title`)
                }, toDisplayString(_ctx.title), 3),
                !_ctx.hideClose ? (openBlock(), createElementBlock("i", {
                  key: 0,
                  class: normalizeClass([`${_ctx.name}-header-close`, "ri-close-line"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancle && _ctx.handleCancle(...args))
                }, null, 2)) : createCommentVNode("", true)
              ], 2),
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.name}-body`)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              !_ctx.hideFooter ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(`${_ctx.name}-footer`)
              }, [
                !_ctx.slots.footer ? (openBlock(), createBlock(_component_bp_space, {
                  key: 0,
                  justify: "flex-end",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_bp_button, {
                      type: "plain",
                      onClick: _ctx.handleCancle
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancleText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_bp_button, {
                      onClick: _ctx.handleOk,
                      loading: _ctx.confirmLoading || _ctx.okLoading,
                      type: "primary",
                      status: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.okText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ], 6)
          ], 2), [
            [vShow, _ctx.modelValue]
          ])
        ]),
        _: 3
      })
    ], 2), [
      [vShow, _ctx.containerVisable]
    ])
  ]);
}
const _modal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7]]);
_modal.name = getComponentsPrefix() + _modal.name;
const Modal = Object.assign(_modal, {
  install: (app) => {
    app.component(_modal.name, _modal);
  }
});
const _sfc_main$8 = defineComponent({
  name: "Col",
  props: {
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: { type: [String, Number], default: 24 },
    /** 偏移量 Number of offset*/
    offset: { type: [String, Number], default: "" },
    // <768px 响应式栅格数或者栅格属性对象
    xs: { type: [Object, Number] },
    // ≥768px 响应式栅格数或者栅格属性对象
    sm: { type: [Object, Number] },
    // ≥992px 响应式栅格数或者栅格属性对象
    md: { type: [Object, Number] },
    // ≥1200px 响应式栅格数或者栅格属性对象
    lg: { type: [Object, Number] },
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: { type: [Object, Number] }
  },
  setup(props) {
    const name = "col";
    const cls = computed(() => {
      let className = [`bp-${name}`];
      Number(props.span) !== 0 ? className.push(`bp-${name}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`bp-${name}-offset-${props.offset}`) : "";
      const responsive = ["xs", "sm", "md", "lg", "xl"];
      for (let i = 0; i < responsive.length; i++) {
        const item = responsive[i];
        if (!props[item])
          continue;
        if (typeof props[item] === "number") {
          className.push(`bp-${name}-${item}-${props[item]}`);
          continue;
        }
        if (!isNull(props[item])) {
          props[item].span && className.push(`bp-${name}-${item}-${props[item].span}`);
          props[item].offset && className.push(`bp-${name}-${item}-offset-${props[item].offset}`);
        }
      }
      return className;
    });
    return {
      name,
      cls
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const _col = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6]]);
const _sfc_main$7 = defineComponent({
  name: "Row",
  props: {
    /** 栏位间隔 Field spacing */
    gutter: { type: [String, Number], default: "" },
    /** 水平对齐方式 Horizontal alignment */
    justify: { type: String, default: "start" },
    /** 垂直对齐方式 Vertical alignment */
    align: { type: String, default: "start" }
  },
  setup(props, { slots }) {
    const rowRef = ref();
    const name = "row";
    const cls = computed(() => {
      return [`bp-${name}`, `bp-justify-${props.justify}`, `bp-align-${props.align}`];
    });
    const setGutter = (els) => {
      const childrenEls = rowRef.value.children;
      els.forEach((item, index) => {
        const isCol = item.type === _col;
        if (isCol) {
          const el = childrenEls[index];
          index !== 0 && (el.style.paddingLeft = `${props.gutter}px`);
          index !== childrenEls.length - 1 && (el.style.paddingRight = `${props.gutter}px`);
          return;
        }
        if (item.type.toString() === "Symbol(Fragment)") {
          setGutter(item.children);
        }
      });
    };
    onMounted(() => {
      nextTick(() => setGutter(slots.default()));
    });
    return {
      rowRef,
      name,
      cls
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    ref: "rowRef"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const _grid = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5]]);
_grid.name = getComponentsPrefix() + _grid.name;
_col.name = getComponentsPrefix() + _col.name;
const Grid = Object.assign(_grid, {
  Col: _col,
  install: (app) => {
    app.component(_grid.name, _grid);
    app.component(_col.name, _col);
  }
});
const _sfc_main$6 = defineComponent({
  name: "Link",
  props: {
    /** 链接地址 */
    href: { type: String, default: "javascript:;" },
    /** 链接状态 */
    status: { type: String, default: "primary" },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 是否加载状态 */
    loading: { type: Boolean, default: false },
    /** 跳转链接方式 */
    target: { type: String, default: "_self" }
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const name = "bp-link";
    const clsName = computed(() => {
      let cls = [name, `${name}-status-${props.status}`];
      if (props.disabled || props.loading)
        cls.push(`${name}-disabled`);
      return cls;
    });
    const handleClick = (e) => {
      if (props.disabled)
        return;
      emit("click", e);
    };
    return {
      name,
      clsName,
      handleClick
    };
  }
});
const _hoisted_1$4 = ["disabled", "href", "target"];
const _hoisted_2$3 = {
  key: 0,
  class: "left-icon"
};
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("i", { class: "bp-icon-loading ri-loader-4-line" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_3$3
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.clsName),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("a", {
      disabled: _ctx.disabled,
      class: normalizeClass(`${_ctx.name}-inner`),
      href: _ctx.href,
      target: _ctx.target
    }, [
      _ctx.loading ? (openBlock(), createElementBlock("span", _hoisted_2$3, _hoisted_4$3)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_1$4)
  ], 2);
}
const _link = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4]]);
_link.name = getComponentsPrefix() + _link.name;
const BpLink = Object.assign(_link, {
  install: (app) => {
    app.component(_link.name, _link);
  }
});
const _sfc_main$5 = defineComponent({
  name: "Popconfirm",
  props: {
    /**确认框文本内容 */
    content: { type: String, default: "" },
    /** 类型 */
    type: { type: String, default: "info" },
    /** 弹出位置 */
    position: { type: String, default: "top" },
    /** 确认按钮文本 */
    okText: { type: String, default: "确认" },
    /** 取消按钮文本 */
    cancleText: { type: String, default: "取消" },
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true }
  },
  directives: { clickOutside: vClickOutside },
  emits: ["ok", "cancle"],
  setup(props, { emit }) {
    const name = "bp-popconfirm";
    const show = ref(false);
    const slotRef = ref();
    const innerRef = ref();
    const handleClick = () => {
      handleResize();
      show.value = true;
    };
    const handleResize = () => {
      var _a;
      const slotRect = (_a = slotRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!slotRect)
        return;
      const position = {
        top: `top:${slotRect.top - 10 + document.documentElement.scrollTop}px;left:${slotRect.left + slotRect.width / 2}px;transform: translateX(-50%) translateY(-100%);`,
        bottom: `top:${slotRect.top + slotRect.height + 10 + document.documentElement.scrollTop}px;left:${slotRect.left + slotRect.width / 2}px;transform: translateX(-50%);`,
        left: `top:${slotRect.top + slotRect.height / 2 + document.documentElement.scrollTop}px;left:${slotRect.left - 10}px;transform: translateX(-100%) translateY(-50%);`,
        right: `top:${slotRect.top + slotRect.height / 2 + document.documentElement.scrollTop}px;right:${slotRect.right}px;transform: translateX(-100%) translateY(-50%);`
      };
      innerRef.value && innerRef.value.setAttribute("style", `${position[props.position]};display:${show.value ? "block" : "none"}`);
    };
    const handleCancle = () => {
      show.value = false;
      emit("cancle");
    };
    const okLoading = ref(false);
    const handleOk = async () => {
      try {
        okLoading.value = true;
        const res = await props.onBeforeOk();
        if (!res)
          return;
        show.value = false;
        emit("ok");
      } catch (error) {
        console.log("[ Popconfirm -onBeforeOk error]", error);
      } finally {
        okLoading.value = false;
      }
    };
    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize, 100));
      });
    });
    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });
    return {
      name,
      show,
      slotRef,
      innerRef,
      okLoading,
      handleClick,
      handleCancle,
      handleOk
    };
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "ri-checkbox-circle-fill"
};
const _hoisted_2$2 = {
  key: 1,
  class: "ri-close-circle-fill"
};
const _hoisted_3$2 = {
  key: 2,
  class: "ri-error-warning-fill"
};
const _hoisted_4$2 = {
  key: 3,
  class: "ri-information-fill"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_button = resolveComponent("bp-button");
  const _component_bp_space = resolveComponent("bp-space");
  const _directive_clickOutside = resolveDirective("clickOutside");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.name)
  }, [
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        name: "fade-select",
        appear: ""
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            ref: "innerRef",
            class: normalizeClass(`${_ctx.name}-inner`)
          }, [
            createElementVNode("div", {
              class: normalizeClass(`${_ctx.name}-inner-content`)
            }, [
              createElementVNode("span", {
                class: normalizeClass(`${_ctx.name}-icon`)
              }, [
                _ctx.type === "success" ? (openBlock(), createElementBlock("i", _hoisted_1$3)) : createCommentVNode("", true),
                _ctx.type === "danger" ? (openBlock(), createElementBlock("i", _hoisted_2$2)) : createCommentVNode("", true),
                _ctx.type === "warning" ? (openBlock(), createElementBlock("i", _hoisted_3$2)) : createCommentVNode("", true),
                _ctx.type === "info" ? (openBlock(), createElementBlock("i", _hoisted_4$2)) : createCommentVNode("", true)
              ], 2),
              createElementVNode("span", {
                class: normalizeClass(`${_ctx.name}-text`)
              }, toDisplayString(_ctx.content), 3)
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(`${_ctx.name}-inner-footer`)
            }, [
              createVNode(_component_bp_space, {
                size: "mini",
                justify: "flex-end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_bp_button, {
                    onClick: _ctx.handleCancle,
                    size: "mini"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.cancleText), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_bp_button, {
                    onClick: _ctx.handleOk,
                    loading: _ctx.okLoading,
                    size: "mini",
                    type: "primary",
                    status: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.okText), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                _: 1
              })
            ], 2)
          ], 2)), [
            [vShow, _ctx.show],
            [_directive_clickOutside, _ctx.handleCancle]
          ])
        ]),
        _: 1
      })
    ])),
    createElementVNode("div", {
      ref: "slotRef",
      class: normalizeClass(`${_ctx.name}-slot`),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const _popconfirm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
_popconfirm.name = getComponentsPrefix() + _popconfirm.name;
const Popconfirm = Object.assign(_popconfirm, {
  install: (app) => {
    app.component(_popconfirm.name, _popconfirm);
  }
});
const _sfc_main$4 = defineComponent({
  name: "Image",
  props: {
    /** 图片资源地址 */
    src: { type: String, default: "" },
    /** 图片适应类型 */
    fit: { type: String, default: "fill" },
    /** 文字描述 */
    alt: { type: String, default: "" },
    /** 标题 */
    title: { type: String, default: "" },
    /** 图片宽度 */
    width: { type: [String, Number] },
    /** 图片高度 */
    height: { type: [String, Number] }
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const name = "bp-image";
    const imageRef = ref();
    const loadStatus = ref("loading");
    const isLoading = computed(() => loadStatus.value === "loading");
    const isError = computed(() => loadStatus.value === "error");
    const imgStyle = computed(() => ({
      width: `${props.width}px`,
      height: `${props.height}px`
    }));
    const fitStyle = computed(() => {
      if (props.fit) {
        return { objectFit: props.fit };
      }
      return {};
    });
    const onLoad = () => {
      loadStatus.value = "load";
      emit("load");
    };
    const onError = () => {
      loadStatus.value = "error";
      emit("error");
    };
    watchEffect(() => {
      if (!props.src || !imageRef.value)
        return;
      imageRef.value.src = props.src;
    });
    return {
      name,
      imageRef,
      loadStatus,
      onLoad,
      onError,
      imgStyle,
      fitStyle,
      isLoading,
      isError
    };
  }
});
const _hoisted_1$2 = ["alt", "title"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("span", null, "加载中", -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("i", { class: "ri-image-2-line" }, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.name),
    style: normalizeStyle(_ctx.imgStyle)
  }, [
    createElementVNode("img", {
      ref: "imageRef",
      alt: _ctx.alt,
      title: _ctx.title,
      style: normalizeStyle({ ..._ctx.imgStyle, ..._ctx.fitStyle }),
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoad && _ctx.onLoad(...args)),
      onError: _cache[1] || (_cache[1] = (...args) => _ctx.onError && _ctx.onError(...args))
    }, null, 44, _hoisted_1$2),
    _ctx.isLoading ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.name}-loading`)
      }, _hoisted_3$1, 2)
    ]) : createCommentVNode("", true),
    !_ctx.isLoading && _ctx.isError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.name}-error`)
      }, _hoisted_5$1, 2)
    ]) : createCommentVNode("", true)
  ], 6);
}
const _image = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
_image.name = getComponentsPrefix() + _image.name;
const Image = Object.assign(_image, {
  install: (app) => {
    app.component(_image.name, _image);
  }
});
const useScroll = () => {
  const pageLocation = ref(0);
  function stop() {
    let scrollTop = window.scrollY;
    pageLocation.value = scrollTop;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollTop + "px";
  }
  function move() {
    document.body.style.position = "static";
    window.scrollTo(0, pageLocation.value);
  }
  return {
    pageLocation,
    stop,
    move
  };
};
const _sfc_main$3 = defineComponent({
  name: "Drawer",
  props: {
    modelValue: { type: Boolean, default: false },
    /** 抽屉标题 */
    title: { type: String, default: "标题" },
    /** 标题对齐方式 */
    titleAlign: { type: String, default: "left" },
    /** 抽屉宽度 */
    width: { type: String, default: "360px" },
    /** 是否隐藏底部区域 */
    hideFooter: { type: Boolean, default: false },
    /** 是否隐藏关闭图标 */
    hideClose: { type: Boolean, default: false },
    /** 是否展示边框 */
    border: { type: Boolean, default: false },
    /** 点击遮罩是否关闭 */
    maskClosable: { type: Boolean, default: true },
    /** 确认按钮是否处于加载状态 */
    okLoading: { type: Boolean, default: false },
    /** 确定按钮内容 */
    okText: { type: String, default: "确认" },
    /** 取消按钮内容 */
    cancleText: { type: String, default: "取消" },
    /** 触发确定前的回调，返回 false 则中断 */
    onBeforeOk: { type: Function, default: () => true }
  },
  emits: ["update:modelValue", "ok", "cancle"],
  setup(props, { emit, slots }) {
    const name = "bp-drawer";
    const containerVisable = ref(false);
    const cls = computed(() => {
      let cls2 = [name];
      if (props.border) {
        cls2.push(`${name}-border`);
      }
      cls2.push(`${name}-title-${props.titleAlign}`);
      return cls2;
    });
    const handleMaskClick = () => {
      if (!props.maskClosable)
        return;
      handleCancle();
    };
    const handleCancle = () => {
      emit("cancle");
      emit("update:modelValue", false);
    };
    const confirmLoading = ref(false);
    const handleOk = async () => {
      try {
        confirmLoading.value = true;
        const res = await props.onBeforeOk();
        if (!res)
          return;
        emit("ok");
        emit("update:modelValue", false);
      } catch (error) {
        console.log("[ Drawer -onBeforeOk error]", error);
      } finally {
        confirmLoading.value = false;
      }
    };
    const { move, stop } = useScroll();
    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          containerVisable.value = true;
          stop();
          return;
        }
        setTimeout(() => {
          containerVisable.value = false;
          move();
        }, 200);
      }
    );
    return {
      name,
      cls,
      confirmLoading,
      containerVisable,
      handleMaskClick,
      handleCancle,
      handleOk,
      slots
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_button = resolveComponent("bp-button");
  const _component_bp_space = resolveComponent("bp-space");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    withDirectives(createElementVNode("div", {
      class: normalizeClass(`${_ctx.name}-container`)
    }, [
      createVNode(Transition, { name: "fade-modal-mask" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(`${_ctx.name}-mask`)
          }, null, 2), [
            [vShow, _ctx.modelValue]
          ])
        ]),
        _: 1
      }),
      createVNode(Transition, { name: "drawer-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(`${_ctx.name}-wrapper`),
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"]))
          }, [
            createElementVNode("div", {
              class: normalizeClass(_ctx.cls),
              style: normalizeStyle(`width:${_ctx.width};`)
            }, [
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.name}-header`)
              }, [
                createElementVNode("p", {
                  class: normalizeClass(`${_ctx.name}-header-title`)
                }, toDisplayString(_ctx.title), 3),
                !_ctx.hideClose ? (openBlock(), createElementBlock("i", {
                  key: 0,
                  class: normalizeClass([`${_ctx.name}-header-close`, "ri-close-line"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancle && _ctx.handleCancle(...args))
                }, null, 2)) : createCommentVNode("", true)
              ], 2),
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.name}-body`)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              !_ctx.hideFooter ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(`${_ctx.name}-footer`)
              }, [
                !_ctx.slots.footer ? (openBlock(), createBlock(_component_bp_space, {
                  key: 0,
                  justify: "flex-end",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_bp_button, {
                      type: "plain",
                      onClick: _ctx.handleCancle
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancleText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_bp_button, {
                      onClick: _ctx.handleOk,
                      loading: _ctx.confirmLoading || _ctx.okLoading,
                      type: "primary",
                      status: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.okText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ], 6)
          ], 2), [
            [vShow, _ctx.modelValue]
          ])
        ]),
        _: 3
      })
    ], 2), [
      [vShow, _ctx.containerVisable]
    ])
  ]);
}
const _drawer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
_drawer.name = getComponentsPrefix() + _drawer.name;
const Drawer = Object.assign(_drawer, {
  install: (app) => {
    app.component(_drawer.name, _drawer);
  }
});
const _sfc_main$2 = defineComponent({
  name: "Tooltip",
  props: {
    /** 文本提示内容 */
    content: { type: String, default: "" },
    /** 触发方式 */
    trigger: { type: String, default: "hover" }
  },
  directives: { clickOutside: vClickOutside },
  setup(props, { slots }) {
    const name = "bp-tooltip";
    const containerRef = ref();
    const slotRef = ref();
    const show = ref(false);
    const visible = ref(false);
    const handleResize = () => {
      var _a;
      const slotRect = (_a = slotRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!slotRect)
        return;
      const top = slotRect.top - 10 + document.documentElement.scrollTop;
      containerRef.value && containerRef.value.setAttribute(
        "style",
        `top:${top}px;left:${slotRect.left + slotRect.width / 2}px;transform: translateX(-50%) translateY(-100%);display:${visible.value ? "block" : "none"}`
      );
    };
    const handleClick = () => {
      if (props.trigger === "hover")
        return;
      show.value ? closeTool() : openTool();
    };
    const mouseenter = () => {
      if (props.trigger === "click")
        return;
      openTool();
    };
    const mouseleave = () => {
      if (props.trigger === "click")
        return;
      closeTool();
    };
    const openTool = () => {
      show.value = true;
      setTimeout(() => {
        handleResize();
        visible.value = true;
      }, 0);
    };
    const closeTool = () => {
      if (!visible.value)
        return;
      visible.value = false;
      nextTick(() => {
        show.value = false;
      });
    };
    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize, 100));
      });
    });
    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });
    return {
      name,
      slotRef,
      containerRef,
      show,
      visible,
      slots,
      mouseenter,
      mouseleave,
      openTool,
      closeTool,
      handleClick
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("div", { class: "triangle" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickOutside = resolveDirective("clickOutside");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.show ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: "body"
    }, [
      createVNode(Transition, { name: "tooltip-fade" }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            ref: "containerRef",
            class: normalizeClass(`${_ctx.name}-container`)
          }, [
            createElementVNode("div", {
              class: normalizeClass(`${_ctx.name}-content`)
            }, [
              !_ctx.slots.content ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.content), 1)
              ], 64)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "content")
            ], 2),
            _hoisted_1$1
          ], 2)), [
            [vShow, _ctx.visible],
            [_directive_clickOutside, _ctx.trigger === "click" && _ctx.closeTool]
          ])
        ]),
        _: 3
      })
    ])) : createCommentVNode("", true),
    createElementVNode("div", {
      ref: "slotRef",
      class: normalizeClass(`${_ctx.name}-inner`),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
      onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseenter && _ctx.mouseenter(...args)),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseleave && _ctx.mouseleave(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 34)
  ], 64);
}
const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
tooltip.name = getComponentsPrefix() + tooltip.name;
const Tooltip = Object.assign(tooltip, {
  install: (app) => {
    app.component(tooltip.name, tooltip);
  }
});
var MessageType = /* @__PURE__ */ ((MessageType2) => {
  MessageType2["Text"] = "text";
  MessageType2["Success"] = "success";
  MessageType2["Warning"] = "warning";
  MessageType2["Error"] = "error";
  MessageType2["Loading"] = "loading";
  return MessageType2;
})(MessageType || {});
const _hoisted_1 = {
  key: 0,
  class: "ri-checkbox-circle-fill"
};
const _hoisted_2 = {
  key: 1,
  class: "ri-close-circle-fill"
};
const _hoisted_3 = {
  key: 2,
  class: "ri-error-warning-fill"
};
const _hoisted_4 = {
  key: 3,
  class: "ri-loader-4-line"
};
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "ri-close-line" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const __default__$1 = defineComponent({
  name: "MessageList"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    /** 消息ID Message id */
    id: { type: [String, Number], default: "" },
    /** 消息提示类型 Message prompt type */
    type: { type: String, default: MessageType.Text },
    /** 消息提示内容 Message prompt content */
    content: { type: String, default: "" },
    /** 延迟关闭时间 Delayed shutdown time */
    duration: { type: Number, default: 3e3 },
    /** 是否允许手动关闭 Closeable or not */
    closeable: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-message";
    const timer = ref(0);
    const init = () => {
      if (props.duration > 0 && props.type !== MessageType.Loading) {
        timer.value = window.setTimeout(handleClose, props.duration);
      }
    };
    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer.value);
        timer.value = 0;
      }
    };
    const handleClose = () => {
      emits("close", props.id);
    };
    onMounted(() => {
      nextTick(() => init());
    });
    onUnmounted(() => {
      clearTimer();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(name)
      }, [
        __props.type !== "text" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(`${name}-icon`)
        }, [
          __props.type === "success" ? (openBlock(), createElementBlock("i", _hoisted_1)) : createCommentVNode("", true),
          __props.type === "error" ? (openBlock(), createElementBlock("i", _hoisted_2)) : createCommentVNode("", true),
          __props.type === "warning" ? (openBlock(), createElementBlock("i", _hoisted_3)) : createCommentVNode("", true),
          __props.type === "loading" ? (openBlock(), createElementBlock("i", _hoisted_4)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createElementVNode("span", {
          class: normalizeClass(`${name}-content`)
        }, toDisplayString(__props.content), 3),
        __props.closeable ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(`${name}-close`),
          onClick: handleClose
        }, _hoisted_6, 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const __default__ = defineComponent({
  name: "MessageList"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    list: { type: Array, default: () => [] }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const onClose = (id) => emits("close", id);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroup, {
        class: "bp-message-list",
        name: "fademsg",
        tag: "ul"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (v) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: `${v.id}`,
              id: v.id,
              type: v.type,
              content: v.content,
              duration: v.duration,
              closeable: v.closeable,
              onClose
            }, null, 8, ["id", "type", "content", "duration", "closeable"]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
class MessageManager {
  constructor(appContext) {
    __publicField(this, "container");
    __publicField(this, "messageList");
    /**
     * 添加消息提示
     * @param {MessageConfig} config
     * @returns
     */
    __publicField(this, "add", (config) => {
      var _a;
      const id = config.id ?? `_bp_message_${Math.random().toString()}`;
      const message2 = reactive({ id, ...config });
      this.messageList.value.push(message2);
      const len = this.messageList.value.length;
      if (len > 1 && ((_a = this.messageList.value[len - 1]) == null ? void 0 : _a.duration) === message2.duration) {
        message2.duration = message2.duration ?? 3e3 + 200 * len;
      }
      return {
        close: () => this.remove(id)
      };
    });
    /**
     * 移除消息提示
     * @param {string | number} id 消息id
     */
    __publicField(this, "remove", (id) => {
      for (let i = 0; i < this.messageList.value.length; i++) {
        const { id: itemId } = this.messageList.value[i];
        if (id === itemId) {
          this.messageList.value.splice(i, 1);
          break;
        }
      }
    });
    __publicField(this, "clear", () => {
      this.messageList.value = [];
    });
    this.messageList = ref([]);
    const mask = document.createElement("div");
    mask.setAttribute("class", `bp-mask-message`);
    this.container = mask;
    const vm = createVNode(_sfc_main, {
      list: this.messageList.value,
      onClose: this.remove
    });
    if (appContext) {
      vm.appContext = appContext;
    }
    render(vm, this.container);
    document.body.appendChild(this.container);
  }
}
_sfc_main.name = getComponentsPrefix() + _sfc_main.name;
let msg = null;
const types = ["text", "success", "warning", "error", "loading"];
const message = types.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    if (isString(config)) {
      config = { content: config };
    }
    const _config = { type: value, ...config };
    if (!msg) {
      msg = new MessageManager(appContext);
    }
    return msg.add(_config);
  };
  return pre;
}, {});
const Message = Object.assign({
  ...message,
  install: (app) => {
    app.component(_sfc_main.name, _sfc_main);
  }
});
const components = {
  Button,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Switch,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Tag,
  Modal,
  Spin,
  Grid,
  Link: BpLink,
  Popconfirm,
  Image,
  Drawer,
  Tooltip,
  Message
};
const install = function(app) {
  for (const key of Object.keys(components)) {
    app.use(components[key]);
  }
};
const birdpaperUi = {
  install,
  Button,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Switch,
  Select,
  Pagination,
  Table,
  Space,
  Alert,
  Tag,
  Modal,
  Spin,
  Grid,
  Link: BpLink,
  Popconfirm,
  Image,
  Drawer,
  Tooltip,
  Message
};
export {
  Alert,
  Button,
  Checkbox,
  Drawer,
  Grid,
  Image,
  Input,
  BpLink as Link,
  Message,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Spin,
  Switch,
  Table,
  Tag,
  Textarea,
  Tooltip,
  birdpaperUi as default
};
//# sourceMappingURL=birdpaper-ui.mjs.map
