(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("async-validator")) : typeof define === "function" && define.amd ? define(["exports", "vue", "async-validator"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.BirdpaperUI = {}, global.Vue, global.Schema));
})(this, function(exports2, vue, Schema) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  const _sfc_main$C = vue.defineComponent({
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
      const isDisabled = vue.computed(() => props.disabled || props.loading);
      const btnClass = vue.computed(() => {
        let className = [
          name,
          `${name}-${props.shape}-${props.size}`,
          `${name}-type-${props.type}-status-${props.status}`,
          { "has-default-slot": !!vue.useSlots().default },
          { "is-block": props.block }
        ];
        return className;
      });
      const btnIcon = vue.computed(() => {
        return props.loading ? "ri-loader-4-line" : props.icon;
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
  const _hoisted_1$o = ["disabled"];
  const _hoisted_2$d = {
    key: 0,
    class: "left-icon"
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(_ctx.btnClass),
      type: "button",
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      _ctx.btnIcon || _ctx.loading ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$d, [
        vue.createVNode(_component_bp_icon, {
          class: vue.normalizeClass({ "bp-icon-loading": _ctx.loading }),
          name: _ctx.btnIcon
        }, null, 8, ["class", "name"])
      ])) : vue.createCommentVNode("", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_1$o);
  }
  const _button = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$r]]);
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
  const isArray$1 = (obj) => {
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
      } else if (isArray$1(item)) {
        results.push(...getAllElements(item, includeText));
      }
    }
    return results;
  };
  const _buttonGroup = /* @__PURE__ */ vue.defineComponent({
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
      const cls = vue.computed(() => {
        let clsName = [name];
        !["plain", "dashed"].includes(props.type) && clsName.push(`${name}-type-${props.type}-status-${props.status}`);
        props.block && clsName.push(`${name}-block`);
        return clsName;
      });
      const render = () => {
        var _a;
        const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment);
        return vue.createVNode("div", {
          "class": cls.value
        }, [children.map((child, index) => {
          const btn = Object.assign({}, child);
          btn.props = vue.mergeProps(child.props, {
            ...props
          });
          return vue.createVNode(vue.Fragment, {
            "key": child.key ?? `item-${index}`
          }, [btn]);
        })]);
      };
      return render;
    }
  });
  _buttonGroup.name = getComponentsPrefix() + _buttonGroup.name;
  const ButtonGroup = Object.assign(_buttonGroup, {
    install: (app) => {
      app.component(_buttonGroup.name, _buttonGroup);
    }
  });
  const _sfc_main$B = vue.defineComponent({
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
      const inpRef = vue.ref();
      const inpType = vue.computed(() => isPasswordType.value ? "password" : "text");
      const inpClass = vue.computed(() => {
        const status = getStatus();
        return [name, `${name}-size-${props.size}`, `${name}-status-${status}`];
      });
      function getStatus() {
        return props.disabled && "disabled" || props.readonly && "readonly" || props.isDanger && "danger" || "normal";
      }
      const showClear = vue.computed(
        () => props.type === "text" && props.modelValue && props.clearable && !props.disabled && !props.readonly
      );
      const handleClear = () => {
        emit("update:modelValue", "");
        vue.nextTick(() => handleFocus());
      };
      const showWordLimit = vue.computed(() => {
        return props.maxlength && props.showLimit && props.type === "text";
      });
      const limitText = vue.computed(() => {
        var _a;
        return `${(_a = props.modelValue) == null ? void 0 : _a.length}/${props.maxlength}`;
      });
      const showPassword = vue.ref(false);
      const isPasswordType = vue.computed(() => props.type === "password" && !showPassword.value);
      const triggerPassword = () => {
        showPassword.value = !showPassword.value;
        vue.nextTick(() => handleFocus());
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
  const _hoisted_1$n = ["type", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
  const _hoisted_2$c = ["textContent"];
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.inpClass)
    }, [
      vue.createElementVNode("input", {
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
      }, null, 40, _hoisted_1$n),
      _ctx.slots.suffix || _ctx.showClear || _ctx.showWordLimit || _ctx.type === "password" ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(`${_ctx.name}-suffix`)
      }, [
        !_ctx.slots.suffix ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.showClear ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 0,
            class: "click-icon",
            name: "ri-close-line",
            onClick: _ctx.handleClear
          }, null, 8, ["onClick"])) : vue.createCommentVNode("", true),
          _ctx.showWordLimit ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            textContent: vue.toDisplayString(_ctx.limitText)
          }, null, 8, _hoisted_2$c)) : vue.createCommentVNode("", true),
          _ctx.type === "password" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 2,
            onClick: _ctx.triggerPassword,
            class: "click-icon",
            name: _ctx.showPassword ? "ri-eye-fill" : "ri-eye-close-fill"
          }, null, 8, ["onClick", "name"])) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "suffix")
      ], 2)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const BpInput = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$q]]);
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
  const warn = (module2, info) => {
    console.warn(`[ A warning of birdpaper-ui ] - ${module2}: ` + info);
  };
  const isArray = (obj) => {
    return obj && typeof obj == "object" && obj instanceof Array;
  };
  function deepClone(tSource, tTarget) {
    if (isArray(tSource)) {
      tTarget = tTarget || [];
    } else {
      tTarget = tTarget || {};
    }
    for (const key in tSource) {
      if (Object.prototype.hasOwnProperty.call(tSource, key)) {
        if (typeof tSource[key] === "object" && typeof tSource[key] !== null) {
          tTarget[key] = isArray(tSource[key]) ? [] : {};
          deepClone(tSource[key], tTarget[key]);
        } else {
          tTarget[key] = tSource[key];
        }
      }
    }
    return tTarget;
  }
  function arrayIndexOf(arr, field, fieldValue) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element[field] === fieldValue)
        return i;
    }
    return -1;
  }
  const _sfc_main$A = vue.defineComponent({
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
      const inputRef = vue.ref();
      const mergePrecision = vue.computed(() => {
        var _a, _b;
        const stepPrecisioin = ((_b = (_a = props.step.toString()) == null ? void 0 : _a.split(".")[1]) == null ? void 0 : _b.length) || 0;
        if (!props.precision)
          return stepPrecisioin;
        return props.precision > stepPrecisioin ? props.precision : stepPrecisioin;
      });
      const isMin = vue.computed(() => Number(global_value.value) === props.min);
      const isMax = vue.computed(() => Number(global_value.value) === props.max);
      const handleStep = (type) => {
        if (props.hideButton || !props.step)
          return;
        inputRef.value.handleFocus();
        var val = Number(global_value.value);
        if (type === "up" && !isMax.value) {
          val += props.step;
        }
        if (type === "down" && !isMin.value) {
          val -= props.step;
        }
        global_value.value = getValue(val);
        updateValue();
      };
      const getValue = (val) => {
        if (!val || val === "")
          return "";
        return mergePrecision.value && mergePrecision.value >= 0 ? Number(val).toFixed(mergePrecision.value) : val.toString();
      };
      const global_value = vue.ref(getValue(props.modelValue) || "");
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
        global_value.value = getValue(parseFloat(global_value.value));
        return;
      };
      const onBlur = () => {
        global_value.value = getValue(handleStatus());
        updateValue();
        emit("blur");
      };
      const updateValue = () => {
        emit("update:modelValue", parseFloat(global_value.value) || "");
        emit("input", parseFloat(global_value.value) || "");
      };
      updateValue();
      vue.watch(
        () => props.modelValue,
        (value) => {
          global_value.value = getValue(value || "");
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
  const _hoisted_1$m = ["onClick"];
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    const _component_bp_input = vue.resolveComponent("bp-input");
    return vue.openBlock(), vue.createBlock(_component_bp_input, {
      ref: "inputRef",
      modelValue: _ctx.global_value,
      class: vue.normalizeClass(_ctx.name),
      placeholder: _ctx.placeholder,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      "is-danger": _ctx.isDanger,
      size: _ctx.size,
      onInput: _ctx.onInput,
      onBlur: _ctx.onBlur
    }, vue.createSlots({ _: 2 }, [
      !_ctx.hideButton && !_ctx.disabled ? {
        name: "suffix",
        fn: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(`${_ctx.name}-step`)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList([
              { type: "up", disabled: _ctx.isMax },
              { type: "down", disabled: _ctx.isMin }
            ], (v) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass([{ disabled: v.disabled }, `${_ctx.name}-step-item`]),
                onClick: ($event) => _ctx.handleStep(v.type)
              }, [
                vue.createVNode(_component_bp_icon, {
                  name: `ri-arrow-${v.type}-s-line`
                }, null, 8, ["name"])
              ], 10, _hoisted_1$m);
            }), 256))
          ], 2)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["modelValue", "class", "placeholder", "disabled", "readonly", "is-danger", "size", "onInput", "onBlur"]);
  }
  const _inputNumber = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$p]]);
  _inputNumber.name = getComponentsPrefix() + _inputNumber.name;
  const InputNumber = Object.assign(_inputNumber, {
    install: (app) => {
      app.component(_inputNumber.name, _inputNumber);
    }
  });
  const _sfc_main$z = vue.defineComponent({
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
      const inpRef = vue.ref();
      const inpClass = vue.computed(() => {
        const status = getStatus();
        return [name, `${name}-status-${status}`];
      });
      function getStatus() {
        return props.disabled && "disabled" || props.readonly && "readonly" || props.isDanger && "danger" || "normal";
      }
      const showWordLimit = vue.computed(() => {
        return props.maxlength && props.showLimit;
      });
      const limitText = vue.computed(() => {
        var _a;
        return `${(_a = props.modelValue) == null ? void 0 : _a.length}/${props.maxlength}`;
      });
      const handleFocus = () => inpRef.value.focus();
      const showClear = vue.computed(() => props.modelValue && props.clearable && !props.disabled && !props.readonly);
      const handleClear = () => {
        emit("update:modelValue", "");
        vue.nextTick(() => handleFocus());
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
  const _hoisted_1$l = ["rows", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
  const _hoisted_2$b = { class: "suffix" };
  const _hoisted_3$8 = ["textContent"];
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.inpClass)
    }, [
      vue.createElementVNode("textarea", {
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
      }, null, 40, _hoisted_1$l),
      vue.createElementVNode("div", _hoisted_2$b, [
        !_ctx.slots.suffix ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.showClear ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 0,
            class: "click-icon",
            name: "ri-close-line",
            onClick: _ctx.handleClear
          }, null, 8, ["onClick"])) : vue.createCommentVNode("", true),
          _ctx.showWordLimit ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            textContent: vue.toDisplayString(_ctx.limitText)
          }, null, 8, _hoisted_3$8)) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "suffix")
      ])
    ], 2);
  }
  const _textarea = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$o]]);
  _textarea.name = getComponentsPrefix() + _textarea.name;
  const Textarea = Object.assign(_textarea, {
    install: (app) => {
      app.component(_textarea.name, _textarea);
    }
  });
  const _sfc_main$y = vue.defineComponent({
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
        if (props.modelValue !== props.value) {
          emit("update:modelValue", props.value);
          emit("change", props.value);
        }
      };
      const isCheck = vue.computed(() => props.modelValue === props.value);
      return {
        name,
        handleInput,
        isCheck
      };
    }
  });
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass([_ctx.name, _ctx.disabled ? `${_ctx.name}-disabled` : ""]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
    }, [
      vue.createElementVNode("input", {
        type: "radio",
        class: vue.normalizeClass(`${_ctx.name}-inner`)
      }, null, 2),
      _ctx.type === "radio" ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass([`${_ctx.name}-radio`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
      }, null, 2)) : vue.createCommentVNode("", true),
      vue.createElementVNode("span", {
        class: vue.normalizeClass([`${_ctx.name}-label`, _ctx.isCheck ? `${_ctx.name}-check-label` : ""])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 2);
  }
  const _radio = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$n]]);
  const _radioGroup = /* @__PURE__ */ vue.defineComponent({
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
      const cls = vue.computed(() => {
        let clsName = [name];
        clsName.push(`${name}-${props.direction}`);
        props.type === "button" && clsName.push(`${name}-button`);
        return clsName;
      });
      const render = () => {
        var _a;
        const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment);
        return vue.createVNode("div", {
          "class": cls.value
        }, [children.map((child, index) => {
          const radio = Object.assign({}, child);
          radio.props = vue.mergeProps(child.props, {
            ...props
          });
          return vue.createVNode(vue.Fragment, {
            "key": child.key ?? `item-${index}`
          }, [vue.h(radio, {
            modelValue: props.modelValue,
            "onUpdate:modelValue"(e) {
              updateValue(e);
            }
          })]);
        })]);
      };
      return render;
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
  const _sfc_main$x = vue.defineComponent({
    name: "Checkbox",
    props: {
      /** 绑定值 Binding value */
      modelValue: { type: [Boolean, Array], default: false },
      /** 是否禁用 Disabled or not */
      disabled: { type: Boolean, default: false },
      /** 复选框的值 */
      value: { type: [String, Number] }
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const name = "bp-checkbox";
      const cls = vue.computed(() => {
        let clsName = [name];
        if (props.disabled) {
          clsName.push(`${name}-disabled`);
        }
        return clsName;
      });
      const isCheck = vue.computed(() => {
        if (Array.isArray(props.modelValue)) {
          if (!props.value)
            return false;
          return props.modelValue.includes(props.value);
        }
        return props.modelValue;
      });
      const handleClick = () => {
        if (Array.isArray(props.modelValue)) {
          if (!props.value)
            return false;
          let arr = JSON.parse(JSON.stringify(props.modelValue));
          const index = arr.indexOf(props.value);
          index === -1 ? arr.push(props.value) : arr.splice(index, 1);
          emit("update:modelValue", arr);
          return emit("change", arr);
        }
        emit("update:modelValue", !props.modelValue);
        return emit("change", !props.modelValue);
      };
      return {
        cls,
        name,
        isCheck,
        handleClick
      };
    }
  });
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.cls),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.createElementVNode("input", {
        type: "checkbox",
        class: vue.normalizeClass(`${_ctx.name}-inner`)
      }, null, 2),
      vue.createElementVNode("span", {
        class: vue.normalizeClass([`${_ctx.name}-checkbox`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
      }, [
        _ctx.isCheck ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
          key: 0,
          name: "ri-check-line"
        })) : vue.createCommentVNode("", true)
      ], 2),
      vue.createElementVNode("span", {
        class: vue.normalizeClass(`${_ctx.name}-label`)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 2);
  }
  const _checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$m]]);
  _checkbox.name = getComponentsPrefix() + _checkbox.name;
  const Checkbox = Object.assign(_checkbox, {
    install: (app) => {
      app.component(_checkbox.name, _checkbox);
    }
  });
  const _sfc_main$w = vue.defineComponent({
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
      const cls = vue.computed(() => {
        let clsName = [name];
        if (props.disabled) {
          clsName.push(`${name}-disabled`);
        }
        return clsName;
      });
      const isCheck = vue.computed(() => props.modelValue === props.checkValue);
      const loading = vue.ref(false);
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
  const _hoisted_1$k = {
    key: 0,
    class: "switch-icon-loading ri-loader-4-line"
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.cls),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.createElementVNode("input", {
        type: "checkbox",
        class: vue.normalizeClass(`${_ctx.name}-inner`)
      }, null, 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass([`${_ctx.name}-slider`, _ctx.isCheck ? `${_ctx.name}-check` : ""])
      }, [
        _ctx.checkText || _ctx.uncheckText ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(`${_ctx.name}-slider-inner`)
        }, vue.toDisplayString(_ctx.isCheck ? _ctx.checkText : _ctx.uncheckText), 3)) : vue.createCommentVNode("", true),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(`${_ctx.name}-slider-dot`)
        }, [
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_1$k)) : vue.createCommentVNode("", true)
        ], 2)
      ], 2)
    ], 2);
  }
  const _switch = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$l]]);
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
    const currentSelect = vue.reactive(new SelectOption());
    const isFocus = vue.ref(false);
    const valueMap = vue.computed(() => {
      var _a, _b, _c;
      try {
        let obj = {};
        const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment) ?? [];
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
  const _sfc_main$v = vue.defineComponent({
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
      const inpRef = vue.ref();
      const showClear = vue.ref(false);
      const { currentSelect, valueMap, isFocus } = useSelect(slots);
      vue.provide(selectInjectionKey, {
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
      const clsName = vue.computed(() => {
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
      vue.watch(
        () => valueMap.value,
        () => setValue(),
        {
          immediate: true,
          deep: true
        }
      );
      vue.watch(
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    const _component_bp_input = vue.resolveComponent("bp-input");
    const _component_bp_trigger = vue.resolveComponent("bp-trigger");
    return vue.openBlock(), vue.createBlock(_component_bp_trigger, {
      "popup-visible": _ctx.isFocus,
      "onUpdate:popupVisible": _cache[1] || (_cache[1] = ($event) => _ctx.isFocus = $event),
      transition: "fade-dropdown",
      class: vue.normalizeClass(_ctx.clsName),
      disabled: _ctx.disabled,
      "popup-offset": 10,
      "auto-fit-width": ""
    }, {
      content: vue.withCtx(() => [
        vue.createElementVNode("ul", {
          class: vue.normalizeClass(`${_ctx.name}-option-list`)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      default: vue.withCtx(() => [
        vue.createVNode(_component_bp_input, {
          ref: "inpRef",
          disabled: _ctx.disabled,
          modelValue: _ctx.currentSelect.label,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentSelect.label = $event),
          readonly: "",
          placeholder: _ctx.placeholder,
          onMouseenter: _ctx.handleMouseEnter,
          onMouseleave: _ctx.handleMouseLeave
        }, {
          suffix: vue.withCtx(() => [
            !_ctx.disabled && _ctx.showClear && _ctx.currentSelect.label ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
              key: 0,
              class: "click-icon",
              name: "ri-close-line",
              onClick: vue.withModifiers(_ctx.hancleClear, ["stop"])
            }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(_component_bp_icon, {
              key: 1,
              class: vue.normalizeClass(`${_ctx.name}-icon-inner`),
              name: `ri-arrow-${_ctx.isFocus ? "up" : "down"}-s-line`
            }, null, 8, ["class", "name"]))
          ]),
          _: 1
        }, 8, ["disabled", "modelValue", "placeholder", "onMouseenter", "onMouseleave"])
      ]),
      _: 3
    }, 8, ["popup-visible", "class", "disabled"]);
  }
  const _select = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$k]]);
  const _sfc_main$u = vue.defineComponent({
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
      const ctx = vue.ref();
      const slot = vue.useSlots();
      const option = vue.reactive(new SelectOption());
      const init = () => {
        var _a;
        ctx.value = vue.inject(selectInjectionKey, null);
        option.label = props.label || ((_a = slot.default) == null ? void 0 : _a.call(slot)[0].children);
        option.value = props.value;
      };
      const clsName = vue.computed(() => {
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
      vue.watch(
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
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("li", {
      class: vue.normalizeClass(_ctx.clsName),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      vue.createElementVNode("span", null, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 2);
  }
  const _option = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$j]]);
  _select.name = getComponentsPrefix() + _select.name;
  _option.name = getComponentsPrefix() + _option.name;
  const Select = Object.assign(_select, {
    install: (app) => {
      app.component(_select.name, _select);
      app.component(_option.name, _option);
    }
  });
  const _hoisted_1$j = ["textContent"];
  const __default__$a = vue.defineComponent({
    name: "PaginationPrev"
  });
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    ...__default__$a,
    props: {
      text: { type: String, default: "" },
      disabled: { type: Boolean, default: false }
    },
    emits: ["click"],
    setup(__props, { emit: emits }) {
      const props = __props;
      const name = "bp-pagination";
      const clsName = vue.computed(() => {
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
        const _component_bp_icon = vue.resolveComponent("bp-icon");
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass(clsName.value),
          onClick: handleClick
        }, [
          __props.text ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            textContent: vue.toDisplayString(__props.text)
          }, null, 8, _hoisted_1$j)) : (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 1,
            name: "ri-arrow-left-s-line"
          }))
        ], 2);
      };
    }
  });
  const _hoisted_1$i = ["textContent"];
  const __default__$9 = vue.defineComponent({
    name: "PaginationNext"
  });
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    ...__default__$9,
    props: {
      text: { type: String, default: "" },
      disabled: { type: Boolean, default: false }
    },
    emits: ["click"],
    setup(__props, { emit: emits }) {
      const props = __props;
      const name = "bp-pagination";
      const clsName = vue.computed(() => {
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
        const _component_bp_icon = vue.resolveComponent("bp-icon");
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass(clsName.value),
          onClick: handleClick
        }, [
          __props.text ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            textContent: vue.toDisplayString(__props.text)
          }, null, 8, _hoisted_1$i)) : (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 1,
            name: "ri-arrow-right-s-line"
          }))
        ], 2);
      };
    }
  });
  const _hoisted_1$h = ["textContent"];
  const __default__$8 = vue.defineComponent({
    name: "PaginationTotal"
  });
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    ...__default__$8,
    props: {
      value: { type: Number, default: 0 },
      tmpString: { type: String, default: "" }
    },
    setup(__props) {
      const props = __props;
      const name = "bp-pagination";
      const paramsStr = "{total}";
      const text = vue.ref("");
      vue.watchEffect(() => {
        text.value = props.tmpString.replace(paramsStr, props.value);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass([`${name}-item`, `${name}-total`])
        }, [
          vue.createElementVNode("span", {
            class: "page-text",
            textContent: vue.toDisplayString(text.value)
          }, null, 8, _hoisted_1$h)
        ], 2);
      };
    }
  });
  const _hoisted_1$g = ["onClick"];
  const _hoisted_2$a = { key: 0 };
  const _hoisted_3$7 = {
    key: 1,
    class: "ri-more-fill"
  };
  const __default__$7 = vue.defineComponent({
    name: "PaginationPager"
  });
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
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
      const pageList = vue.ref([]);
      const onClick = (pageNum) => {
        emits("click", pageNum);
      };
      vue.watchEffect(() => {
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
        return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(pageList.value, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("li", {
            key: `page-item-${index}`,
            class: vue.normalizeClass([`${name}-pager`, `${name}-item`, item.index === __props.currentPage ? `${name}-item-active` : ""]),
            onClick: ($event) => onClick(item.index)
          }, [
            item.type === "number" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$a, vue.toDisplayString(item.index), 1)) : (vue.openBlock(), vue.createElementBlock("i", _hoisted_3$7))
          ], 10, _hoisted_1$g);
        }), 128);
      };
    }
  });
  const _hoisted_1$f = {
    key: 0,
    class: "page-text"
  };
  const _hoisted_2$9 = {
    key: 1,
    class: "page-text"
  };
  const __default__$6 = vue.defineComponent({
    name: "PaginationJumper"
  });
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
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
      const val = vue.ref();
      const text = vue.reactive({ prefix: "", suffix: "" });
      const handleBlur = () => {
        let num = val.value ?? 1;
        num < 1 && (num = 1);
        num > props.pages && (num = props.pages);
        emits("change", num);
      };
      vue.watchEffect(() => {
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
        const _component_bp_input_number = vue.resolveComponent("bp-input-number");
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass([`${name}-item`, `${name}-jumper`])
        }, [
          text.prefix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$f, vue.toDisplayString(text.prefix), 1)) : vue.createCommentVNode("", true),
          vue.createVNode(_component_bp_input_number, {
            min: 1,
            precision: 0,
            "hide-button": "",
            modelValue: val.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => val.value = $event),
            size: "small",
            onBlur: handleBlur
          }, null, 8, ["modelValue"]),
          text.suffix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$9, vue.toDisplayString(text.suffix), 1)) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  const __default__$5 = vue.defineComponent({
    name: "PaginationSizes"
  });
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
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
      const val = vue.ref(props.currentSize || props.sizesList[0] || 10);
      const paramsStr = "{value}";
      const list = vue.ref([]);
      const onChange = (v) => {
        emits("change", v);
      };
      vue.watchEffect(() => {
        for (let i = 0; i < props.sizesList.length; i++) {
          const value = props.sizesList[i];
          const label = `${props.tmpString.replace(paramsStr, value)}`;
          list.value.push({ label, value });
        }
      });
      return (_ctx, _cache) => {
        const _component_bp_option = vue.resolveComponent("bp-option");
        const _component_bp_select = vue.resolveComponent("bp-select");
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass(`${name}-item ${name}-sizes`)
        }, [
          vue.createVNode(_component_bp_select, {
            modelValue: val.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => val.value = $event),
            style: { "width": "100px" },
            onChange
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(list.value, (v) => {
                return vue.openBlock(), vue.createBlock(_component_bp_option, {
                  value: v.value
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(v.label), 1)
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
    const layoutMap = { prev: _sfc_main$t, next: _sfc_main$s, total: _sfc_main$r, pager: _sfc_main$q, jumper: _sfc_main$p, sizes: _sfc_main$o };
    const currentPage = vue.ref(props.current || 1);
    const currentPageSize = vue.ref(props.pageSize);
    const totalPagesNum = vue.ref(0);
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
    vue.watchEffect(() => {
      totalPagesNum.value = Math.ceil(props.total / currentPageSize.value);
      if (currentPage.value > totalPagesNum.value) {
        setPage("page", totalPagesNum.value);
      }
    });
    const totalComponents = vue.computed(() => {
      return {
        bind: {
          value: props.total,
          tmpString: props.totalTmpString
        }
      };
    });
    const prevComponents = vue.computed(() => {
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
    const pagerComponents = vue.computed(() => {
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
    const jumperComponents = vue.computed(() => {
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
    const nextComponents = vue.computed(() => {
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
    const sizesComponents = vue.computed(() => {
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
    const componentsList = vue.computed(() => {
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
  const _sfc_main$n = vue.defineComponent({
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.name)
    }, [
      vue.createElementVNode("ul", {
        class: vue.normalizeClass(`${_ctx.name}-container`)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.componentsList, (item) => {
          return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.component), vue.mergeProps(item.bind, {
            [vue.toHandlerKey(item.eventName)]: item.event
          }), null, 16);
        }), 256))
      ], 2)
    ], 2);
  }
  const _pagination = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$i]]);
  _pagination.name = getComponentsPrefix() + _pagination.name;
  const Pagination = Object.assign(_pagination, {
    install: (app) => {
      app.component(_pagination.name, _pagination);
    }
  });
  const useTable = (props, slots, emit) => {
    const bpTable = vue.ref(null);
    const columns = vue.ref([]);
    const table_width = vue.ref();
    let _remainder_col = 0;
    let _fixed_width = 0;
    let _min_width_list = [];
    let _col_width_list = [];
    const _min_column_width = 80;
    const getColumnsBySlot = () => {
      var _a, _b, _c;
      if (!((_a = slots.columns) == null ? void 0 : _a.call(slots)))
        return;
      const children = getAllElements((_b = slots.columns) == null ? void 0 : _b.call(slots), true).filter((item) => item.type !== vue.Comment);
      if (children.length === 0)
        return;
      let arr = [];
      for (let i = 0; i < children.length; i++) {
        arr.push((_c = children[i]) == null ? void 0 : _c.props);
      }
      return arr;
    };
    let cols = [];
    const initColumns = () => {
      var _a, _b;
      const el = bpTable.value;
      cols = getColumnsBySlot() || props.cols;
      if (cols.length === 0 || cols.length > 99)
        return;
      _fixed_width = 0;
      _remainder_col = cols.length;
      _min_width_list = [];
      if (((_a = props.selection) == null ? void 0 : _a.type) && !((_b = cols[0]) == null ? void 0 : _b.type)) {
        cols.unshift({
          type: props.selection.type,
          width: 46,
          align: "center"
        });
        _remainder_col++;
      }
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
    vue.watch(
      () => props.cols,
      () => {
        initColumns();
      }
    );
    vue.onMounted(() => {
      vue.nextTick(() => {
        initColumns();
        on(
          window,
          "resize",
          throttle(() => initColumns(), 400)
        );
      });
    });
    vue.onBeforeUnmount(() => off(window, "resize", () => initColumns()));
    return {
      initColumns,
      bpTable,
      table_width,
      columns
    };
  };
  const _hoisted_1$e = ["name", "width"];
  const __default__$4 = vue.defineComponent({
    name: "TableColumns"
  });
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: {
      // TODO
      cols: { type: Array, default: () => [] }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("colgroup", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.cols, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("col", {
              key: `bp-table-tr-${index}`,
              name: `bp_table_tr_${index}`,
              width: item.width
            }, null, 8, _hoisted_1$e);
          }), 128))
        ]);
      };
    }
  });
  const _hoisted_1$d = { class: "bp-table-header-thead" };
  const __default__$3 = vue.defineComponent({
    name: "TableHeader"
  });
  const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: {
      headerList: { type: Array, default: () => [] }
    },
    emits: ["on-select-all"],
    setup(__props, { expose: __expose, emit: emits }) {
      const thClass = (item) => {
        let align = `text-${item["headerAlign"] || item["align"] || "left"}`;
        let name = ["bp-table-th", align];
        return name;
      };
      const isSelectAll = vue.ref(false);
      const onSelectChange = () => {
        emits("on-select-all", isSelectAll.value);
      };
      __expose({
        isSelectAll
      });
      return (_ctx, _cache) => {
        const _component_bp_checkbox = vue.resolveComponent("bp-checkbox");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(_sfc_main$m, { cols: __props.headerList }, null, 8, ["cols"]),
          vue.createElementVNode("thead", _hoisted_1$d, [
            vue.createElementVNode("tr", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.headerList, (item) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  item.type === "checkbox" ? (vue.openBlock(), vue.createElementBlock("th", {
                    key: 0,
                    class: vue.normalizeClass(thClass(item))
                  }, [
                    vue.createVNode(_component_bp_checkbox, {
                      modelValue: isSelectAll.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isSelectAll.value = $event),
                      onChange: onSelectChange
                    }, null, 8, ["modelValue"])
                  ], 2)) : (vue.openBlock(), vue.createElementBlock("th", {
                    key: 1,
                    class: vue.normalizeClass(thClass(item))
                  }, vue.toDisplayString(item.title), 3))
                ], 64);
              }), 256))
            ])
          ])
        ], 64);
      };
    }
  });
  const _sfc_main$k = vue.defineComponent({
    name: "TableSelect",
    props: {
      /** 已选择数据绑定值 */
      modelValue: { type: Array, default: () => [] },
      /** 选择器类型 */
      type: { type: String, default: "radio" },
      /** 数据记录 */
      record: { type: Object },
      /** 数据 key 值 */
      value: { type: [String, Number] }
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const selectionType = {
        radio: Radio,
        checkbox: Checkbox
      };
      const selectValue = vue.ref([]);
      const onSelectChange = () => {
        emit("update:modelValue", selectValue.value);
        setTimeout(() => {
          emit("change", props.record);
        }, 20);
      };
      vue.watch(
        () => props.modelValue,
        (v) => {
          selectValue.value = v;
        },
        { immediate: true }
      );
      return {
        selectValue,
        onSelectChange,
        selectionType
      };
    }
  });
  const _hoisted_1$c = { class: "bp-table-td-content" };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("span", _hoisted_1$c, [
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.selectionType[_ctx.type]), {
        modelValue: _ctx.selectValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectValue = $event),
        value: _ctx.value,
        onChange: _ctx.onSelectChange
      }, null, 40, ["modelValue", "value", "onChange"]))
    ]);
  }
  const TableSelect = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$h]]);
  const TableBody = /* @__PURE__ */ vue.defineComponent({
    name: "TableBody",
    props: {
      /** 表格数据 */
      data: {
        type: Array,
        default: () => []
      },
      /** 已选数据 key */
      modelValue: {
        type: Array,
        default: () => []
      },
      /** 选择器配置 */
      selection: {
        type: Object
      },
      /** 行 Key 字段名称 */
      rowKey: {
        type: String
      }
    },
    components: {
      TableSelect
    },
    emits: ["update:modelValue", "change"],
    setup(props, {
      slots,
      emit
    }) {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment);
      const val = vue.ref(props.modelValue || []);
      vue.watch(val, () => {
        emit("update:modelValue", val.value);
      });
      vue.watch(() => props.modelValue, () => {
        val.value = props.modelValue;
      });
      const onChange = (record) => {
        emit("change", record);
      };
      const bodyRender = () => {
        return vue.createVNode("tbody", {
          "class": "bp-table-body-tbody"
        }, [props.data.map((record, rowIndex) => {
          var _a2, _b;
          return vue.createVNode("tr", null, [["radio", "checkbox"].includes((_a2 = props.selection) == null ? void 0 : _a2.type) ? vue.createVNode("td", {
            "class": "bp-table-td"
          }, [vue.createVNode(vue.resolveComponent("table-select"), {
            "modelValue": val.value,
            "onUpdate:modelValue": ($event) => val.value = $event,
            "record": record,
            "type": (_b = props.selection) == null ? void 0 : _b.type,
            "value": record[props.rowKey],
            "onChange": onChange
          }, null)]) : null, children.map((child, childIndex) => {
            const {
              dataIndex = childIndex
            } = child == null ? void 0 : child.props;
            const column = Object.assign({}, child);
            column.props = vue.mergeProps(child.props, {
              record,
              rowIndex
            });
            return vue.createVNode(vue.Fragment, {
              "key": `bp-table-column-${rowIndex}-${dataIndex}`
            }, [column]);
          })]);
        })]);
      };
      return bodyRender;
    }
  });
  const _hoisted_1$b = { class: "bp-table-body-tbody" };
  const _hoisted_2$8 = { class: "bp-table-empty-tr" };
  const _hoisted_3$6 = ["colspan"];
  const _hoisted_4$4 = /* @__PURE__ */ vue.createElementVNode("div", { class: "bp-table-empty-tr-inner" }, [
    /* @__PURE__ */ vue.createElementVNode("i", { class: "ri-inbox-2-line" }),
    /* @__PURE__ */ vue.createElementVNode("span", null, "暂无数据")
  ], -1);
  const _hoisted_5$1 = [
    _hoisted_4$4
  ];
  const __default__$2 = vue.defineComponent({
    name: "TableEmpty"
  });
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    props: {
      colspan: { type: Number, default: 0 }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("tbody", _hoisted_1$b, [
          vue.createElementVNode("tr", _hoisted_2$8, [
            vue.createElementVNode("td", { colspan: __props.colspan }, _hoisted_5$1, 8, _hoisted_3$6)
          ])
        ]);
      };
    }
  });
  const _sfc_main$i = vue.defineComponent({
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.name)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      _ctx.slots.default && _ctx.loading ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(`${_ctx.name}-mask`)
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-loading`)
        }, [
          vue.createVNode(_component_bp_icon, {
            class: "bp-icon-loading",
            name: "ri-loader-4-line"
          }),
          vue.createElementVNode("p", {
            class: vue.normalizeClass(`${_ctx.name}-tip`)
          }, vue.toDisplayString(_ctx.tip), 3)
        ], 2)
      ], 2)) : _ctx.loading ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: vue.normalizeClass(`${_ctx.name}-loading`)
      }, [
        vue.createVNode(_component_bp_icon, {
          class: "bp-icon-loading",
          name: "ri-loader-4-line"
        })
      ], 2)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const _spin = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$g]]);
  _spin.name = getComponentsPrefix() + _spin.name;
  const Spin = Object.assign(_spin, {
    install: (app) => {
      app.component(_spin.name, _spin);
    }
  });
  const useTableSelect = (props, emit, tableHeaderRef) => {
    const selectedData = vue.ref([]);
    const onSelectChange = (record) => {
      emit("select", selectedData.value, record[props.rowKey], record);
    };
    const onSelectAll = (isSelectAll) => {
      emit("select-all", isSelectAll);
      if (!isSelectAll) {
        selectedData.value = [];
        return;
      }
      selectedData.value = [];
      for (let i = 0; i < props.data.length; i++) {
        const element = props.data[i];
        selectedData.value.push(element[props.rowKey]);
      }
    };
    vue.watch(selectedData, () => {
      var _a;
      tableHeaderRef.value && (tableHeaderRef.value.isSelectAll = props.data.length !== 0 && ((_a = selectedData.value) == null ? void 0 : _a.length) === props.data.length);
      emit("selection-change", selectedData.value);
      emit("update:selectedKey", selectedData.value);
    });
    return {
      onSelectChange,
      onSelectAll,
      selectedData
    };
  };
  const _sfc_main$h = vue.defineComponent({
    name: "Table",
    components: { TableHeader: _sfc_main$l, TableEmpty: _sfc_main$j, TableBody, TableSelect, bpSpin: Spin },
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
      stripe: { type: Boolean, default: false },
      /** 行 Key 字段名称 */
      rowKey: { type: String },
      /** 选择器配置 */
      selection: { type: Object },
      /** 选择数据的Key */
      selectedKey: { type: Array, default: () => [] }
    },
    emits: ["update:selectedKey", "selection-change", "select-all", "select"],
    setup(props, { slots, emit }) {
      const tableHeaderRef = vue.ref();
      let { bpTable, columns, table_width } = useTable(props, slots);
      let { selectedData, onSelectChange, onSelectAll } = useTableSelect(props, emit, tableHeaderRef);
      const isEmpty = vue.computed(() => props.data.length === 0);
      const hasBorder = vue.computed(() => props.border);
      const isStripe = vue.computed(() => props.stripe);
      const fixedHeight = vue.computed(() => props.height);
      vue.watch(
        () => props.selectedKey,
        () => {
          selectedData.value = props.selectedKey;
        },
        { immediate: true }
      );
      const bodyAreaStyle = vue.computed(() => {
        if (props.height) {
          return `width:${table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`;
        }
        return `width:${table_width.value}px`;
      });
      const innerClass = vue.computed(() => {
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
        tableHeaderRef,
        columns,
        table_width,
        isEmpty,
        selectedData,
        bodyAreaStyle,
        innerClass,
        tdClass,
        onSelectChange,
        onSelectAll
      };
    }
  });
  const _hoisted_1$a = {
    class: "bp-table",
    ref: "bpTable"
  };
  const _hoisted_2$7 = /* @__PURE__ */ vue.createElementVNode("div", { class: "scrollbar" }, null, -1);
  const _hoisted_3$5 = {
    key: 2,
    class: "bp-table-body-tbody"
  };
  const _hoisted_4$3 = {
    key: 1,
    class: "bp-table-td-content"
  };
  const _hoisted_5 = { key: 0 };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_table_header = vue.resolveComponent("table-header");
    const _component_table_empty = vue.resolveComponent("table-empty");
    const _component_table_body = vue.resolveComponent("table-body");
    const _component_table_select = vue.resolveComponent("table-select");
    const _component_bp_spin = vue.resolveComponent("bp-spin");
    return vue.openBlock(), vue.createBlock(_component_bp_spin, { loading: _ctx.loading }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$a, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(_ctx.innerClass)
          }, [
            vue.createElementVNode("div", {
              class: "bp-table-body-area",
              style: vue.normalizeStyle(_ctx.bodyAreaStyle)
            }, [
              _hoisted_2$7,
              vue.createElementVNode("table", {
                class: "bp-table-body",
                style: vue.normalizeStyle(`width:${_ctx.table_width}px`)
              }, [
                vue.createVNode(_component_table_header, {
                  ref: "tableHeaderRef",
                  "header-list": _ctx.columns,
                  onOnSelectAll: _ctx.onSelectAll
                }, null, 8, ["header-list", "onOnSelectAll"]),
                _ctx.isEmpty ? (vue.openBlock(), vue.createBlock(_component_table_empty, {
                  key: 0,
                  colspan: _ctx.columns.length
                }, null, 8, ["colspan"])) : !_ctx.isEmpty && _ctx.slots.columns ? (vue.openBlock(), vue.createBlock(_component_table_body, {
                  key: 1,
                  modelValue: _ctx.selectedData,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedData = $event),
                  data: _ctx.data,
                  selection: _ctx.selection,
                  "row-key": _ctx.rowKey,
                  onChange: _ctx.onSelectChange
                }, {
                  default: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "columns")
                  ]),
                  _: 3
                }, 8, ["modelValue", "data", "selection", "row-key", "onChange"])) : (vue.openBlock(), vue.createElementBlock("tbody", _hoisted_3$5, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("tr", {
                      key: `bp-table-tbody-tr-${index}`
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columns, (v, k) => {
                        return vue.openBlock(), vue.createElementBlock("td", {
                          key: `bp-table-tbody-td-${index}-${k}`,
                          class: vue.normalizeClass(_ctx.tdClass(v))
                        }, [
                          ["radio", "checkbox"].includes(v.type) ? (vue.openBlock(), vue.createBlock(_component_table_select, {
                            key: 0,
                            modelValue: _ctx.selectedData,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.selectedData = $event),
                            type: v.type,
                            record: item,
                            value: item[_ctx.rowKey],
                            onChange: _ctx.onSelectChange
                          }, null, 8, ["modelValue", "type", "record", "value", "onChange"])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$3, [
                            !v.scope ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, vue.toDisplayString(item[v.dataIndex]), 1)) : vue.renderSlot(_ctx.$slots, v.scope.customRender, {
                              key: 1,
                              row: item,
                              index,
                              data: item[v.dataIndex]
                            })
                          ]))
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
  const _table = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$f]]);
  const _sfc_main$g = vue.defineComponent({
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
      const hasCustomCell = vue.computed(() => !!(slots == null ? void 0 : slots.cell));
      const tdClass = vue.computed(() => {
        let align = `text-${props.align || "left"}`;
        return ["bp-table-td", align];
      });
      return {
        hasCustomCell,
        tdClass
      };
    }
  });
  const _hoisted_1$9 = { class: "bp-table-td-content" };
  const _hoisted_2$6 = { class: "text-ellipsis" };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_tooltip = vue.resolveComponent("bp-tooltip");
    return vue.openBlock(), vue.createElementBlock("td", {
      class: vue.normalizeClass(_ctx.tdClass)
    }, [
      vue.createElementVNode("span", _hoisted_1$9, [
        !_ctx.hasCustomCell ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.tooltip ? (vue.openBlock(), vue.createBlock(_component_bp_tooltip, {
            key: 0,
            content: _ctx.record[_ctx.dataIndex]
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("span", _hoisted_2$6, vue.toDisplayString(_ctx.record[_ctx.dataIndex]), 1)
            ]),
            _: 1
          }, 8, ["content"])) : !_ctx.tooltip ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass([{ "text-ellipsis": _ctx.ellipsis }])
          }, vue.toDisplayString(_ctx.record[_ctx.dataIndex]), 3)) : vue.createCommentVNode("", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          _ctx.tooltip ? (vue.openBlock(), vue.createBlock(_component_bp_tooltip, {
            key: 0,
            content: _ctx.record[_ctx.dataIndex]
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("span", {
                class: vue.normalizeClass([{ "text-ellipsis": _ctx.ellipsis }])
              }, [
                vue.renderSlot(_ctx.$slots, "cell", {
                  record: _ctx.record,
                  rowIndex: _ctx.rowIndex
                })
              ], 2)
            ]),
            _: 3
          }, 8, ["content"])) : vue.renderSlot(_ctx.$slots, "cell", {
            key: 1,
            record: _ctx.record,
            rowIndex: _ctx.rowIndex
          })
        ], 64))
      ])
    ], 2);
  }
  const _tableColumn = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$e]]);
  _table.name = getComponentsPrefix() + _table.name;
  _tableColumn.name = getComponentsPrefix() + _tableColumn.name;
  const Table = Object.assign(_table, {
    install: (app) => {
      app.component(_table.name, _table);
      app.component(_tableColumn.name, _tableColumn);
    }
  });
  const _space = /* @__PURE__ */ vue.defineComponent({
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
      const render = () => {
        var _a;
        const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment);
        return vue.createVNode("div", {
          "class": ["bp-space", `bp-space-${props.type}`],
          "style": `justify-content:${props.justify};align-items:${props.align}`
        }, [children.map((child, index) => {
          var _a2;
          const hasSplit = slots.split && index > 0;
          return vue.createVNode(vue.Fragment, {
            "key": child.key ?? `item-${index}`
          }, [hasSplit && vue.createVNode("div", {
            "class": "bp-space-item",
            "style": props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`
          }, [(_a2 = slots.split) == null ? void 0 : _a2.call(slots)]), vue.createVNode("div", {
            "class": "bp-space-item",
            "style": props.type === "horizontal" ? `margin: 0 ${size}px` : `margin: ${size}px 0`
          }, [child])]);
        })]);
      };
      return render;
    }
  });
  _space.name = getComponentsPrefix() + _space.name;
  const Space = Object.assign(_space, {
    install: (app) => {
      app.component(_space.name, _space);
    }
  });
  const _sfc_main$f = vue.defineComponent({
    name: "Alert",
    props: {
      type: { type: String, default: "info" },
      title: { type: String, default: "" },
      closeable: { type: Boolean, default: false }
    },
    emits: ["close"],
    setup(props, { emit, slots }) {
      const name = "bp-alert";
      const cls = vue.computed(() => {
        return [name, `${name}-${props.type}`, props.title ? `${name}-with-title` : ""];
      });
      const isRender = vue.ref(true);
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
  const _hoisted_1$8 = ["textContent"];
  const _hoisted_2$5 = { key: 1 };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return _ctx.isRender ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.cls)
    }, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(`${_ctx.name}-icon`)
      }, [
        _ctx.type === "info" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
          key: 0,
          name: "ri-information-fill"
        })) : vue.createCommentVNode("", true),
        _ctx.type === "success" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
          key: 1,
          name: "ri-checkbox-circle-fill"
        })) : vue.createCommentVNode("", true),
        _ctx.type === "warning" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
          key: 2,
          name: "ri-error-warning-fill"
        })) : vue.createCommentVNode("", true),
        _ctx.type === "error" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
          key: 3,
          name: "ri-close-circle-fill"
        })) : vue.createCommentVNode("", true)
      ], 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(`${_ctx.name}-body`)
      }, [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(`${_ctx.name}-title`)
        }, [
          vue.createElementVNode("span", {
            textContent: vue.toDisplayString(_ctx.title)
          }, null, 8, _hoisted_1$8)
        ], 2)) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-content`)
        }, [
          vue.createElementVNode("span", null, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 2)
      ], 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(`${_ctx.name}-option`)
      }, [
        _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(`${_ctx.name}-close-inner`),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
        }, [
          !_ctx.slots.close ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
            key: 0,
            name: "ri-close-line"
          })) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$5, [
            vue.renderSlot(_ctx.$slots, "close")
          ]))
        ], 2)) : vue.createCommentVNode("", true)
      ], 2)
    ], 2)) : vue.createCommentVNode("", true);
  }
  const _alert = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$d]]);
  _alert.name = getComponentsPrefix() + _alert.name;
  const Alert = Object.assign(_alert, {
    install: (app) => {
      app.component(_alert.name, _alert);
    }
  });
  const _sfc_main$e = vue.defineComponent({
    name: "Tag",
    props: {
      status: { type: String, default: "normal" },
      dot: { type: Boolean, default: false },
      closeable: { type: Boolean, default: false }
    },
    setup(props) {
      const name = "bp-tag";
      const cls = vue.computed(() => {
        return [name, props.dot ? `${name}-dot-box` : `${name}-${props.status}`];
      });
      const visible = vue.ref(true);
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.cls)
    }, [
      _ctx.dot ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass([`${_ctx.name}-dot`, `${_ctx.name}-dot-${_ctx.status}`])
      }, null, 2)) : vue.createCommentVNode("", true),
      vue.createElementVNode("span", {
        class: vue.normalizeClass(`${_ctx.name}-inner`)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2),
      _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("i", {
        key: 1,
        class: "ri-close-line",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
      })) : vue.createCommentVNode("", true)
    ], 2)) : vue.createCommentVNode("", true);
  }
  const _tag = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$c]]);
  _tag.name = getComponentsPrefix() + _tag.name;
  const Tag = Object.assign(_tag, {
    install: (app) => {
      app.component(_tag.name, _tag);
    }
  });
  const _sfc_main$d = vue.defineComponent({
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
      const containerVisable = vue.ref(false);
      const cls = vue.computed(() => {
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
      const confirmLoading = vue.ref(false);
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
      vue.watch(
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    const _component_bp_button = vue.resolveComponent("bp-button");
    const _component_bp_space = vue.resolveComponent("bp-space");
    return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
      vue.withDirectives(vue.createElementVNode("div", {
        class: vue.normalizeClass(`${_ctx.name}-container`)
      }, [
        vue.createVNode(vue.Transition, { name: "fade-modal-mask" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              class: vue.normalizeClass(`${_ctx.name}-mask`)
            }, null, 2), [
              [vue.vShow, _ctx.modelValue]
            ])
          ]),
          _: 1
        }),
        vue.createVNode(vue.Transition, { name: "modal-fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              class: vue.normalizeClass(`${_ctx.name}-wrapper`),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"]))
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.cls),
                style: vue.normalizeStyle(`width:${_ctx.width};top:${_ctx.top}`)
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(`${_ctx.name}-header`)
                }, [
                  vue.createElementVNode("p", {
                    class: vue.normalizeClass(`${_ctx.name}-header-title`)
                  }, vue.toDisplayString(_ctx.title), 3),
                  !_ctx.hideClose ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                    key: 0,
                    class: vue.normalizeClass(`${_ctx.name}-header-close`),
                    name: "ri-close-line",
                    onClick: _ctx.handleCancle
                  }, null, 8, ["class", "onClick"])) : vue.createCommentVNode("", true)
                ], 2),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(`${_ctx.name}-body`)
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2),
                !_ctx.hideFooter ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(`${_ctx.name}-footer`)
                }, [
                  !_ctx.slots.footer ? (vue.openBlock(), vue.createBlock(_component_bp_space, {
                    key: 0,
                    justify: "flex-end",
                    size: "small"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_bp_button, {
                        type: "plain",
                        onClick: _ctx.handleCancle
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.cancleText), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      vue.createVNode(_component_bp_button, {
                        onClick: _ctx.handleOk,
                        loading: _ctx.confirmLoading || _ctx.okLoading,
                        type: "primary",
                        status: "primary"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.okText), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true),
                  vue.renderSlot(_ctx.$slots, "footer")
                ], 2)) : vue.createCommentVNode("", true)
              ], 6)
            ], 2), [
              [vue.vShow, _ctx.modelValue]
            ])
          ]),
          _: 3
        })
      ], 2), [
        [vue.vShow, _ctx.containerVisable]
      ])
    ]);
  }
  const _modal = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b]]);
  _modal.name = getComponentsPrefix() + _modal.name;
  const Modal = Object.assign(_modal, {
    install: (app) => {
      app.component(_modal.name, _modal);
    }
  });
  const _sfc_main$c = vue.defineComponent({
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
      const cls = vue.computed(() => {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.cls)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const _col = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a]]);
  const _sfc_main$b = vue.defineComponent({
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
      const rowRef = vue.ref();
      const name = "row";
      const cls = vue.computed(() => {
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
      vue.onMounted(() => {
        vue.nextTick(() => setGutter(slots.default()));
      });
      return {
        rowRef,
        name,
        cls
      };
    }
  });
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.cls),
      ref: "rowRef"
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2);
  }
  const _grid = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9]]);
  _grid.name = getComponentsPrefix() + _grid.name;
  _col.name = getComponentsPrefix() + _col.name;
  const Grid = Object.assign(_grid, {
    Col: _col,
    install: (app) => {
      app.component(_grid.name, _grid);
      app.component(_col.name, _col);
    }
  });
  const _sfc_main$a = vue.defineComponent({
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
      const clsName = vue.computed(() => {
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
  const _hoisted_1$7 = ["disabled", "href", "target"];
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("a", {
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
      disabled: _ctx.disabled,
      class: vue.normalizeClass(_ctx.clsName),
      href: _ctx.href,
      target: _ctx.target
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
        key: 0,
        class: "left-icon bp-icon-loading",
        name: "ri-loader-4-line"
      })) : vue.createCommentVNode("", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_1$7);
  }
  const _link = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8]]);
  _link.name = getComponentsPrefix() + _link.name;
  const BpLink = Object.assign(_link, {
    install: (app) => {
      app.component(_link.name, _link);
    }
  });
  const _sfc_main$9 = vue.defineComponent({
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
      const show = vue.ref(false);
      const handleCancle = () => {
        show.value = false;
        emit("cancle");
      };
      const okLoading = vue.ref(false);
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    const _component_bp_button = vue.resolveComponent("bp-button");
    const _component_bp_space = vue.resolveComponent("bp-space");
    const _component_bp_trigger = vue.resolveComponent("bp-trigger");
    return vue.openBlock(), vue.createBlock(_component_bp_trigger, {
      "popup-visible": _ctx.show,
      "onUpdate:popupVisible": _cache[0] || (_cache[0] = ($event) => _ctx.show = $event),
      class: vue.normalizeClass(_ctx.name),
      "popup-offset": 10,
      position: _ctx.position
    }, {
      content: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-inner`)
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(`${_ctx.name}-inner-content`)
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(`${_ctx.name}-icon`)
            }, [
              _ctx.type === "info" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                key: 0,
                name: "ri-information-fill"
              })) : vue.createCommentVNode("", true),
              _ctx.type === "success" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                key: 1,
                name: "ri-checkbox-circle-fill"
              })) : vue.createCommentVNode("", true),
              _ctx.type === "warning" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                key: 2,
                name: "ri-error-warning-fill"
              })) : vue.createCommentVNode("", true),
              _ctx.type === "danger" ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                key: 3,
                name: "ri-close-circle-fill"
              })) : vue.createCommentVNode("", true)
            ], 2),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(`${_ctx.name}-text`)
            }, vue.toDisplayString(_ctx.content), 3)
          ], 2),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(`${_ctx.name}-inner-footer`)
          }, [
            vue.createVNode(_component_bp_space, {
              size: "mini",
              justify: "flex-end"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_bp_button, {
                  onClick: _ctx.handleCancle,
                  size: "mini"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.cancleText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_bp_button, {
                  onClick: _ctx.handleOk,
                  loading: _ctx.okLoading,
                  size: "mini",
                  type: "primary",
                  status: "primary"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.okText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
              ]),
              _: 1
            })
          ], 2)
        ], 2)
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-slot`)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["popup-visible", "class", "position"]);
  }
  const _popconfirm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7]]);
  _popconfirm.name = getComponentsPrefix() + _popconfirm.name;
  const Popconfirm = Object.assign(_popconfirm, {
    install: (app) => {
      app.component(_popconfirm.name, _popconfirm);
    }
  });
  const _sfc_main$8 = vue.defineComponent({
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
      const imageRef = vue.ref();
      const loadStatus = vue.ref("loading");
      const isLoading = vue.computed(() => loadStatus.value === "loading");
      const isError = vue.computed(() => loadStatus.value === "error");
      const imgStyle = vue.computed(() => ({
        width: `${props.width}px`,
        height: `${props.height}px`
      }));
      const fitStyle = vue.computed(() => {
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
      vue.watchEffect(() => {
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
  const _hoisted_1$6 = ["alt", "title"];
  const _hoisted_2$4 = /* @__PURE__ */ vue.createElementVNode("span", null, "加载中", -1);
  const _hoisted_3$4 = [
    _hoisted_2$4
  ];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.name),
      style: vue.normalizeStyle(_ctx.imgStyle)
    }, [
      vue.createElementVNode("img", {
        ref: "imageRef",
        alt: _ctx.alt,
        title: _ctx.title,
        style: vue.normalizeStyle({ ..._ctx.imgStyle, ..._ctx.fitStyle }),
        onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoad && _ctx.onLoad(...args)),
        onError: _cache[1] || (_cache[1] = (...args) => _ctx.onError && _ctx.onError(...args))
      }, null, 44, _hoisted_1$6),
      _ctx.isLoading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-loading`)
        }, _hoisted_3$4, 2)
      ]) : vue.createCommentVNode("", true),
      !_ctx.isLoading && _ctx.isError ? vue.renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${_ctx.name}-error`)
        }, [
          vue.createVNode(_component_bp_icon, { name: "ri-image-2-line" })
        ], 2)
      ]) : vue.createCommentVNode("", true)
    ], 6);
  }
  const _image = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6]]);
  _image.name = getComponentsPrefix() + _image.name;
  const Image = Object.assign(_image, {
    install: (app) => {
      app.component(_image.name, _image);
    }
  });
  const useScroll = () => {
    const pageLocation = vue.ref(0);
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
  const _sfc_main$7 = vue.defineComponent({
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
      const containerVisable = vue.ref(false);
      const cls = vue.computed(() => {
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
      const confirmLoading = vue.ref(false);
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
      vue.watch(
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bp_icon = vue.resolveComponent("bp-icon");
    const _component_bp_button = vue.resolveComponent("bp-button");
    const _component_bp_space = vue.resolveComponent("bp-space");
    return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
      vue.withDirectives(vue.createElementVNode("div", {
        class: vue.normalizeClass(`${_ctx.name}-container`)
      }, [
        vue.createVNode(vue.Transition, { name: "fade-modal-mask" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              class: vue.normalizeClass(`${_ctx.name}-mask`)
            }, null, 2), [
              [vue.vShow, _ctx.modelValue]
            ])
          ]),
          _: 1
        }),
        vue.createVNode(vue.Transition, { name: "drawer-fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              class: vue.normalizeClass(`${_ctx.name}-wrapper`),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"]))
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.cls),
                style: vue.normalizeStyle(`width:${_ctx.width};`)
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(`${_ctx.name}-header`)
                }, [
                  vue.createElementVNode("p", {
                    class: vue.normalizeClass(`${_ctx.name}-header-title`)
                  }, vue.toDisplayString(_ctx.title), 3),
                  !_ctx.hideClose ? (vue.openBlock(), vue.createBlock(_component_bp_icon, {
                    key: 0,
                    class: vue.normalizeClass(`${_ctx.name}-header-close`),
                    name: "ri-close-line",
                    onClick: _ctx.handleCancle
                  }, null, 8, ["class", "onClick"])) : vue.createCommentVNode("", true)
                ], 2),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(`${_ctx.name}-body`)
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2),
                !_ctx.hideFooter ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(`${_ctx.name}-footer`)
                }, [
                  !_ctx.slots.footer ? (vue.openBlock(), vue.createBlock(_component_bp_space, {
                    key: 0,
                    justify: "flex-end",
                    size: "small"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_bp_button, {
                        type: "plain",
                        onClick: _ctx.handleCancle
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.cancleText), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      vue.createVNode(_component_bp_button, {
                        onClick: _ctx.handleOk,
                        loading: _ctx.confirmLoading || _ctx.okLoading,
                        type: "primary",
                        status: "primary"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.okText), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ]),
                    _: 1
                  })) : vue.createCommentVNode("", true),
                  vue.renderSlot(_ctx.$slots, "footer")
                ], 2)) : vue.createCommentVNode("", true)
              ], 6)
            ], 2), [
              [vue.vShow, _ctx.modelValue]
            ])
          ]),
          _: 3
        })
      ], 2), [
        [vue.vShow, _ctx.containerVisable]
      ])
    ]);
  }
  const _drawer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5]]);
  _drawer.name = getComponentsPrefix() + _drawer.name;
  const Drawer = Object.assign(_drawer, {
    install: (app) => {
      app.component(_drawer.name, _drawer);
    }
  });
  const _sfc_main$6 = vue.defineComponent({
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
      const containerRef = vue.ref();
      const slotRef = vue.ref();
      const show = vue.ref(false);
      const visible = vue.ref(false);
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
        vue.nextTick(() => {
          show.value = false;
        });
      };
      vue.onMounted(() => {
        vue.nextTick(() => {
          on(window, "resize", throttle(handleResize, 100));
        });
      });
      vue.onBeforeUnmount(() => {
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
  const _hoisted_1$5 = /* @__PURE__ */ vue.createElementVNode("div", { class: "triangle" }, null, -1);
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_clickOutside = vue.resolveDirective("clickOutside");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      _ctx.show ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
        key: 0,
        to: "body"
      }, [
        vue.createVNode(vue.Transition, { name: "tooltip-fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              ref: "containerRef",
              class: vue.normalizeClass(`${_ctx.name}-container`)
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(`${_ctx.name}-content`)
              }, [
                !_ctx.slots.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
                ], 64)) : vue.createCommentVNode("", true),
                vue.renderSlot(_ctx.$slots, "content")
              ], 2),
              _hoisted_1$5
            ], 2)), [
              [vue.vShow, _ctx.visible],
              [_directive_clickOutside, _ctx.trigger === "click" && _ctx.closeTool]
            ])
          ]),
          _: 3
        })
      ])) : vue.createCommentVNode("", true),
      vue.createElementVNode("div", {
        ref: "slotRef",
        class: vue.normalizeClass(`${_ctx.name}-inner`),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.mouseenter && _ctx.mouseenter(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.mouseleave && _ctx.mouseleave(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 34)
    ], 64);
  }
  const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4]]);
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
  const _trigger = /* @__PURE__ */ vue.defineComponent({
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
      const triggerRef = vue.ref();
      const wrapperRef = vue.ref();
      const visible = vue.ref(props.popupVisible || false);
      const clickOutsideLock = vue.ref(true);
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
        vue.nextTick(() => {
          setTimeout(() => {
            if (props.trigger === "click") {
              clickOutsideLock.value = !visible.value;
            }
          }, delay);
        });
      };
      vue.onMounted(() => {
        vue.nextTick(() => {
          on(window, "resize", handleResize);
        });
      });
      vue.onBeforeUnmount(() => {
        off(window, "resize", handleResize);
      });
      vue.watch(() => props.popupVisible, (v) => {
        visible.value = v;
        clickOutsideLock.value = visible.value;
      });
      const render = () => {
        var _a;
        const children = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
        return vue.createVNode("div", {
          "class": name,
          "ref": triggerRef
        }, [vue.h(children[0], {
          onClick: handleClick,
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }), vue.createVNode(vue.Teleport, {
          "to": "body"
        }, {
          default: () => [vue.createVNode(vue.Transition, {
            "name": props.transition,
            "appear": true
          }, {
            default: () => {
              var _a2;
              return [vue.withDirectives(vue.createVNode("div", {
                "ref": wrapperRef,
                "class": `${name}-wrapper`,
                "onMouseenter": handleMouseEnter,
                "onMouseleave": handleMouseLeave
              }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), [[vue.vShow, visible.value], [vue.resolveDirective("clickOutside"), onClickOutside]])];
            }
          })]
        })]);
      };
      return render;
    }
  });
  _trigger.name = getComponentsPrefix() + _trigger.name;
  const Trigger = Object.assign(_trigger, {
    install: (app) => {
      app.component(_trigger.name, _trigger);
    }
  });
  const FormInjectionKey = Symbol("FormCtxKey");
  const getValidateInfo = (formRules, slots) => {
    var _a;
    const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter(
      (item) => item.type !== vue.Comment && item.type.name === "BpFormItem"
    );
    let rules = formRules ?? {};
    for (let i = 0; i < children.length; i++) {
      const { field = null, rules: formItemRules } = children[i].props ?? {};
      if (field && formItemRules) {
        rules[field] = formItemRules;
      }
    }
    return rules;
  };
  const _form = /* @__PURE__ */ vue.defineComponent({
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
      vue.provide(FormInjectionKey, {
        model: props.model,
        layout: props.layout
      });
      const cls = vue.computed(() => {
        let clsName = [name];
        clsName.push(`${name}-${props.layout}`);
        return clsName;
      });
      const formRef = vue.ref();
      const formItemRef = vue.ref({});
      const validate = async (callback) => {
        return new Promise((resove) => {
          const rules = getValidateInfo(props.rules, slots);
          const validator = new Schema(rules || {});
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
      const render = () => {
        var _a;
        const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment && item.type.name === "BpFormItem");
        return vue.createVNode("form", {
          "ref": formRef,
          "class": cls.value
        }, [children.map((child, index) => {
          const FormItem = Object.assign({}, child);
          return vue.createVNode(vue.Fragment, {
            "key": child.key ?? `item-${index}`
          }, [vue.h(FormItem, {
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
      return render;
    }
  });
  const _formItem = /* @__PURE__ */ vue.defineComponent({
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
      const messageVisible = vue.ref(false);
      const ctx = vue.ref();
      const message2 = vue.ref("");
      ctx.value = vue.inject(FormInjectionKey, null);
      const formItemCls = vue.computed(() => {
        let clsName = [name];
        if (messageVisible.value)
          clsName.push(`${name}-has-message`);
        return clsName;
      });
      const wrapperCls = vue.computed(() => {
        let clsName = [`${name}-wrapper`];
        return clsName;
      });
      const isRequire = vue.computed(() => {
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
      vue.watch(() => ctx.value.model[props.field], () => {
        messageVisible.value && clearError();
      });
      const render = () => {
        var _a;
        return vue.createVNode("div", {
          "class": formItemCls.value
        }, [vue.withDirectives(vue.createVNode("div", {
          "class": `${name}-label`,
          "style": props.labelStyle
        }, [isRequire.value ? vue.createVNode("span", {
          "class": "label-asterisk"
        }, null) : "", vue.createVNode("label", null, [props.label])]), [[vue.vShow, props.label || ctx.value.layout !== "inline"]]), vue.createVNode("div", {
          "class": wrapperCls.value,
          "style": props.wrapperStyle
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots), messageVisible.value ? vue.createVNode(vue.Transition, {
          "name": "form-error",
          "appear": true
        }, {
          default: () => [vue.withDirectives(vue.createVNode("div", {
            "class": `${name}-message`
          }, [message2.value]), [[vue.vShow, messageVisible.value]])]
        }) : null])]);
      };
      expose({
        handleError,
        clearError,
        resetFields
      });
      return render;
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
  const _sfc_main$5 = vue.defineComponent({
    name: "IconZoomIn",
    props: {
      /** 图标尺寸 */
      size: { type: String },
      /** 线宽 */
      strokeWidth: { type: Number, default: 4 },
      /** 端点类型 */
      strokeLinecap: {
        type: String,
        default: "butt",
        validator: (value) => {
          return ["butt", "round", "square"].includes(value);
        }
      },
      /** 拐角类型 */
      strokeLinejoin: {
        type: String,
        default: "miter",
        validator: (value) => {
          return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
        }
      },
      /** 旋转角度 */
      rotate: { type: Number },
      /** 是否旋转 */
      spin: { type: Boolean }
    },
    emits: {
      click: (ev) => true
    },
    setup(props, { emit }) {
      const name = "bp-icon";
      const iconClass = vue.computed(() => [name, `${name}-zoom-in`, { [`${name}-spin`]: props.spin }]);
      const innerStyle = vue.computed(() => {
        const styles = {};
        props.size && (styles.fontSize = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);
        return styles;
      });
      const onClick = (ev) => {
        emit("click", ev);
      };
      return {
        iconClass,
        innerStyle,
        onClick
      };
    }
  });
  const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z",
    stroke: "#333"
  }, null, -1);
  const _hoisted_3$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M21 15v12M15.016 21.016 27 21M33.222 33.222l8.485 8.485",
    stroke: "#333"
  }, null, -1);
  const _hoisted_4$2 = [
    _hoisted_2$3,
    _hoisted_3$3
  ];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: vue.normalizeClass(_ctx.iconClass),
      style: vue.normalizeStyle(_ctx.innerStyle),
      "stroke-width": _ctx.strokeWidth,
      "stroke-linecap": _ctx.strokeLinecap,
      "stroke-linejoin": _ctx.strokeLinejoin,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, _hoisted_4$2, 14, _hoisted_1$4);
  }
  const _IconZoomIn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
  _IconZoomIn.name = getComponentsPrefix() + _IconZoomIn.name;
  const IconZoomIn = Object.assign(_IconZoomIn, {
    install: (app) => {
      app.component(_IconZoomIn.name, _IconZoomIn);
    }
  });
  const _sfc_main$4 = vue.defineComponent({
    name: "IconZoomInternal",
    props: {
      /** 图标尺寸 */
      size: { type: String },
      /** 线宽 */
      strokeWidth: { type: Number, default: 4 },
      /** 端点类型 */
      strokeLinecap: {
        type: String,
        default: "butt",
        validator: (value) => {
          return ["butt", "round", "square"].includes(value);
        }
      },
      /** 拐角类型 */
      strokeLinejoin: {
        type: String,
        default: "miter",
        validator: (value) => {
          return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
        }
      },
      /** 旋转角度 */
      rotate: { type: Number },
      /** 是否旋转 */
      spin: { type: Boolean }
    },
    emits: {
      click: (ev) => true
    },
    setup(props, { emit }) {
      const name = "bp-icon";
      const iconClass = vue.computed(() => [name, `${name}-zoom-internal`, { [`${name}-spin`]: props.spin }]);
      const innerStyle = vue.computed(() => {
        const styles = {};
        props.size && (styles.fontSize = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);
        return styles;
      });
      const onClick = (ev) => {
        emit("click", ev);
      };
      return {
        iconClass,
        innerStyle,
        onClick
      };
    }
  });
  const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M44 4H4v40h40V4Z",
    stroke: "#333"
  }, null, -1);
  const _hoisted_3$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M16 4v12H4M36 24v12H24M36 36 24 24M4 6v20M7 4h20",
    stroke: "#333"
  }, null, -1);
  const _hoisted_4$1 = [
    _hoisted_2$2,
    _hoisted_3$2
  ];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: vue.normalizeClass(_ctx.iconClass),
      style: vue.normalizeStyle(_ctx.innerStyle),
      "stroke-width": _ctx.strokeWidth,
      "stroke-linecap": _ctx.strokeLinecap,
      "stroke-linejoin": _ctx.strokeLinejoin,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, _hoisted_4$1, 14, _hoisted_1$3);
  }
  const _IconZoomInternal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
  _IconZoomInternal.name = getComponentsPrefix() + _IconZoomInternal.name;
  const IconZoomInternal = Object.assign(_IconZoomInternal, {
    install: (app) => {
      app.component(_IconZoomInternal.name, _IconZoomInternal);
    }
  });
  const _sfc_main$3 = vue.defineComponent({
    name: "IconZoomOut",
    props: {
      /** 图标尺寸 */
      size: { type: String },
      /** 线宽 */
      strokeWidth: { type: Number, default: 4 },
      /** 端点类型 */
      strokeLinecap: {
        type: String,
        default: "butt",
        validator: (value) => {
          return ["butt", "round", "square"].includes(value);
        }
      },
      /** 拐角类型 */
      strokeLinejoin: {
        type: String,
        default: "miter",
        validator: (value) => {
          return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
        }
      },
      /** 旋转角度 */
      rotate: { type: Number },
      /** 是否旋转 */
      spin: { type: Boolean }
    },
    emits: {
      click: (ev) => true
    },
    setup(props, { emit }) {
      const name = "bp-icon";
      const iconClass = vue.computed(() => [name, `${name}-zoom-out`, { [`${name}-spin`]: props.spin }]);
      const innerStyle = vue.computed(() => {
        const styles = {};
        props.size && (styles.fontSize = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);
        return styles;
      });
      const onClick = (ev) => {
        emit("click", ev);
      };
      return {
        iconClass,
        innerStyle,
        onClick
      };
    }
  });
  const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z",
    stroke: "#333"
  }, null, -1);
  const _hoisted_3$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M15 21h12M33.222 33.222l8.485 8.485",
    stroke: "#333"
  }, null, -1);
  const _hoisted_4 = [
    _hoisted_2$1,
    _hoisted_3$1
  ];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: vue.normalizeClass(_ctx.iconClass),
      style: vue.normalizeStyle(_ctx.innerStyle),
      "stroke-width": _ctx.strokeWidth,
      "stroke-linecap": _ctx.strokeLinecap,
      "stroke-linejoin": _ctx.strokeLinejoin,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, _hoisted_4, 14, _hoisted_1$2);
  }
  const _IconZoomOut = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
  _IconZoomOut.name = getComponentsPrefix() + _IconZoomOut.name;
  const IconZoomOut = Object.assign(_IconZoomOut, {
    install: (app) => {
      app.component(_IconZoomOut.name, _IconZoomOut);
    }
  });
  const _sfc_main$2 = vue.defineComponent({
    name: "IconZoom",
    props: {
      /** 图标尺寸 */
      size: { type: String },
      /** 线宽 */
      strokeWidth: { type: Number, default: 4 },
      /** 端点类型 */
      strokeLinecap: {
        type: String,
        default: "butt",
        validator: (value) => {
          return ["butt", "round", "square"].includes(value);
        }
      },
      /** 拐角类型 */
      strokeLinejoin: {
        type: String,
        default: "miter",
        validator: (value) => {
          return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
        }
      },
      /** 旋转角度 */
      rotate: { type: Number },
      /** 是否旋转 */
      spin: { type: Boolean }
    },
    emits: {
      click: (ev) => true
    },
    setup(props, { emit }) {
      const name = "bp-icon";
      const iconClass = vue.computed(() => [name, `${name}-zoom`, { [`${name}-spin`]: props.spin }]);
      const innerStyle = vue.computed(() => {
        const styles = {};
        props.size && (styles.fontSize = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);
        return styles;
      });
      const onClick = (ev) => {
        emit("click", ev);
      };
      return {
        iconClass,
        innerStyle,
        onClick
      };
    }
  });
  const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M20 43c-4.726-1.767-8.668-7.815-10.64-11.357-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L17 29v-8.5a2.5 2.5 0 0 1 5 0v-4a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C35.095 39.82 33.255 42.034 31 43c-3.5 1.5-6.63 1.634-11 0ZM13 8h22M17 12l-4-4 4-4M31 4l4 4-4 4",
    stroke: "#333"
  }, null, -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: vue.normalizeClass(_ctx.iconClass),
      style: vue.normalizeStyle(_ctx.innerStyle),
      "stroke-width": _ctx.strokeWidth,
      "stroke-linecap": _ctx.strokeLinecap,
      "stroke-linejoin": _ctx.strokeLinejoin,
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, _hoisted_3, 14, _hoisted_1$1);
  }
  const _IconZoom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
  _IconZoom.name = getComponentsPrefix() + _IconZoom.name;
  const IconZoom = Object.assign(_IconZoom, {
    install: (app) => {
      app.component(_IconZoom.name, _IconZoom);
    }
  });
  const icons = {
    IconZoomIn,
    IconZoomInternal,
    IconZoomOut,
    IconZoom
  };
  const install$1 = (app) => {
    for (const key of Object.keys(icons)) {
      app.use(icons[key]);
    }
  };
  const BpVueIcon = {
    ...icons,
    install: install$1
  };
  const _hoisted_1 = ["innerHTML"];
  const __default__$1 = vue.defineComponent({
    name: "MessageList"
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: {
      /** 消息ID Message id */
      id: { type: String },
      /** 消息提示类型 Message prompt type */
      type: { type: String, default: "text" },
      /** 消息提示内容 Message prompt content */
      content: { type: String, default: "" },
      /** 延迟关闭时间 Delayed shutdown time */
      duration: { type: Number, default: 3e3 },
      /** 是否允许手动关闭 Closeable or not */
      closeable: { type: Boolean, default: false },
      /** 是否开启无背景展示 */
      plain: { type: Boolean, default: false },
      /** 关闭后的回调函数 */
      onClose: { type: Function }
    },
    emits: ["remove"],
    setup(__props, { emit: emits }) {
      const props = __props;
      const name = "bp-message";
      const timer = vue.ref(0);
      const iconType = {
        success: "ri-checkbox-circle-fill",
        error: "ri-close-circle-fill",
        warning: "ri-error-warning-fill",
        loading: "ri-loader-4-line"
      };
      const init = () => {
        if (props.duration > 0 && props.type !== "loading") {
          timer.value = window.setTimeout(handleClose, props.duration);
        }
      };
      const clsName = vue.computed(() => {
        let cls = [name];
        cls.push(props.plain ? `${name}-plain` : `${name}-${props.type}`);
        return cls;
      });
      const clearTimer = () => {
        if (timer) {
          window.clearTimeout(timer.value);
          timer.value = 0;
        }
      };
      const handleClose = () => {
        emits("remove", props.id);
        props.onClose && props.onClose(props.id);
      };
      vue.onMounted(() => {
        vue.nextTick(() => init());
      });
      vue.onUnmounted(() => {
        clearTimer();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass(clsName.value)
        }, [
          __props.type !== "text" ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass([`${name}-icon`, `icon-${__props.type}`])
          }, [
            vue.createVNode(vue.unref(BpVueIcon), {
              name: iconType[__props.type]
            }, null, 8, ["name"])
          ], 2)) : vue.createCommentVNode("", true),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(`${name}-content`),
            innerHTML: __props.content
          }, null, 10, _hoisted_1),
          __props.closeable ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass(`${name}-close`),
            onClick: handleClose
          }, [
            vue.createVNode(vue.unref(BpVueIcon), { name: "ri-close-line" })
          ], 2)) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  const __default__ = vue.defineComponent({
    name: "MessageList"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      list: { type: Array, default: () => [] }
    },
    emits: ["remove"],
    setup(__props, { emit: emits }) {
      const onRemove = (id) => emits("remove", id);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
          class: "bp-message-list",
          name: "fademsg",
          tag: "ul"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.list, (v) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$1, {
                key: `${v.id}`,
                id: v.id,
                type: v.type,
                content: v.content,
                duration: v.duration,
                closeable: v.closeable,
                plain: v.plain,
                "on-close": v.onClose,
                onRemove
              }, null, 8, ["id", "type", "content", "duration", "closeable", "plain", "on-close"]);
            }), 128))
          ]),
          _: 1
        });
      };
    }
  });
  class MessageManager {
    constructor(appContext) {
      __publicField(this, "mask", document.createElement("div"));
      __publicField(this, "messageList");
      /**
       * 添加消息提示
       * @param {MessageItem} config
       * @returns
       */
      __publicField(this, "add", (config) => {
        var _a;
        const id = config.id ?? `_bp_message_${Math.random().toString(36).slice(-8)}`;
        this.mask.setAttribute("class", `bp-mask-message bp-message-${config.position || "top"}`);
        const message2 = vue.reactive({ id, ...config });
        const updateIdx = arrayIndexOf(this.messageList.value, "id", id);
        updateIdx !== -1 ? this.messageList.value[updateIdx] = config : this.messageList.value.push(message2);
        const len = this.messageList.value.length;
        if (len > 1 && ((_a = this.messageList.value[len - 1]) == null ? void 0 : _a.duration) === message2.duration) {
          message2.duration = message2.duration ?? 3e3 + 200 * len;
        }
        return {
          remove: () => this.remove(id)
        };
      });
      /**
       * 移除消息提示
       * @param {string} id 消息id
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
      /** 清除消息列表 */
      __publicField(this, "clear", () => {
        const arr = deepClone(this.messageList.value);
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          this.remove(element.id);
        }
      });
      this.messageList = vue.ref([]);
      this.mask.setAttribute("class", `bp-mask-message`);
      const vm = vue.createVNode(_sfc_main, {
        list: this.messageList.value,
        onRemove: this.remove
      });
      if (appContext) {
        vm.appContext = appContext;
      }
      vue.render(vm, this.mask);
      document.body.appendChild(this.mask);
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
    removeAll: () => {
      msg && msg.clear();
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
    ...components,
    install
  };
  exports2.Alert = Alert;
  exports2.Button = Button;
  exports2.ButtonGroup = ButtonGroup;
  exports2.Checkbox = Checkbox;
  exports2.Drawer = Drawer;
  exports2.Form = Form;
  exports2.Grid = Grid;
  exports2.Image = Image;
  exports2.Input = Input;
  exports2.InputNumber = InputNumber;
  exports2.Link = BpLink;
  exports2.Message = Message;
  exports2.Modal = Modal;
  exports2.Pagination = Pagination;
  exports2.Popconfirm = Popconfirm;
  exports2.Radio = Radio;
  exports2.RadioGroup = Radio;
  exports2.Select = Select;
  exports2.Space = Space;
  exports2.Spin = Spin;
  exports2.Switch = Switch;
  exports2.Table = Table;
  exports2.Tag = Tag;
  exports2.Textarea = Textarea;
  exports2.Tooltip = Tooltip;
  exports2.Trigger = Trigger;
  exports2.default = birdpaperUi;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
//# sourceMappingURL=birdpaper-ui.js.map
