var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, computed, useSlots, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, Comment, createVNode, mergeProps, Fragment, ref, nextTick, toDisplayString, watch, resolveComponent, createBlock, createSlots, withCtx, renderList, h, reactive, provide, withModifiers, inject, watchEffect, createTextVNode, resolveDynamicComponent, toHandlerKey, onMounted, onBeforeUnmount, normalizeStyle, Teleport, withDirectives, Transition, vShow, resolveDirective, onUnmounted, TransitionGroup, render } from "vue";
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
const _hoisted_1$m = ["disabled"];
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
  ], 10, _hoisted_1$m);
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
const isElement = (vn) => {
  return Boolean(
    vn && vn.shapeFlag & 1
    /* ELEMENT */
  );
};
const isComponent = (vn, type4) => {
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
const _buttonGroup = /* @__PURE__ */ defineComponent({
  name: "ButtonGroup",
  props: {
    /** 按钮类型 Type of the button */
    type: {
      type: String,
      default: "normal"
    },
    /** 按钮尺寸 Size of the button */
    size: {
      type: String,
      default: "normal"
    },
    /** 按钮形状 Shape of the button */
    shape: {
      type: String,
      default: "square"
    },
    /** 按钮状态 Status of the button */
    status: {
      type: String,
      default: "normal"
    },
    /** 是否撑满父级 Block or not */
    block: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const name = "bp-button-group";
    const cls = computed(() => {
      let clsName = [name];
      !["plain", "dashed"].includes(props.type) && clsName.push(`${name}-type-${props.type}-status-${props.status}`);
      props.block && clsName.push(`${name}-block`);
      return clsName;
    });
    const render2 = () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
      return createVNode("div", {
        "class": cls.value
      }, [children.map((child, index) => {
        const btn = Object.assign({}, child);
        btn.props = mergeProps(child.props, {
          ...props
        });
        return createVNode(Fragment, {
          "key": child.key ?? `item-${index}`
        }, [btn]);
      })]);
    };
    return render2;
  }
});
_buttonGroup.name = getComponentsPrefix() + _buttonGroup.name;
const ButtonGroup = Object.assign(_buttonGroup, {
  install: (app) => {
    app.component(_buttonGroup.name, _buttonGroup);
  }
});
const _sfc_main$w = defineComponent({
  name: "Input",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: String, default: "" },
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
    const limitText = computed(() => {
      var _a;
      return `${(_a = props.modelValue) == null ? void 0 : _a.length}/${props.maxlength}`;
    });
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
      emit("input", targetValue);
      emit("update:modelValue", targetValue);
    };
    return {
      name,
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
const _hoisted_1$l = ["type", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$e = ["textContent"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
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
      cursor: (_a = _ctx.modelValue) == null ? void 0 : _a.length,
      placeholder: _ctx.placeholder,
      maxlength: _ctx.maxlength,
      value: _ctx.modelValue,
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onKeypress: _cache[2] || (_cache[2] = (...args) => _ctx.onKeypress && _ctx.onKeypress(...args)),
      onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.onKeyup && _ctx.onKeyup(...args)),
      onInput: _cache[4] || (_cache[4] = (...args) => _ctx.onInput && _ctx.onInput(...args))
    }, null, 40, _hoisted_1$l),
    _ctx.slots.suffix || _ctx.showClear || _ctx.showWordLimit || _ctx.type === "password" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.name}-suffix`)
    }, [
      !_ctx.slots.suffix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showClear ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "ri-close-line click-icon",
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        })) : createCommentVNode("", true),
        _ctx.showWordLimit ? (openBlock(), createElementBlock("span", {
          key: 1,
          textContent: toDisplayString(_ctx.limitText)
        }, null, 8, _hoisted_2$e)) : createCommentVNode("", true),
        _ctx.type === "password" ? (openBlock(), createElementBlock("i", {
          key: 2,
          onClick: _cache[6] || (_cache[6] = (...args) => _ctx.triggerPassword && _ctx.triggerPassword(...args)),
          class: normalizeClass(["click-icon", _ctx.showPassword ? "ri-eye-fill" : "ri-eye-close-fill"])
        }, null, 2)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "suffix")
    ], 2)) : createCommentVNode("", true)
  ], 2);
}
const BpInput = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$l]]);
BpInput.name = getComponentsPrefix() + BpInput.name;
const Input = Object.assign(BpInput, {
  install: (app) => {
    app.component(BpInput.name, BpInput);
  }
});
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
const _sfc_main$v = defineComponent({
  name: "InputNumber",
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [Number, String] },
    /** 输入框尺寸 Size of the input */
    size: { type: String, default: "normal" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 是否只读状态 Readonly or not */
    readonly: { type: Boolean, default: false },
    /** 是否警示状态 Danger or not */
    isDanger: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    /** 是否隐藏按钮 */
    hideButton: { type: Boolean, default: false },
    /** 数字精度 */
    precision: { type: Number },
    /** 数字变化步长 */
    step: { type: Number, default: 1 },
    /** 最小值 */
    min: { type: Number },
    /** 最大值 */
    max: { type: Number }
  },
  emits: ["update:modelValue", "input", "blur"],
  setup(props, { emit }) {
    const name = "bp-input-number";
    const inputRef = ref();
    const mergePrecision = computed(() => {
      var _a, _b;
      const stepPrecisioin = ((_b = (_a = props.step.toString()) == null ? void 0 : _a.split(".")[1]) == null ? void 0 : _b.length) || 0;
      if (!props.precision)
        return stepPrecisioin;
      return props.precision > stepPrecisioin ? props.precision : stepPrecisioin;
    });
    const isMin = computed(() => Number(global_value.value) === props.min);
    const isMax = computed(() => Number(global_value.value) === props.max);
    const handleStep = (type4) => {
      if (props.hideButton || !props.step)
        return;
      inputRef.value.handleFocus();
      var val = Number(global_value.value);
      if (type4 === "up" && !isMax.value) {
        val += props.step;
      }
      if (type4 === "down" && !isMin.value) {
        val -= props.step;
      }
      global_value.value = getValue2(val);
      updateValue();
    };
    const getValue2 = (val) => {
      if (!val || val === "")
        return "";
      return mergePrecision.value && mergePrecision.value >= 0 ? Number(val).toFixed(mergePrecision.value) : val.toString();
    };
    const global_value = ref(getValue2(props.modelValue) || "");
    const handleStatus = () => {
      let value = global_value.value;
      if (!isNull(props.min) && Number(value) < props.min) {
        return props.min.toString();
      }
      if (!isNull(props.max) && Number(value) > props.max) {
        return props.max.toString();
      }
      return value.toString();
    };
    const onInput = (value) => {
      if (value === "") {
        global_value.value = "";
        return updateValue();
      }
      value = value.trim().replace(/。/g, ".");
      if (Number(value) || /^(\.|-)$/.test(value)) {
        global_value.value = value;
        return updateValue();
      }
      global_value.value = value.replace(/^(\.?|-)$/g, "");
      global_value.value = value.replace(/[^\d.]/g, "");
      global_value.value = getValue2(parseFloat(global_value.value));
      return;
    };
    const onBlur = () => {
      global_value.value = getValue2(handleStatus());
      updateValue();
      emit("blur");
    };
    const updateValue = () => {
      emit("update:modelValue", parseFloat(global_value.value) || "");
      emit("input", parseFloat(global_value.value) || "");
    };
    updateValue();
    watch(
      () => props.modelValue,
      (value) => {
        global_value.value = getValue2(value || "");
      }
    );
    return {
      name,
      inputRef,
      global_value,
      isMax,
      isMin,
      handleStep,
      onInput,
      onBlur
    };
  }
});
const _hoisted_1$k = ["onClick"];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_input = resolveComponent("bp-input");
  return openBlock(), createBlock(_component_bp_input, {
    ref: "inputRef",
    modelValue: _ctx.global_value,
    class: normalizeClass(_ctx.name),
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    "is-danger": _ctx.isDanger,
    size: _ctx.size,
    onInput: _ctx.onInput,
    onBlur: _ctx.onBlur
  }, createSlots({ _: 2 }, [
    !_ctx.hideButton && !_ctx.disabled ? {
      name: "suffix",
      fn: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(`${_ctx.name}-step`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([
            { type: "up", disabled: _ctx.isMax },
            { type: "down", disabled: _ctx.isMin }
          ], (v) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass([{ disabled: v.disabled }, `${_ctx.name}-step-item`]),
              onClick: ($event) => _ctx.handleStep(v.type)
            }, [
              createElementVNode("i", {
                class: normalizeClass(`ri-arrow-${v.type}-s-line`)
              }, null, 2)
            ], 10, _hoisted_1$k);
          }), 256))
        ], 2)
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "class", "placeholder", "disabled", "readonly", "is-danger", "size", "onInput", "onBlur"]);
}
const _inputNumber = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$k]]);
_inputNumber.name = getComponentsPrefix() + _inputNumber.name;
const InputNumber = Object.assign(_inputNumber, {
  install: (app) => {
    app.component(_inputNumber.name, _inputNumber);
  }
});
const _sfc_main$u = defineComponent({
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
    showLimit: { type: Boolean, default: false },
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(props, { emit, slots }) {
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
    const limitText = computed(() => {
      var _a;
      return `${(_a = props.modelValue) == null ? void 0 : _a.length}/${props.maxlength}`;
    });
    const handleFocus = () => inpRef.value.focus();
    const showClear = computed(() => props.modelValue && props.clearable && !props.disabled && !props.readonly);
    const handleClear = () => {
      emit("update:modelValue", "");
      nextTick(() => handleFocus());
    };
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
      onInput,
      slots,
      showClear,
      handleClear
    };
  }
});
const _hoisted_1$j = ["rows", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$d = { class: "suffix" };
const _hoisted_3$9 = ["textContent"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
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
      cursor: (_a = _ctx.modelValue) == null ? void 0 : _a.length,
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
      !_ctx.slots.suffix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showClear ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "ri-close-line click-icon",
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        })) : createCommentVNode("", true),
        _ctx.showWordLimit ? (openBlock(), createElementBlock("span", {
          key: 1,
          textContent: toDisplayString(_ctx.limitText)
        }, null, 8, _hoisted_3$9)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "suffix")
    ])
  ], 2);
}
const _textarea = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$j]]);
_textarea.name = getComponentsPrefix() + _textarea.name;
const Textarea = Object.assign(_textarea, {
  install: (app) => {
    app.component(_textarea.name, _textarea);
  }
});
const _sfc_main$t = defineComponent({
  name: "Radio",
  props: {
    /** 单选框绑定值 */
    modelValue: { type: [String, Number, Boolean], default: false },
    /** 选项的值 */
    value: { type: [String, Number, Boolean], default: false },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 单选框类型 */
    type: { type: String, default: "radio" }
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
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass([_ctx.name, _ctx.disabled ? `${_ctx.name}-disabled` : ""]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
  }, [
    createElementVNode("input", {
      type: "radio",
      class: normalizeClass(`${_ctx.name}-inner`)
    }, null, 2),
    _ctx.type === "radio" ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([`${_ctx.name}-radio`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
    }, null, 2)) : createCommentVNode("", true),
    createElementVNode("span", {
      class: normalizeClass([`${_ctx.name}-label`, _ctx.isCheck ? `${_ctx.name}-check-label` : ""])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const _radio = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$i]]);
const _radioGroup = /* @__PURE__ */ defineComponent({
  name: "RadioGroup",
  props: {
    /** 单选框绑定值 */
    modelValue: {
      type: [String, Number]
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 单选框组类型 */
    type: {
      type: String,
      default: "radio"
    },
    /** 排列方向 */
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const name = "bp-radio-group";
    const updateValue = (v) => {
      emit("update:modelValue", v);
    };
    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.direction}`);
      props.type === "button" && clsName.push(`${name}-button`);
      return clsName;
    });
    const render2 = () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
      return createVNode("div", {
        "class": cls.value
      }, [children.map((child, index) => {
        const radio = Object.assign({}, child);
        radio.props = mergeProps(child.props, {
          ...props
        });
        return createVNode(Fragment, {
          "key": child.key ?? `item-${index}`
        }, [h(radio, {
          modelValue: props.modelValue,
          "onUpdate:modelValue"(e) {
            updateValue(e);
          }
        })]);
      })]);
    };
    return render2;
  }
});
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
    /** 开启时的值 */
    checkValue: { type: [Boolean, Number, String], default: true },
    /** 关闭时的值 */
    uncheckValue: { type: [Boolean, Number, String], default: false },
    /** 开启时的文本内容 */
    checkText: { type: String, default: "" },
    /** 关闭时的文本内容 */
    uncheckText: { type: String, default: "" },
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
      _ctx.checkText || _ctx.uncheckText ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(`${_ctx.name}-slider-inner`)
      }, toDisplayString(_ctx.isCheck ? _ctx.checkText : _ctx.uncheckText), 3)) : createCommentVNode("", true),
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
    /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const name = "bp-select";
    const inpRef = ref();
    const showClear = ref(false);
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
    const setValue = () => {
      currentSelect.value = props.modelValue;
      currentSelect.label = valueMap.value[currentSelect.value];
    };
    const handleMouseEnter = () => {
      if (!props.clearable)
        return;
      showClear.value = true;
    };
    const handleMouseLeave = () => {
      if (!props.clearable)
        return;
      showClear.value = false;
    };
    const hancleClear = () => {
      currentSelect.value = "";
      currentSelect.label = "";
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
    return {
      name,
      inpRef,
      currentSelect,
      isFocus,
      clsName,
      handleMouseEnter,
      handleMouseLeave,
      showClear,
      hancleClear
    };
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_input = resolveComponent("bp-input");
  const _component_bp_trigger = resolveComponent("bp-trigger");
  return openBlock(), createBlock(_component_bp_trigger, {
    "popup-visible": _ctx.isFocus,
    "onUpdate:popupVisible": _cache[2] || (_cache[2] = ($event) => _ctx.isFocus = $event),
    transition: "fade-dropdown",
    class: normalizeClass(_ctx.clsName),
    disabled: _ctx.disabled,
    "popup-offset": 10,
    "auto-fit-width": ""
  }, {
    content: withCtx(() => [
      createElementVNode("ul", {
        class: normalizeClass(`${_ctx.name}-option-list`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ]),
    default: withCtx(() => [
      createVNode(_component_bp_input, {
        ref: "inpRef",
        disabled: _ctx.disabled,
        modelValue: _ctx.currentSelect.label,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.currentSelect.label = $event),
        readonly: "",
        placeholder: _ctx.placeholder,
        onMouseenter: _ctx.handleMouseEnter,
        onMouseleave: _ctx.handleMouseLeave
      }, {
        suffix: withCtx(() => [
          !_ctx.disabled && _ctx.showClear && _ctx.currentSelect.label ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: "ri-close-line click-icon",
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.hancleClear && _ctx.hancleClear(...args), ["stop"]))
          })) : (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass([`${_ctx.name}-icon-inner`, `ri-arrow-${_ctx.isFocus ? "up" : "down"}-s-line`])
          }, null, 2))
        ]),
        _: 1
      }, 8, ["disabled", "modelValue", "placeholder", "onMouseenter", "onMouseleave"])
    ]),
    _: 3
  }, 8, ["popup-visible", "class", "disabled"]);
}
const _select = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$f]]);
const _sfc_main$p = defineComponent({
  name: "Option",
  props: {
    /** 选项的值 */
    value: { type: [String, Number], default: "" },
    /** 选项文本内容 */
    label: { type: String, default: "" },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false }
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
      if (props.disabled)
        cls.push(`${name}-disabled`);
      return cls;
    });
    const handleClick = () => {
      var _a;
      if (props.disabled)
        return;
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
    const val = ref();
    const text = reactive({ prefix: "", suffix: "" });
    const handleBlur = () => {
      let num = val.value ?? 1;
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
      const _component_bp_input_number = resolveComponent("bp-input-number");
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([`${name}-item`, `${name}-jumper`])
      }, [
        text.prefix ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(text.prefix), 1)) : createCommentVNode("", true),
        createVNode(_component_bp_input_number, {
          min: 1,
          precision: 0,
          "hide-button": "",
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
  const setPage = (type4, pageNum) => {
    let num = currentPage.value;
    type4 === "prev" ? num-- : type4 === "next" ? num++ : num = pageNum ?? 1;
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
      const { width } = cols[i];
      const minWidth = cols[i]["minWidth"] || cols[i]["min-width"];
      if (width) {
        _fixed_width += Number(width);
        _remainder_col--;
      }
      minWidth && _min_width_list.push(Number(minWidth));
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
const _hoisted_1$b = ["name", "width"];
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
            width: item.width
          }, null, 8, _hoisted_1$b);
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
    return {
      name,
      show,
      okLoading,
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
  const _component_bp_trigger = resolveComponent("bp-trigger");
  return openBlock(), createBlock(_component_bp_trigger, {
    "popup-visible": _ctx.show,
    "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => _ctx.show = $event),
    class: normalizeClass(_ctx.name),
    "popup-offset": 10,
    position: _ctx.position
  }, {
    content: withCtx(() => [
      createElementVNode("div", {
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
      ], 2)
    ]),
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.name}-slot`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 8, ["popup-visible", "class", "position"]);
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
    document.body.style.overflow = "hidden";
  }
  function move() {
    document.body.style.overflow = "auto";
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
class PositionInfo {
  constructor() {
    __publicField(this, "top", 0);
    __publicField(this, "left", 0);
    __publicField(this, "width");
  }
}
const getPositionData = (el, position, wrapperSize, popupOffset, autoFitWidth) => {
  const rect = el && (el == null ? void 0 : el.getBoundingClientRect());
  if (!rect)
    return new PositionInfo();
  const { top, left, width, height } = rect;
  const scrollTop = document.documentElement.scrollTop || 0;
  const wrapperWidth = autoFitWidth ? width : wrapperSize.width;
  let positionData = new PositionInfo();
  switch (position) {
    case "top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height,
        left: left + width / 2 - wrapperWidth / 2
      };
      break;
    case "bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset,
        left: left + width / 2 - wrapperWidth / 2
      };
      break;
    case "left":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2,
        left: left - popupOffset - wrapperWidth
      };
      break;
    case "right":
      positionData = {
        top: top + height / 2 + scrollTop - wrapperSize.height / 2,
        left: left + width + popupOffset
      };
      break;
    case "left-top":
      positionData = {
        top: top + scrollTop - popupOffset - wrapperSize.height,
        left: left - wrapperWidth
      };
      break;
    case "left-bottom":
      positionData = {
        top: top + height + scrollTop + popupOffset,
        left: left - wrapperWidth
      };
      break;
    case "right-top":
      positionData = {
        top: top + scrollTop - wrapperSize.height,
        left: left + width + popupOffset
      };
      break;
    case "right-bottom":
      positionData = {
        top: top + scrollTop + height,
        left: left + width + popupOffset
      };
      break;
  }
  positionData.width = width;
  return positionData;
};
const getWrapperSize = (el) => {
  el.setAttribute("style", `display:block;opacity:0;visibility: hidden;`);
  const { width, height } = el && (el == null ? void 0 : el.getBoundingClientRect());
  el.setAttribute("style", `display:none`);
  return { width, height };
};
const getWrapperPositionStyle = (top, left, visible, width) => {
  let innerStyleStr = `top:${top}px;left:${left}px;display:${visible ? "block" : "none"};`;
  width && (innerStyleStr += `width:${width}px`);
  return innerStyleStr;
};
const _trigger = /* @__PURE__ */ defineComponent({
  name: "Trigger",
  directives: {
    clickOutside: vClickOutside
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: false
    },
    /** 触发方式 */
    trigger: {
      type: String,
      default: "click"
    },
    /** 弹出位置 */
    position: {
      type: String,
      default: "bottom"
    },
    /** 距离弹出位置的偏移量 */
    popupOffset: {
      type: Number,
      default: 10
    },
    /** 弹出层是否填充触发器宽度 */
    autoFitWidth: {
      type: Boolean,
      default: false
    },
    /** 过渡动画名称 */
    transition: {
      type: String,
      default: "fade"
    },
    /** 点击其他元素关闭触发器 */
    clickOutside: {
      type: Boolean,
      default: true
    },
    /** 是否禁用 Disabled or not */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:popupVisible"],
  setup(props, {
    emit,
    slots
  }) {
    const name = "bp-trigger";
    const triggerRef = ref();
    const wrapperRef = ref();
    const visible = ref(props.popupVisible || false);
    const clickOutsideLock = ref(true);
    const handleClick = () => {
      if (props.trigger === "hover" || props.disabled)
        return;
      handleResize();
      updateVisible(!visible.value);
    };
    const handleMouseEnter = () => {
      if (props.trigger === "click")
        return;
      handleResize();
      updateVisible(true);
    };
    const handleMouseLeave = () => {
      if (props.trigger === "click")
        return;
      updateVisible(false);
    };
    const handleResize = () => {
      if (!triggerRef.value)
        return;
      const wrapperSize = getWrapperSize(wrapperRef.value);
      const {
        top,
        left,
        width
      } = getPositionData(triggerRef.value.children[0], props.position, {
        ...wrapperSize
      }, props.popupOffset, props.autoFitWidth);
      const styleStr = getWrapperPositionStyle(top, left, visible.value, props.autoFitWidth ? width : null);
      wrapperRef.value.setAttribute("style", styleStr);
    };
    const onClickOutside = () => {
      if (!props.clickOutside)
        return;
      !clickOutsideLock.value && updateVisible(false);
    };
    const updateVisible = (val, delay = 100) => {
      visible.value = val;
      emit("update:popupVisible", visible.value);
      nextTick(() => {
        setTimeout(() => {
          if (props.trigger === "click") {
            clickOutsideLock.value = !visible.value;
          }
        }, delay);
      });
    };
    onMounted(() => {
      nextTick(() => {
        on(window, "resize", handleResize);
      });
    });
    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });
    watch(() => props.popupVisible, (v) => {
      visible.value = v;
      clickOutsideLock.value = visible.value;
    });
    const render2 = () => {
      var _a;
      const children = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      return createVNode("div", {
        "class": name,
        "ref": triggerRef
      }, [h(children[0], {
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(Transition, {
          "name": props.transition,
          "appear": true
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", {
              "ref": wrapperRef,
              "class": `${name}-wrapper`,
              "onMouseenter": handleMouseEnter,
              "onMouseleave": handleMouseLeave
            }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), [[vShow, visible.value], [resolveDirective("clickOutside"), onClickOutside]])];
          }
        })]
      })]);
    };
    return render2;
  }
});
_trigger.name = getComponentsPrefix() + _trigger.name;
const Trigger = Object.assign(_trigger, {
  install: (app) => {
    app.component(_trigger.name, _trigger);
  }
});
const FormInjectionKey = Symbol("FormCtxKey");
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production" && typeof window !== "undefined" && typeof document !== "undefined") {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types$1 = {
  integer: function integer(value) {
    return types$1.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types$1.number(value) && !types$1.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types$1.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types$1[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
const getValidateInfo = (formRules, slots) => {
  var _a;
  const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter(
    (item) => item.type !== Comment && item.type.name === "BpFormItem"
  );
  let rules2 = formRules ?? {};
  for (let i = 0; i < children.length; i++) {
    const { field = null, rules: formItemRules } = children[i].props ?? {};
    if (field && formItemRules) {
      rules2[field] = formItemRules;
    }
  }
  return rules2;
};
const _form = /* @__PURE__ */ defineComponent({
  name: "Form",
  props: {
    model: {
      type: Object,
      default: () => {
      }
    },
    rules: {
      type: Object
    },
    layout: {
      type: String,
      default: "horizontal"
    }
    // labelStyle: { type: [Object, String], default: "" },
    // wrapperStyle: { type: [Object, String], default: "" },
  },
  setup(props, {
    slots,
    expose
  }) {
    const name = "bp-form";
    provide(FormInjectionKey, {
      model: props.model,
      layout: props.layout
    });
    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.layout}`);
      return clsName;
    });
    const formRef = ref();
    const formItemRef = ref({});
    const validate = async (callback) => {
      return new Promise((resove) => {
        const rules2 = getValidateInfo(props.rules, slots);
        const validator = new Schema(rules2 || {});
        const defaultCallback = (errors) => {
          if (errors) {
            for (let i = 0; i < errors.length; i++) {
              const {
                field,
                message: message2
              } = errors[i];
              formItemRef.value[field].handleError(message2);
              console.warn(`BpForm validate - [ ${field} ]`, message2);
            }
            resove(errors);
          }
          resove(void 0);
        };
        validator.validate(props.model, callback || defaultCallback);
      });
    };
    const resetFields = () => {
      for (const key in formItemRef.value) {
        formItemRef.value[key].resetFields();
      }
    };
    const clearValidate = () => {
    };
    const render2 = () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment && item.type.name === "BpFormItem");
      return createVNode("form", {
        "ref": formRef,
        "class": cls.value
      }, [children.map((child, index) => {
        const FormItem = Object.assign({}, child);
        return createVNode(Fragment, {
          "key": child.key ?? `item-${index}`
        }, [h(FormItem, {
          ref: (el) => {
            var _a2, _b;
            ((_a2 = child.props) == null ? void 0 : _a2.field) && (formItemRef.value[(_b = child.props) == null ? void 0 : _b.field] = el);
          }
        })]);
      })]);
    };
    expose({
      validate,
      clearValidate,
      resetFields
    });
    return render2;
  }
});
const _formItem = /* @__PURE__ */ defineComponent({
  name: "FormItem",
  props: {
    label: {
      type: String
    },
    field: {
      type: String
    },
    rules: {
      type: Array,
      default: () => []
    },
    labelStyle: {
      type: [Object, String],
      default: ""
    },
    wrapperStyle: {
      type: [Object, String],
      default: ""
    }
  },
  setup(props, {
    slots,
    expose
  }) {
    const name = "bp-form-item";
    const messageVisible = ref(false);
    const ctx = ref();
    const message2 = ref("");
    ctx.value = inject(FormInjectionKey, null);
    const formItemCls = computed(() => {
      let clsName = [name];
      if (messageVisible.value)
        clsName.push(`${name}-has-message`);
      return clsName;
    });
    const wrapperCls = computed(() => {
      let clsName = [`${name}-wrapper`];
      return clsName;
    });
    const isRequire = computed(() => {
      return props.rules.some((item) => {
        return item.required;
      });
    });
    const handleError = (msg2) => {
      message2.value = msg2;
      messageVisible.value = true;
    };
    const clearError = () => {
      if (!messageVisible.value)
        return;
      messageVisible.value = false;
      message2.value = "";
    };
    const resetFields = () => {
      ctx.value.model[props.field] = "";
      clearError();
    };
    watch(() => ctx.value.model[props.field], () => {
      messageVisible.value && clearError();
    });
    const render2 = () => {
      var _a;
      return createVNode("div", {
        "class": formItemCls.value
      }, [withDirectives(createVNode("div", {
        "class": `${name}-label`,
        "style": props.labelStyle
      }, [isRequire.value ? createVNode("span", {
        "class": "label-asterisk"
      }, null) : "", createVNode("label", null, [props.label])]), [[vShow, props.label || ctx.value.layout !== "inline"]]), createVNode("div", {
        "class": wrapperCls.value,
        "style": props.wrapperStyle
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), messageVisible.value ? createVNode(Transition, {
        "name": "form-error",
        "appear": true
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": `${name}-message`
        }, [message2.value]), [[vShow, messageVisible.value]])]
      }) : null])]);
    };
    expose({
      handleError,
      clearError,
      resetFields
    });
    return render2;
  }
});
_form.name = getComponentsPrefix() + _form.name;
_formItem.name = getComponentsPrefix() + _formItem.name;
const Form = Object.assign(_form, {
  install: (app) => {
    app.component(_form.name, _form);
    app.component(_formItem.name, _formItem);
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
  ButtonGroup,
  Input,
  InputNumber,
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
  Trigger,
  Form,
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
  ButtonGroup,
  Input,
  InputNumber,
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
  Trigger,
  Form,
  Message
};
export {
  Alert,
  Button,
  ButtonGroup,
  Checkbox,
  Drawer,
  Form,
  Grid,
  Image,
  Input,
  InputNumber,
  BpLink as Link,
  Message,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Radio as RadioGroup,
  Select,
  Space,
  Spin,
  Switch,
  Table,
  Tag,
  Textarea,
  Tooltip,
  Trigger,
  birdpaperUi as default
};
//# sourceMappingURL=birdpaper-ui.mjs.map
