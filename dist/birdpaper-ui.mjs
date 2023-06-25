var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, computed, useSlots, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, ref, unref, Fragment, toDisplayString, nextTick, reactive, onMounted, onBeforeUnmount, resolveComponent, withDirectives, withModifiers, createVNode, withCtx, createBlock, Teleport, Transition, vShow, provide, watch, inject, watchEffect, renderList, createTextVNode, resolveDynamicComponent, mergeProps, toHandlerKey, normalizeStyle, Comment as Comment$1, onUnmounted, TransitionGroup, render } from "vue";
const _hoisted_1$h = ["disabled"];
const _hoisted_2$c = {
  key: 0,
  class: "left-icon"
};
const __default__$q = defineComponent({
  name: "Button"
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  ...__default__$q,
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
  setup(__props, { emit }) {
    const props = __props;
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(btnClass.value),
        type: "button",
        disabled: isDisabled.value,
        onClick
      }, [
        btnIcon.value ? (openBlock(), createElementBlock("span", _hoisted_2$c, [
          createElementVNode("i", {
            class: normalizeClass(btnIcon.value)
          }, null, 2)
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$h);
    };
  }
});
const DEFAULT_PREFIX = "Bp";
const getComponentsPrefix = (name) => {
  return name ?? DEFAULT_PREFIX;
};
_sfc_main$q.name = getComponentsPrefix() + _sfc_main$q.name;
const Button = Object.assign(_sfc_main$q, {
  install: (app) => {
    app.component(_sfc_main$q.name, _sfc_main$q);
  }
});
var InputType = /* @__PURE__ */ ((InputType2) => {
  InputType2["Text"] = "text";
  InputType2["Password"] = "password";
  return InputType2;
})(InputType || {});
const _hoisted_1$g = ["type", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$b = {
  key: 0,
  class: "suffix"
};
const _hoisted_3$5 = ["textContent"];
const __default__$p = defineComponent({
  name: "Input"
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: String, default: "" },
    /** 输入框类型 Type of the input */
    type: { type: String, default: InputType.Text },
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
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const name = "bp-input";
    const slot = useSlots();
    const inpRef = ref();
    const inpType = computed(() => isPasswordType.value ? InputType.Password : InputType.Text);
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
      emits("update:modelValue", "");
      nextTick(() => handleFocus());
    };
    const showWordLimit = computed(() => {
      return props.maxlength && props.showLimit && props.type === "text";
    });
    const limitText = computed(() => `${props.modelValue.length}/${props.maxlength}`);
    const showPassword = ref(false);
    const isPasswordType = computed(() => props.type === InputType.Password && !showPassword.value);
    const triggerPassword = () => {
      showPassword.value = !showPassword.value;
      nextTick(() => handleFocus());
    };
    const handleFocus = () => inpRef.value.focus();
    const handleBlur = () => inpRef.value.blur();
    const onFocus = () => emits("focus");
    const onBlur = () => emits("blur");
    const onKeypress = () => emits("keypress");
    const onKeyup = () => emits("keyup");
    const onInput = (e) => {
      const targetValue = e.target.value;
      emits("update:modelValue", targetValue);
    };
    __expose({
      handleFocus,
      handleBlur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(inpClass.value)
      }, [
        createElementVNode("input", {
          ref_key: "inpRef",
          ref: inpRef,
          class: "bp-input-inner",
          type: inpType.value,
          spellcheck: false,
          disabled: __props.disabled,
          readonly: __props.readonly,
          cursor: __props.modelValue.length,
          placeholder: __props.placeholder,
          maxlength: __props.maxlength,
          value: __props.modelValue,
          onFocus,
          onBlur,
          onKeypress,
          onKeyup,
          onInput
        }, null, 40, _hoisted_1$g),
        unref(slot).suffix || showClear.value || showWordLimit.value || __props.type === "password" ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
          !unref(slot).suffix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            showClear.value ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "ri-close-line click-icon",
              onClick: handleClear
            })) : createCommentVNode("", true),
            showWordLimit.value ? (openBlock(), createElementBlock("span", {
              key: 1,
              textContent: toDisplayString(limitText.value)
            }, null, 8, _hoisted_3$5)) : createCommentVNode("", true),
            __props.type === "password" ? (openBlock(), createElementBlock("i", {
              key: 2,
              onClick: triggerPassword,
              class: normalizeClass(["click-icon", showPassword.value ? "ri-eye-fill" : "ri-eye-close-fill"])
            }, null, 2)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "suffix")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
_sfc_main$p.name = getComponentsPrefix() + _sfc_main$p.name;
const Input = Object.assign(_sfc_main$p, {
  install: (app) => {
    app.component(_sfc_main$p.name, _sfc_main$p);
  }
});
const _hoisted_1$f = ["rows", "disabled", "readonly", "cursor", "placeholder", "maxlength", "value"];
const _hoisted_2$a = { class: "suffix" };
const _hoisted_3$4 = ["textContent"];
const __default__$o = defineComponent({
  name: "Textarea"
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$o,
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
    rows: { type: Number, default: 2 },
    /** 是否展示字数限制提示 Display word limit prompts or not */
    showLimit: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keypress", "keyup"],
  setup(__props, { emit: emits }) {
    const props = __props;
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
    const onFocus = () => emits("focus");
    const onBlur = () => emits("blur");
    const onKeypress = () => emits("keypress");
    const onKeyup = () => emits("keyup");
    const onInput = (e) => {
      const targetValue = e.target.value;
      emits("update:modelValue", targetValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(inpClass.value)
      }, [
        createElementVNode("textarea", {
          ref_key: "inpRef",
          ref: inpRef,
          class: "bp-textarea-inner",
          rows: __props.rows,
          spellcheck: false,
          disabled: __props.disabled,
          readonly: __props.readonly,
          cursor: __props.modelValue.length,
          placeholder: __props.placeholder,
          maxlength: __props.maxlength,
          value: __props.modelValue,
          onFocus,
          onBlur,
          onKeypress,
          onKeyup,
          onInput
        }, null, 40, _hoisted_1$f),
        createElementVNode("div", _hoisted_2$a, [
          showWordLimit.value ? (openBlock(), createElementBlock("span", {
            key: 0,
            textContent: toDisplayString(limitText.value)
          }, null, 8, _hoisted_3$4)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
_sfc_main$o.name = getComponentsPrefix() + _sfc_main$o.name;
const Textarea = Object.assign(_sfc_main$o, {
  install: (app) => {
    app.component(_sfc_main$o.name, _sfc_main$o);
  }
});
const __default__$n = defineComponent({
  name: "Radio"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: {
    modelValue: { type: [String, Number, Boolean], default: false },
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-radio";
    const handleInput = () => {
      if (props.disabled)
        return;
      emits("update:modelValue", props.value);
      emits("change", props.value);
    };
    const isCheck = computed(() => props.modelValue === props.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([name, __props.disabled ? `${name}-disabled` : ""]),
        onClick: handleInput
      }, [
        createElementVNode("input", {
          type: "radio",
          class: normalizeClass(`${name}-inner`)
        }, null, 2),
        createElementVNode("span", {
          class: normalizeClass([`${name}-radio`, isCheck.value ? `${name}-check` : ""])
        }, null, 2),
        createElementVNode("span", {
          class: normalizeClass(`${name}-label`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
_sfc_main$n.name = getComponentsPrefix() + _sfc_main$n.name;
const Radio = Object.assign(_sfc_main$n, {
  install: (app) => {
    app.component(_sfc_main$n.name, _sfc_main$n);
  }
});
const _hoisted_1$e = {
  key: 0,
  class: "ri-check-line"
};
const __default__$m = defineComponent({
  name: "Checkbox"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
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
      emits("update:modelValue", !props.modelValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(cls.value),
        onClick: handleClick
      }, [
        createElementVNode("input", {
          type: "checkbox",
          class: normalizeClass(`${name}-inner`)
        }, null, 2),
        createElementVNode("span", {
          class: normalizeClass([`${name}-checkbox`, isCheck.value ? `${name}-check` : ""])
        }, [
          isCheck.value ? (openBlock(), createElementBlock("i", _hoisted_1$e)) : createCommentVNode("", true)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(`${name}-label`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
_sfc_main$m.name = getComponentsPrefix() + _sfc_main$m.name;
const Checkbox = Object.assign(_sfc_main$m, {
  install: (app) => {
    app.component(_sfc_main$m.name, _sfc_main$m);
  }
});
const __default__$l = defineComponent({
  name: "Switch"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: Boolean, default: false },
    /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-switch";
    const cls = computed(() => {
      let clsName = [name];
      if (props.disabled) {
        clsName.push(`${name}-disabled`);
      }
      return clsName;
    });
    const isCheck = computed(() => props.modelValue);
    const handleClick = () => {
      emits("update:modelValue", !props.modelValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(cls.value),
        onClick: handleClick
      }, [
        createElementVNode("input", {
          type: "checkbox",
          class: normalizeClass(`${name}-inner`)
        }, null, 2),
        createElementVNode("span", {
          class: normalizeClass([`${name}-slider`, isCheck.value ? `${name}-check` : ""])
        }, null, 2)
      ], 2);
    };
  }
});
_sfc_main$l.name = getComponentsPrefix() + _sfc_main$l.name;
const Switch = Object.assign(_sfc_main$l, {
  install: (app) => {
    app.component(_sfc_main$l.name, _sfc_main$l);
  }
});
class SelectOption {
  constructor() {
    __publicField(this, "label", "");
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
const _hoisted_1$d = ["onClick"];
const __default__$k = defineComponent({
  name: "Select"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: {
    /** 绑定值 Binding value */
    modelValue: { type: [String, Number], default: "" },
    // TODO /** 是否禁用 Disabled or not */
    disabled: { type: Boolean, default: false },
    /** 占位提示文字 The placeholder text */
    placeholder: { type: String, default: "" },
    // TODO /** 是否允许清空 Clearable or not */
    clearable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const slots = useSlots();
    const name = "bp-select";
    const selectRef = ref();
    const inpRef = ref();
    const optionBoxRef = ref();
    const inpVal = reactive(new SelectOption());
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
    const handleClick = () => {
      if (props.disabled)
        return;
      handleResize();
      isFocus.value = !isFocus.value;
      isFocus.value && inpRef.value.handleFocus();
    };
    const handleResize = () => {
      const rect = selectRef.value.getBoundingClientRect();
      optionBoxRef.value.setAttribute(
        "style",
        `display:${isFocus.value ? "block" : "none"};width: ${rect.width}px;top:${rect.top + rect.height}px;left:${rect.left}px`
      );
    };
    const onClickOutside = () => {
      isFocus.value = false;
    };
    const onMouseleave = () => {
      !isFocus.value && inpRef.value.handleBlur();
    };
    const setup = () => {
      provide(selectInjectionKey, {
        modelValue: props.modelValue,
        onSelect: (v, payload) => {
          inpVal.value = v;
          inpVal.label = payload.label;
          emits("update:modelValue", inpVal.value);
          emits("change", inpVal.value);
          isFocus.value = false;
        }
      });
      inpVal.value = props.modelValue;
      inpVal.label = valueMap.value[inpVal.value];
    };
    setup();
    onMounted(() => {
      nextTick(() => {
        on(window, "resize", throttle(handleResize, 100));
      });
    });
    onBeforeUnmount(() => {
      off(window, "resize", handleResize);
    });
    return (_ctx, _cache) => {
      const _component_bp_input = resolveComponent("bp-input");
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "selectRef",
        ref: selectRef,
        class: normalizeClass([name, isFocus.value ? `${name}-focus` : ""]),
        onClick: withModifiers(handleClick, ["stop"]),
        onMouseleave
      }, [
        createVNode(_component_bp_input, {
          ref_key: "inpRef",
          ref: inpRef,
          modelValue: inpVal.label,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inpVal.label = $event),
          readonly: "",
          placeholder: __props.placeholder
        }, {
          suffix: withCtx(() => [
            createElementVNode("i", {
              class: normalizeClass([`${name}-icon-inner`, `ri-arrow-${isFocus.value ? "up" : "down"}-s-line`])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder"]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, {
            name: "fade-select",
            appear: ""
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                ref_key: "optionBoxRef",
                ref: optionBoxRef,
                class: normalizeClass(`${name}-option-box`)
              }, [
                createElementVNode("ul", {
                  class: normalizeClass(`${name}-option-list`)
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2)
              ], 2), [
                [vShow, isFocus.value]
              ])
            ]),
            _: 3
          })
        ]))
      ], 42, _hoisted_1$d)), [
        [unref(vClickOutside), onClickOutside]
      ]);
    };
  }
});
const __default__$j = defineComponent({
  name: "Option"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: {
    value: { type: [String, Number, Boolean], default: "" },
    label: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    const name = "bp-option";
    const ctx = ref();
    const slot = useSlots();
    const option = reactive(new SelectOption());
    const setup = () => {
      var _a;
      ctx.value = inject(selectInjectionKey, null);
      option.label = props.label || ((_a = slot.default) == null ? void 0 : _a.call(slot)[0].children);
      option.value = props.value;
    };
    const handleClick = () => {
      var _a;
      (_a = ctx.value) == null ? void 0 : _a.onSelect(option.value, { ...option });
    };
    watch(
      () => props,
      () => {
        setup();
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(`${name}-item`),
        onClick: handleClick
      }, [
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
_sfc_main$k.name = getComponentsPrefix() + _sfc_main$k.name;
_sfc_main$j.name = getComponentsPrefix() + _sfc_main$j.name;
const Select = Object.assign(_sfc_main$k, {
  install: (app) => {
    app.component(_sfc_main$k.name, _sfc_main$k);
    app.component(_sfc_main$j.name, _sfc_main$j);
  }
});
const _hoisted_1$c = ["textContent"];
const _hoisted_2$9 = {
  key: 1,
  class: "ri-arrow-left-s-line"
};
const __default__$i = defineComponent({
  name: "PaginationPrev"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$i,
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
        }, null, 8, _hoisted_1$c)) : (openBlock(), createElementBlock("i", _hoisted_2$9))
      ], 2);
    };
  }
});
const _hoisted_1$b = ["textContent"];
const _hoisted_2$8 = {
  key: 1,
  class: "ri-arrow-right-s-line"
};
const __default__$h = defineComponent({
  name: "PaginationNext"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$h,
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
        }, null, 8, _hoisted_1$b)) : (openBlock(), createElementBlock("i", _hoisted_2$8))
      ], 2);
    };
  }
});
const _hoisted_1$a = ["textContent"];
const __default__$g = defineComponent({
  name: "PaginationTotal"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$g,
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
        }, null, 8, _hoisted_1$a)
      ], 2);
    };
  }
});
const _hoisted_1$9 = ["onClick"];
const _hoisted_2$7 = { key: 0 };
const _hoisted_3$3 = {
  key: 1,
  class: "ri-more-fill"
};
const __default__$f = defineComponent({
  name: "PaginationPager"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$f,
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
      return openBlock(true), createElementBlock(Fragment, null, renderList(pageList.value, (item, index2) => {
        return openBlock(), createElementBlock("li", {
          key: `page-item-${index2}`,
          class: normalizeClass([`${name}-pager`, `${name}-item`, item.index === __props.currentPage ? `${name}-item-active` : ""]),
          onClick: ($event) => onClick(item.index)
        }, [
          item.type === "number" ? (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(item.index), 1)) : (openBlock(), createElementBlock("i", _hoisted_3$3))
        ], 10, _hoisted_1$9);
      }), 128);
    };
  }
});
const _hoisted_1$8 = {
  key: 0,
  class: "page-text"
};
const _hoisted_2$6 = {
  key: 1,
  class: "page-text"
};
const __default__$e = defineComponent({
  name: "PaginationJumper"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$e,
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
        text.prefix ? (openBlock(), createElementBlock("span", _hoisted_1$8, toDisplayString(text.prefix), 1)) : createCommentVNode("", true),
        createVNode(_component_bp_input, {
          modelValue: val.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => val.value = $event),
          size: "small",
          onBlur: handleBlur
        }, null, 8, ["modelValue"]),
        text.suffix ? (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(text.suffix), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const __default__$d = defineComponent({
  name: "PaginationSizes"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$d,
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
  const layoutMap = { prev: _sfc_main$i, next: _sfc_main$h, total: _sfc_main$g, pager: _sfc_main$f, jumper: _sfc_main$e, sizes: _sfc_main$d };
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
const __default__$c = defineComponent({
  name: "Pagination"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$c,
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
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-pagination";
    const { componentsList } = usePagination(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(name)
      }, [
        createElementVNode("ul", {
          class: normalizeClass(`${name}-container`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(componentsList), (item) => {
            return openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps(item.bind, {
              [toHandlerKey(item.eventName)]: item.event
            }), null, 16);
          }), 256))
        ], 2)
      ]);
    };
  }
});
_sfc_main$c.name = getComponentsPrefix() + _sfc_main$c.name;
const Pagination = Object.assign(_sfc_main$c, {
  install: (app) => {
    app.component(_sfc_main$c.name, _sfc_main$c);
  }
});
const useTable = (props) => {
  const bpTable = ref(null);
  const columns = ref([]);
  const _table_width = ref();
  let _remainder_col = 0;
  let _fixed_width = 0;
  let _min_width_list = [];
  let _col_width_list = [];
  const _min_column_width = 80;
  const initColumns = () => {
    const el = bpTable.value;
    const { cols } = props;
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
    _table_width.value = el && el.offsetWidth - 2;
    _col_width_list = getWidthList() || [];
    columns.value = [];
    for (let i = 0; i < cols.length; i++) {
      columns.value.push({ ...props.cols[i], width: _col_width_list[i] });
    }
    return columns.value;
  };
  function getWidthList() {
    const { cols } = props;
    let width_list = [];
    let adapt_width = getAdaptWidth();
    if (_min_width_list.length) {
      _min_width_list.map((item, index2) => {
        if (adapt_width > item) {
          _fixed_width += item;
          _remainder_col--;
          _min_width_list.splice(index2, 1);
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
    let width = (_table_width.value - _fixed_width) / _remainder_col;
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
    _table_width,
    columns
  };
};
const _hoisted_1$7 = ["name", "width"];
const __default__$b = defineComponent({
  name: "TableColumns"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: {
    // TODO
    cols: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("colgroup", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (item, index2) => {
          return openBlock(), createElementBlock("col", {
            key: `bp-table-tr-${index2}`,
            name: `bp_table_tr_${index2}`,
            width: `${item.width}px`
          }, null, 8, _hoisted_1$7);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$6 = { class: "bp-table-header" };
const _hoisted_2$5 = { class: "bp-table-header-thead" };
const __default__$a = defineComponent({
  name: "TableHeader"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    // TODO
    headerList: { type: Array, default: () => [] }
  },
  setup(__props) {
    const thClass = (item) => {
      let align = `text-${item["headerAlign"] || item["align"] || "left"}`;
      let name = [align];
      return name;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$6, [
        createVNode(_sfc_main$b, { cols: __props.headerList }, null, 8, ["cols"]),
        createElementVNode("thead", _hoisted_2$5, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headerList, (item, index2) => {
              return openBlock(), createElementBlock("th", {
                key: `bp-table-thead-${index2}`,
                class: normalizeClass(thClass(item))
              }, toDisplayString(item.label), 3);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "bp-table-empty-tr" };
const _hoisted_2$4 = ["colspan"];
const __default__$9 = defineComponent({
  name: "TableEmpty"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
    colspan: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", _hoisted_1$5, [
        createElementVNode("td", { colspan: __props.colspan }, "暂无数据", 8, _hoisted_2$4)
      ]);
    };
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode("i", { class: "bp-icon-loading ri-loader-4-line" }, null, -1);
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("i", { class: "bp-icon-loading ri-loader-4-line" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
const __default__$8 = defineComponent({
  name: "Spin"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: {
    /** 是否开启加载 Loading or not */
    loading: { type: Boolean, default: false },
    /** 加载提示文字 The loading tip text */
    tip: { type: String, default: "" }
  },
  setup(__props) {
    const name = "bp-spin";
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(name)
      }, [
        renderSlot(_ctx.$slots, "default"),
        unref(slots).default && __props.loading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`${name}-mask`)
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${name}-loading`)
          }, [
            _hoisted_1$4,
            createElementVNode("p", {
              class: normalizeClass(`${name}-tip`)
            }, toDisplayString(__props.tip), 3)
          ], 2)
        ], 2)) : __props.loading ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(`${name}-loading`)
        }, _hoisted_3$2, 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main$8.name = getComponentsPrefix() + _sfc_main$8.name;
const Spin = Object.assign(_sfc_main$8, {
  install: (app) => {
    app.component(_sfc_main$8.name, _sfc_main$8);
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode("div", { class: "scrollbar" }, null, -1);
const _hoisted_2$2 = { class: "bp-table-body-tbody" };
const __default__$7 = defineComponent({
  name: "Table"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
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
  setup(__props) {
    const props = __props;
    const { bpTable, columns, _table_width } = useTable(props);
    const isEmpty = computed(() => props.data.length === 0);
    const hasBorder = computed(() => props.border);
    const isStripe = computed(() => props.stripe);
    const fixedHeight = computed(() => props.height);
    const bodyAreaStyle = computed(() => {
      if (props.height) {
        return `width:${_table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`;
      }
      return `width:${_table_width.value}px`;
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
      let name = [align];
      return name;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Spin), { loading: __props.loading }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: "bp-table",
            ref_key: "bpTable",
            ref: bpTable
          }, [
            createElementVNode("div", {
              class: normalizeClass(innerClass.value)
            }, [
              createVNode(_sfc_main$a, { "header-list": unref(columns) }, null, 8, ["header-list"]),
              createElementVNode("div", {
                class: "bp-table-body-area",
                style: normalizeStyle(bodyAreaStyle.value)
              }, [
                _hoisted_1$3,
                createElementVNode("table", {
                  class: "bp-table-body",
                  style: normalizeStyle(`width:${unref(_table_width)}px`)
                }, [
                  createVNode(_sfc_main$b, { cols: unref(columns) }, null, 8, ["cols"]),
                  createElementVNode("tbody", _hoisted_2$2, [
                    isEmpty.value ? (openBlock(), createBlock(_sfc_main$9, {
                      key: 0,
                      colspan: unref(columns).length
                    }, null, 8, ["colspan"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.data, (item, index2) => {
                      return openBlock(), createElementBlock("tr", {
                        key: `bp-table-tbody-tr-${index2}`
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(columns), (v, k) => {
                          return openBlock(), createElementBlock("td", {
                            key: `bp-table-tbody-td-${index2}-${k}`,
                            class: normalizeClass(tdClass(v))
                          }, [
                            !v.scope ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(item[v.key]), 1)
                            ], 64)) : renderSlot(_ctx.$slots, v.scope.customRender, {
                              key: 1,
                              row: item,
                              index: index2,
                              data: item[v.key]
                            })
                          ], 2);
                        }), 128))
                      ]);
                    }), 128))
                  ])
                ], 4)
              ], 4)
            ], 2)
          ], 512)
        ]),
        _: 3
      }, 8, ["loading"]);
    };
  }
});
_sfc_main$7.name = getComponentsPrefix() + _sfc_main$7.name;
const Table = Object.assign(_sfc_main$7, {
  install: (app) => {
    app.component(_sfc_main$7.name, _sfc_main$7);
  }
});
const _space = /* @__PURE__ */ defineComponent({
  name: "Space",
  props: {
    size: {
      type: [Number, String],
      default: "small"
    },
    type: {
      type: String,
      default: "horizontal"
    },
    justify: {
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
      normal: 16,
      large: 24
    };
    const size = isString(props.size) ? typeMap[props.size] : props.size;
    const render2 = () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment$1);
      return createVNode("div", {
        "class": ["bp-space", `bp-space-${props.type}`],
        "style": `justify-content:${props.justify}`
      }, [children.map((child, index2) => {
        return createVNode(Fragment, {
          "key": child.key ?? `item-${index2}`
        }, [createVNode("div", {
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
const _hoisted_1$2 = {
  key: 0,
  class: "ri-information-fill"
};
const _hoisted_2$1 = {
  key: 1,
  class: "ri-checkbox-circle-fill"
};
const _hoisted_3$1 = {
  key: 2,
  class: "ri-error-warning-fill"
};
const _hoisted_4$1 = {
  key: 3,
  class: "ri-close-circle-fill"
};
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = {
  key: 0,
  class: "ri-close-line"
};
const _hoisted_7 = { key: 1 };
const __default__$6 = defineComponent({
  name: "Alert"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    type: { type: String, default: "info" },
    title: { type: String, default: "" },
    closeable: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-alert";
    const slots = useSlots();
    const cls = computed(() => {
      return [name, `${name}-${props.type}`, props.title ? `${name}-with-title` : ""];
    });
    const isRender = ref(true);
    const handleClose = () => {
      isRender.value = false;
      emits("close");
    };
    return (_ctx, _cache) => {
      return isRender.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(cls.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(`${name}-icon`)
        }, [
          __props.type === "info" ? (openBlock(), createElementBlock("i", _hoisted_1$2)) : createCommentVNode("", true),
          __props.type === "success" ? (openBlock(), createElementBlock("i", _hoisted_2$1)) : createCommentVNode("", true),
          __props.type === "warning" ? (openBlock(), createElementBlock("i", _hoisted_3$1)) : createCommentVNode("", true),
          __props.type === "error" ? (openBlock(), createElementBlock("i", _hoisted_4$1)) : createCommentVNode("", true)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(`${name}-body`)
        }, [
          __props.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`${name}-title`)
          }, [
            createElementVNode("span", {
              textContent: toDisplayString(__props.title)
            }, null, 8, _hoisted_5$1)
          ], 2)) : createCommentVNode("", true),
          createElementVNode("div", {
            class: normalizeClass(`${name}-content`)
          }, [
            createElementVNode("span", null, [
              renderSlot(_ctx.$slots, "default")
            ])
          ], 2)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(`${name}-option`)
        }, [
          __props.closeable ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`${name}-close-inner`),
            onClick: handleClose
          }, [
            !unref(slots).close ? (openBlock(), createElementBlock("i", _hoisted_6$1)) : (openBlock(), createElementBlock("span", _hoisted_7, [
              renderSlot(_ctx.$slots, "close")
            ]))
          ], 2)) : createCommentVNode("", true)
        ], 2)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
_sfc_main$6.name = getComponentsPrefix() + _sfc_main$6.name;
const Alert = Object.assign(_sfc_main$6, {
  install: (app) => {
    app.component(_sfc_main$6.name, _sfc_main$6);
  }
});
const __default__$5 = defineComponent({
  name: "Tag"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    status: { type: String, default: "normal" },
    closeable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const name = "bp-tag";
    const cls = computed(() => {
      return [name, `${name}-${props.status}`];
    });
    const visible = ref(true);
    const handleClose = () => {
      if (!props.closeable)
        return;
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return visible.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(cls.value)
      }, [
        createElementVNode("span", {
          class: normalizeClass(`${name}-inner`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        __props.closeable ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "ri-close-line",
          onClick: handleClose
        })) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
_sfc_main$5.name = getComponentsPrefix() + _sfc_main$5.name;
const Tag = Object.assign(_sfc_main$5, {
  install: (app) => {
    app.component(_sfc_main$5.name, _sfc_main$5);
  }
});
const _hoisted_1$1 = ["onClick"];
const __default__$4 = defineComponent({
  name: "Modal"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    visible: { type: Boolean, default: false },
    hideFooter: { type: Boolean, default: false },
    hideClose: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true },
    title: { type: String, default: "标题" },
    titleAlign: { type: String, default: "left" },
    width: { type: String, default: "600px" },
    top: { type: String, default: "20vh" }
  },
  emits: ["ok", "cancle", "update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "bp-modal";
    const slots = useSlots();
    const containerVisable = ref(false);
    const clsName = computed(() => {
      let cls = [name];
      if (props.border) {
        cls.push(`${name}-border`);
      }
      cls.push(`${name}-title-${props.titleAlign}`);
      return cls;
    });
    const handleMaskClick = () => {
      if (!props.maskClosable)
        return;
      handleCancle();
    };
    const handleCancle = () => {
      emits("cancle");
      emits("update:visible", false);
    };
    const handleOk = () => {
      emits("ok");
      emits("update:visible", false);
    };
    watch(
      () => props.visible,
      () => {
        if (props.visible) {
          containerVisable.value = true;
          return;
        }
        setTimeout(() => {
          containerVisable.value = false;
        }, 200);
      }
    );
    return (_ctx, _cache) => {
      const _component_bp_button = resolveComponent("bp-button");
      const _component_bp_space = resolveComponent("bp-space");
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        withDirectives(createElementVNode("div", {
          class: normalizeClass(`${name}-container`)
        }, [
          createVNode(Transition, { name: "fade-modal-mask" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass(`${name}-mask`)
              }, null, 2), [
                [vShow, __props.visible]
              ])
            ]),
            _: 1
          }),
          createVNode(Transition, { name: "modal-fade" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass(`${name}-wrapper`),
                onClick: withModifiers(handleMaskClick, ["self"])
              }, [
                createElementVNode("div", {
                  class: normalizeClass(clsName.value),
                  style: normalizeStyle(`width:${__props.width};top:${__props.top}`)
                }, [
                  createElementVNode("div", {
                    class: normalizeClass(`${name}-header`)
                  }, [
                    createElementVNode("p", {
                      class: normalizeClass(`${name}-header-title`)
                    }, toDisplayString(__props.title), 3),
                    !__props.hideClose ? (openBlock(), createElementBlock("i", {
                      key: 0,
                      class: normalizeClass([`${name}-header-close`, "ri-close-line"]),
                      onClick: handleCancle
                    }, null, 2)) : createCommentVNode("", true)
                  ], 2),
                  createElementVNode("div", {
                    class: normalizeClass(`${name}-body`)
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  !__props.hideFooter ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(`${name}-footer`)
                  }, [
                    !unref(slots).footer ? (openBlock(), createBlock(_component_bp_space, {
                      key: 0,
                      justify: "flex-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_bp_button, { onClick: handleCancle }, {
                          default: withCtx(() => [
                            createTextVNode("取消")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_bp_button, {
                          onClick: handleOk,
                          type: "primary",
                          status: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("确认")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 6)
              ], 10, _hoisted_1$1), [
                [vShow, __props.visible]
              ])
            ]),
            _: 3
          })
        ], 2), [
          [vShow, containerVisable.value]
        ])
      ]);
    };
  }
});
_sfc_main$4.name = getComponentsPrefix() + _sfc_main$4.name;
const Modal = Object.assign(_sfc_main$4, {
  install: (app) => {
    app.component(_sfc_main$4.name, _sfc_main$4);
  }
});
const __default__$3 = defineComponent({
  name: "Col"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    /** 栏位数量 1-24 Number of fields 1-24 */
    span: { type: [String, Number], default: 24 },
    /** 偏移量 Number of offset*/
    offset: { type: [String, Number], default: "" }
  },
  setup(__props) {
    const props = __props;
    const name = "col";
    const cls = computed(() => {
      let className = [`bp-${name}`];
      Number(props.span) !== 0 ? className.push(`bp-${name}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`bp-${name}-offset-${props.offset}`) : "";
      return className;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(cls.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const __default__$2 = defineComponent({
  name: "Row"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    /** 栏位间隔 Field spacing */
    gutter: { type: [String, Number], default: "" },
    /** 水平对齐方式 Horizontal alignment */
    justify: { type: String, default: "start" },
    /** 垂直对齐方式 Vertical alignment */
    align: { type: String, default: "start" }
  },
  setup(__props) {
    const props = __props;
    const slot = useSlots().default();
    const rowRef = ref();
    const name = "row";
    const cls = computed(() => {
      return [`bp-${name}`, `bp-justify-${props.justify}`, `bp-align-${props.align}`];
    });
    const init = () => {
      setGutter(slot);
    };
    const setGutter = (els) => {
      const childrenEls = rowRef.value.children;
      els.forEach((item, index2) => {
        const isCol = item.type === _sfc_main$3;
        if (isCol) {
          const el = childrenEls[index2];
          index2 !== 0 && (el.style.paddingLeft = `${props.gutter}px`);
          index2 !== childrenEls.length - 1 && (el.style.paddingRight = `${props.gutter}px`);
          return;
        }
        if (item.type.toString() === "Symbol(Fragment)") {
          setGutter(item.children);
        }
      });
    };
    onMounted(() => {
      nextTick(() => init());
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(cls.value),
        ref_key: "rowRef",
        ref: rowRef
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
_sfc_main$2.name = getComponentsPrefix() + _sfc_main$2.name;
_sfc_main$3.name = getComponentsPrefix() + _sfc_main$3.name;
const Grid = Object.assign(_sfc_main$2, {
  Col: _sfc_main$3,
  install: (app) => {
    app.component(_sfc_main$2.name, _sfc_main$2);
    app.component(_sfc_main$3.name, _sfc_main$3);
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
  Message
};
const install = function(app) {
  for (const key of Object.keys(components)) {
    app.use(components[key]);
  }
};
const index = {
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
  Message
};
export {
  Message,
  index as default
};
//# sourceMappingURL=birdpaper-ui.mjs.map
