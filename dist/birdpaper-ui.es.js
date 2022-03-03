var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ref, useSlots, computed, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createCommentVNode, renderSlot, withDirectives, toDisplayString, vShow, createElementVNode, reactive as reactive$1, Fragment, createVNode, withCtx, onMounted, getCurrentInstance, toRefs as toRefs$1, resolveDirective, Transition, renderList, nextTick, resolveComponent, createTextVNode, createBlock, Teleport, onBeforeUnmount, vModelCheckbox, vModelRadio, isRef as isRef$1 } from "vue";
const useButton = () => {
  const BUTTON_TYPE_LIST = ["text", "default", "primary", "success", "warning", "danger"];
  const typeValidator2 = (v) => BUTTON_TYPE_LIST.includes(v);
  const clickByLink2 = (href = "", target = "_self") => {
    var a = document.createElement("a");
    a.setAttribute("href", href);
    a.setAttribute("target", target);
    document.body.appendChild(a);
    return a.click();
  };
  return {
    BUTTON_TYPE_LIST,
    typeValidator: typeValidator2,
    clickByLink: clickByLink2
  };
};
const useDesign = () => {
  const DESIGN_SIZE_LIST = ["mini", "small", "normal", "large"];
  const DESIGN_THEME_LIST = ["primary", "success", "warning", "danger"];
  const sizeValidator2 = (v) => DESIGN_SIZE_LIST.includes(v);
  const themeValidator2 = (v) => DESIGN_THEME_LIST.includes(v);
  return {
    DESIGN_SIZE_LIST,
    DESIGN_THEME_LIST,
    sizeValidator: sizeValidator2,
    themeValidator: themeValidator2
  };
};
const _hoisted_1$n = ["type", "disabled"];
const _hoisted_2$j = { key: 1 };
const __default__$4 = { name: "bp-button" };
const { typeValidator: typeValidator$1, clickByLink } = useButton();
const { sizeValidator: sizeValidator$1, themeValidator } = useDesign();
const _sfc_main$s = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    type: { type: String, default: "default", validator: typeValidator$1 },
    size: { type: String, default: "normal", validator: sizeValidator$1 },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    dashed: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    block: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
    theme: { type: String, default: "primary", validator: themeValidator },
    href: { type: String, default: "" },
    target: { type: String, default: "_self" },
    minWidth: { type: [String, Number], default: "" },
    htmlType: { type: String, default: "button" }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const icon = ref("");
    const hasSlotDefault = !!useSlots().default;
    const isTextBtn = computed(() => props.type === "text");
    const hasIcon = computed(() => !!icon.value);
    const isLinkButton = computed(() => !!props.href);
    const btnElStyle = computed(() => props.minWidth && `min-width:${props.minWidth}px`);
    const isDisabled = computed(() => props.disabled || props.loading);
    computed(() => {
      let name = [
        "bp-button",
        "bp-btn-text",
        `bp-${props.size}-height`,
        { "bp-btn-block": props.block },
        { "bp-btn-text-disabled": props.disabled }
      ];
      hasSlotDefault && name.push(`bp-btn-padding-${props.size}`);
      return name;
    });
    const btnClass = computed(() => {
      let name = [
        `bp-button`,
        `bp-${props.size}-height`,
        { "bp-btn-block": props.block }
      ];
      hasSlotDefault && name.push(`bp-btn-padding-${props.size}`);
      if (isTextBtn.value) {
        name.push(`bp-btn-theme-${props.theme} bp-btn-text-style`);
        return name;
      }
      name.push(`bp-btn-${props.type}${props.plain ? "-plain" : ""}`);
      props.dashed && name.push("bp-btn-dashed");
      props.round && name.push("bp-btn-round");
      props.noBorder && name.push("bp-btn-no-border");
      return name;
    });
    watch(() => props.icon, (v) => icon.value = v, { immediate: true });
    watch(() => props.loading, (v) => icon.value = v ? "ri-loader-5-fill bp-icon-loading" : props.icon, { immediate: true });
    const onClick = () => {
      isLinkButton.value && clickByLink(props.href, props.target);
      if (!isLinkButton.value && !props.disabled)
        return emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: __props.htmlType,
        class: normalizeClass(unref(btnClass)),
        disabled: unref(isDisabled),
        style: normalizeStyle(unref(btnElStyle)),
        onClick
      }, [
        unref(hasIcon) ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(icon.value)
        }, null, 2)) : createCommentVNode("", true),
        hasSlotDefault ? (openBlock(), createElementBlock("span", _hoisted_2$j, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 14, _hoisted_1$n);
    };
  }
});
_sfc_main$s.install = function(Vue) {
  Vue.component(_sfc_main$s.name, _sfc_main$s);
};
const useInput = () => {
  const INPUT_TYPE_LIST = ["text", "password", "textarea"];
  const EMITS2 = ["update:modelValue", "focus", "blur", "keyup", "keydown", "clear", "suffix-click", "input"];
  const typeValidator2 = (v) => INPUT_TYPE_LIST.includes(v);
  const initSuffixType2 = ({ type, showPassword, clearable, showLimit, maxLength }) => {
    if (type === "password" && showPassword) {
      return "psw-eye-line";
    }
    if (clearable) {
      return "clearable";
    }
    if (showLimit && maxLength) {
      return "word-limit";
    }
    return "custom";
  };
  const autoHeight2 = (ele) => {
    var timer = null;
    const setStyle = (auto = false) => {
      if (auto)
        ele.style.height = "auto";
      ele.style.height = ele.scrollHeight + "px";
    };
    const delayedResize = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => setStyle(), 200);
    };
    if (ele.addEventListener) {
      ele.addEventListener("input", () => setStyle(), false);
      setStyle();
    } else if (ele.attachEvent) {
      ele.attachEvent("onpropertychange", () => setStyle());
      setStyle();
    }
    if (window.VBArray && window.addEventListener) {
      ele.attachEvent("onkeydown", function() {
        var key = window.event.keyCode;
        if (key == 8 || key == 46)
          delayedResize();
      });
      ele.attachEvent("oncut", () => delayedResize());
    }
  };
  return {
    EMITS: EMITS2,
    typeValidator: typeValidator2,
    initSuffixType: initSuffixType2,
    autoHeight: autoHeight2
  };
};
const _hoisted_1$m = { key: 1 };
const _hoisted_2$i = {
  key: 1,
  class: "bp-input-append"
};
const __default__$3 = { name: "bp-input-tail" };
const _sfc_main$r = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    render: { type: Boolean, default: false },
    mode: { type: String, default: "suffix" },
    type: { type: String, default: "custom" },
    icon: { type: String, default: "" },
    size: { type: String, default: "normal" },
    maxLength: { type: Number, default: null },
    inpValue: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isClick: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const cfg = ref(null);
    const CLOSE_ICON = "ri-close-circle-fill";
    class bpInputTail {
      constructor(icon, text, isClick, show) {
        this.icon = icon;
        this.text = text;
        this.isClick = isClick;
        this.show = show;
      }
    }
    const unInput = computed(() => props.disabled || props.readonly);
    const init = () => {
      if (props.mode === "append" || !props.render)
        return;
      switch (props.type) {
        case "psw-eye-line":
          cfg.value = new bpInputTail("ri-eye-line", "", !unInput.value, true);
          break;
        case "psw-eye-fill":
          cfg.value = new bpInputTail("ri-eye-fill", "", !unInput.value, true);
          break;
        case "clearable":
          const show = computed(() => !!props.inpValue);
          cfg.value = new bpInputTail(CLOSE_ICON, "", !unInput.value, show);
          break;
        case "word-limit":
          const text = computed(() => `${props.inpValue.length}/${props.maxLength}`);
          cfg.value = new bpInputTail("", text, false, true);
          break;
        case "custom":
          const { icon, isClick } = props;
          cfg.value = new bpInputTail(icon, "", isClick, true);
          break;
      }
    };
    const onClick = () => {
      if (!cfg.value.isClick || unInput.value)
        return;
      emit("click");
    };
    watch(() => [props.type, props.size, props.icon, props.maxLength, props.isClick], () => init(), { immediate: true });
    return (_ctx, _cache) => {
      return __props.render ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`bp-input-tail bp-${props.size}-height`)
      }, [
        __props.mode === "suffix" ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["bp-input-suffix", { "suffix-is-click": cfg.value.isClick }]),
          onClick
        }, [
          !!cfg.value.icon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(cfg.value.icon)
          }, null, 2)) : (openBlock(), createElementBlock("span", _hoisted_1$m, toDisplayString(cfg.value.text), 1))
        ], 2)), [
          [vShow, cfg.value.show]
        ]) : (openBlock(), createElementBlock("div", _hoisted_2$i, [
          renderSlot(_ctx.$slots, "default")
        ]))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$l = {
  key: 0,
  class: "bp-input-prefix"
};
const _hoisted_2$h = {
  key: 1,
  class: "bp-input-prepend"
};
const __default__$2 = { name: "bp-input-first" };
const _sfc_main$q = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    render: { type: Boolean, default: false },
    mode: { type: String, default: "prefix" },
    icon: { type: String, default: "" },
    size: { type: String, default: "normal" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return __props.render ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`bp-input-first bp-${props.size}-height`)
      }, [
        __props.mode === "prefix" ? (openBlock(), createElementBlock("div", _hoisted_1$l, [
          createElementVNode("i", {
            class: normalizeClass(__props.icon)
          }, null, 2)
        ])) : (openBlock(), createElementBlock("div", _hoisted_2$h, [
          renderSlot(_ctx.$slots, "default")
        ]))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$k = ["name", "placeholder", "disabled", "readonly", "value", "type", "maxlength", "autocomplete"];
const _hoisted_2$g = ["name", "placeholder", "disabled", "autocomplete", "readonly", "rows", "value", "maxlength"];
const _hoisted_3$d = {
  key: 0,
  class: "bp-textarea-word-limit"
};
const __default__$1 = { name: "bp-input" };
const { EMITS, typeValidator, initSuffixType, autoHeight } = useInput();
const { sizeValidator } = useDesign();
const _sfc_main$p = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    modelValue: { type: [String, Number], default: "", require: true },
    type: { type: String, default: "text", validator: typeValidator },
    size: { type: String, default: "normal", validator: sizeValidator },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    showLimit: { type: Boolean, default: false },
    showPassword: { type: Boolean, default: false },
    maxlength: { type: Number, default: null },
    autosize: { type: Boolean, default: false },
    resize: { type: String, default: "none" },
    rows: { type: Number, default: 3 },
    name: { type: String, default: "" },
    form: { type: String, default: "" },
    autofocus: { type: Boolean, default: false },
    autocomplete: { type: String, default: "" },
    suffixIcon: { type: String, default: "" },
    suffixClickable: { type: Boolean, default: false },
    prefixIcon: { type: String, default: "" }
  },
  emits: EMITS,
  setup(__props, { expose, emit }) {
    const props = __props;
    const inp = ref(null);
    const isFocus = ref(false);
    const inpType = ref("text");
    const inputClass = computed(() => {
      let name = ["bp-input"];
      props.type !== "textarea" && name.push(`bp-${props.size}-height`);
      return name;
    });
    const inputInnerClass = computed(() => [
      "bp-input-inner",
      {
        "focus-border": isFocus.value,
        "bp-has-append": hasAppend.value,
        "bp-has-prefix": hasPrefix.value,
        "bp-has-prepend": hasPrepend.value
      }
    ]);
    const textareaInnerClass = computed(() => ["bp-textarea-inner", `resize-${props.resize}`, { "focus-border": isFocus.value }]);
    const first = reactive$1({ isRender: false, mode: "" }), tail = reactive$1({ isRender: false, type: "", mode: "" });
    const showLimit = computed(() => props.showLimit && !!props.maxlength);
    const hasSuffix = computed(() => props.type === "password" && props.showPassword || showLimit.value || props.clearable || !!props.suffixIcon);
    const hasAppend = computed(() => !!useSlots().append);
    const hasPrefix = computed(() => !!props.prefixIcon && !hasPrepend.value);
    const hasPrepend = computed(() => !!useSlots().prepend);
    first.isRender = computed(() => hasPrefix.value || hasPrepend.value);
    tail.isRender = computed(() => hasSuffix.value || hasAppend.value);
    const init = () => {
      inpType.value = props.type;
      first.isRender && (first.mode = hasPrepend.value ? "prepend" : "prefix");
      if (tail.isRender) {
        tail.mode = hasAppend.value ? "append" : "suffix";
        !hasAppend.value && (tail.type = initSuffixType(props));
      }
    };
    const onSuffixClick = () => {
      if (props.type === "password") {
        inpType.value = inpType.value === "text" ? "password" : "text";
        tail.type = tail.type === "psw-eye-line" ? "psw-eye-fill" : "psw-eye-line";
        return;
      }
      props.clearable && clearValue();
      emit("suffix-click");
    };
    const clearValue = () => {
      emit("update:modelValue", "");
      emit("clear");
    };
    const onInput = (e) => {
      emit("update:modelValue", e.target.value);
      emit("input", e.target.value);
    };
    const focus = (e) => {
      isFocus.value = true;
      emit("focus", e);
    };
    const blur = (e) => {
      isFocus.value = false;
      emit("blur", e);
    };
    const keyup = (e) => emit("keyup", e);
    const keydown = (e) => emit("keydown", e);
    const select = () => inp.value.select();
    watch(() => props.modelValue, () => {
      if (props.type === "textarea" && props.autosize)
        autoHeight(inp.value);
    });
    watch(() => [props.showPassword, props.type, hasAppend.value, hasSuffix.value], () => init(), { immediate: true });
    expose({ blur, focus, select });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(inputClass))
      }, [
        inpType.value !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$q, {
            mode: unref(first).mode,
            render: unref(first).isRender,
            icon: __props.prefixIcon,
            size: __props.size
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "prepend")
            ]),
            _: 3
          }, 8, ["mode", "render", "icon", "size"]),
          createElementVNode("input", {
            ref_key: "inp",
            ref: inp,
            spellcheck: "false",
            name: __props.name,
            placeholder: __props.placeholder,
            disabled: __props.disabled,
            readonly: __props.readonly,
            class: normalizeClass(unref(inputInnerClass)),
            value: __props.modelValue,
            type: inpType.value,
            maxlength: __props.maxlength,
            autocomplete: __props.autocomplete,
            onKeyup: keyup,
            onKeydown: keydown,
            onInput,
            onFocus: focus,
            onBlur: blur
          }, null, 42, _hoisted_1$k),
          createVNode(_sfc_main$r, {
            mode: unref(tail).mode,
            render: unref(tail).isRender,
            type: unref(tail).type,
            size: __props.size,
            disabled: __props.disabled,
            readonly: __props.readonly,
            "inp-value": __props.modelValue,
            "max-length": __props.maxlength,
            icon: __props.suffixIcon,
            "is-click": __props.suffixClickable,
            onClick: onSuffixClick
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "append")
            ]),
            _: 3
          }, 8, ["mode", "render", "type", "size", "disabled", "readonly", "inp-value", "max-length", "icon", "is-click"])
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createElementVNode("textarea", {
            ref_key: "inp",
            ref: inp,
            spellcheck: "false",
            name: __props.name,
            placeholder: __props.placeholder,
            disabled: __props.disabled,
            autocomplete: __props.autocomplete,
            readonly: __props.readonly,
            class: normalizeClass(unref(textareaInnerClass)),
            rows: !__props.autosize && __props.rows,
            value: __props.modelValue,
            maxlength: __props.maxlength,
            onInput,
            onKeyup: keyup,
            onKeydown: keydown,
            onFocus: focus,
            onBlur: blur
          }, null, 42, _hoisted_2$g),
          unref(showLimit) ? (openBlock(), createElementBlock("div", _hoisted_3$d, [
            createElementVNode("span", null, toDisplayString(__props.modelValue.length) + "/" + toDisplayString(__props.maxlength), 1)
          ])) : createCommentVNode("", true)
        ], 64))
      ], 2);
    };
  }
});
_sfc_main$p.install = function(Vue) {
  Vue.component(_sfc_main$p.name, _sfc_main$p);
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$o = {
  name: "bp-row",
  props: {
    gutter: { type: [Number, String], default: 0 },
    hideGutter: {
      type: String,
      default: "",
      validator: function(value) {
        return ["", "xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: "",
      validator: function(value) {
        return ["", "flex"].indexOf(value) !== -1;
      }
    },
    justify: {
      type: String,
      default: "center",
      validator: function(value) {
        return ["start", "end", "center", "space-around", "space-between"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "middle",
      validator: function(value) {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      }
    }
  },
  setup(props) {
    const setColAttrs = () => {
      const row = getCurrentInstance().refs.row.children || [];
      let len = row.length;
      if (len === 0)
        return;
      for (let i = 0; i < len; i++) {
        row[i].classList.add(props.type === "flex" ? "bp-col" : "bp-col");
        if (props.gutter !== 0 && len > 1) {
          if (i !== 0)
            row[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1)
            row[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };
    const clazzName = computed(() => {
      const isFlex = props.type === "flex";
      const isHideGutter = props.hideGutter !== "";
      const prefix = isFlex ? "bp-row-flex" : "bp-row";
      const name = [prefix];
      if (isFlex) {
        name.push(`bp-row-flex-justify-${props.justify}`);
        name.push(`bp-row-flex-align-${props.align}`);
      }
      if (isHideGutter) {
        name.push(`bp-row-hide-gutter-${props.hideGutter}`);
      }
      return name;
    });
    onMounted(() => {
      setColAttrs();
    });
    return {
      setColAttrs,
      clazzName
    };
  }
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.clazzName),
    ref: "row"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var bpRow = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n]]);
bpRow.install = function(Vue) {
  Vue.component(bpRow.name, bpRow);
};
const isNull = (data) => !data && data != 0;
const clickOutside = {
  beforeMount(el, binding, vnode) {
    function handleClick(e) {
      if (el.contains(e.target) || e.target.className.includes(binding.arg)) {
        return false;
      }
      binding.value(e);
    }
    el.__vueClickOutside__ = handleClick;
    document.addEventListener("click", handleClick);
  },
  unmounted(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
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
const _sfc_main$n = {
  name: "bp-col",
  props: {
    span: { type: [Number, String], default: 0 },
    offset: { type: [Number, String], default: 0 },
    xs: { type: [Object, Number], default: () => {
    } },
    sm: { type: [Object, Number], default: () => {
    } },
    md: { type: [Object, Number], default: () => {
    } },
    lg: { type: [Object, Number], default: () => {
    } },
    xl: { type: [Object, Number], default: () => {
    } }
  },
  setup(props) {
    let colClassName = computed(() => {
      let prefix = "bp-col";
      let className = [];
      Number(props.span) !== 0 ? className.push(`${prefix}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`${prefix}-offset-${props.offset}`) : "";
      let arr = ["xs", "sm", "md", "lg", "xl"];
      for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (typeof props[name] === "number") {
          className.push(`${prefix}-${name}-${props[name]}`);
          continue;
        }
        if (!isNull(props[name])) {
          !isNull(props[name].span) ? className.push(`${prefix}-${name}-${props[name].span}`) : null;
          !isNull(props[name].offset) ? className.push(`${prefix}-${name}-offset-${props[name].offset}`) : null;
        }
      }
      return className;
    });
    return {
      colClassName
    };
  }
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.colClassName)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var bpCol = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
bpCol.install = function(Vue) {
  Vue.component(bpCol.name, bpCol);
};
const _sfc_main$m = {
  name: "bp-select",
  directives: { clickOutside },
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "\u8BF7\u9009\u62E9" },
    label: { type: String, default: "label" },
    value: { type: String, default: "value" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    optionList: { type: Array, default: () => [] },
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["mini", "small", "normal", "large"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive$1({
      select: {
        label: "",
        value: props.modelValue
      },
      optionShow: false,
      optionShowScrollBar: false,
      clearableIconShow: false
    });
    const labelList = ref({});
    const render = () => {
      for (let i = 0; i < props.optionList.length; i++) {
        labelList.value[props.optionList[i][props.value]] = props.optionList[i][props.label];
      }
    };
    watch(() => props.modelValue, () => {
      state.select.label = labelList.value[props.modelValue];
    }, { immediate: true });
    watch(() => props.optionList, () => {
      render();
      state.select.label = labelList.value[props.modelValue];
    }, { immediate: true });
    const selectClassName = computed(function() {
      let name = ["select-input"];
      name.push(`select-size-${props.size}`);
      props.disabled ? name.push("bp-select-disabled") : "";
      state.optionShow ? name.push("active") : "";
      return name;
    });
    const handleSelectClick = () => {
      if (props.disabled)
        return;
      state.optionShow = !state.optionShow;
    };
    const closeOption = () => {
      if (!state.optionShow)
        return;
      state.optionShow = false;
    };
    const clear2 = () => {
      state.select = {
        value: "",
        label: ""
      };
    };
    const handleSelectMouseEnter = () => {
      if (props.disabled) {
        return;
      }
      if (props.clearable) {
        state.clearableIconShow = true;
      }
    };
    const handleSelectMouseLeave = () => {
      if (props.disabled) {
        return;
      }
      if (props.clearable) {
        state.clearableIconShow = false;
      }
    };
    const handleOptionItemClick = (item) => {
      emit("update:modelValue", item[props.value]);
      state.optionShow = false;
    };
    const onClickOutside = () => {
      state.optionShow = false;
    };
    return __spreadProps(__spreadValues({}, toRefs$1(state)), {
      selectClassName,
      handleSelectClick,
      closeOption,
      clear: clear2,
      handleSelectMouseEnter,
      handleSelectMouseLeave,
      handleOptionItemClick,
      onClickOutside
    });
  }
};
const _hoisted_1$j = { class: "bp-select" };
const _hoisted_2$f = { class: "option" };
const _hoisted_3$c = /* @__PURE__ */ createElementVNode("div", { class: "option-arrow" }, null, -1);
const _hoisted_4$a = { class: "option-container" };
const _hoisted_5$5 = ["title", "onClick"];
const _hoisted_6$5 = { class: "item" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass($setup.selectClassName),
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleSelectClick && $setup.handleSelectClick(...args)),
      onMouseenter: _cache[2] || (_cache[2] = (...args) => $setup.handleSelectMouseEnter && $setup.handleSelectMouseEnter(...args)),
      onMouseleave: _cache[3] || (_cache[3] = (...args) => $setup.handleSelectMouseLeave && $setup.handleSelectMouseLeave(...args))
    }, [
      withDirectives(createElementVNode("span", null, toDisplayString($props.placeholder), 513), [
        [vShow, !_ctx.select.label]
      ]),
      withDirectives(createElementVNode("span", { class: "select-value" }, toDisplayString(_ctx.select.label), 513), [
        [vShow, _ctx.select.label !== ""]
      ]),
      createElementVNode("div", _hoisted_2$f, [
        _ctx.select.value == "" || !_ctx.clearableIconShow ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["ri-arrow-down-s-line", { open: _ctx.optionShow }])
        }, null, 2)) : createCommentVNode("", true),
        _ctx.clearableIconShow && _ctx.select.value != "" ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: "ri-close-circle-fill",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.clear && $setup.clear(...args))
        })) : createCommentVNode("", true)
      ])
    ], 34)), [
      [_directive_click_outside, $setup.onClickOutside]
    ]),
    createVNode(Transition, { name: "option-slide" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "select-item-box scro scro-1",
          onMouseenter: _cache[4] || (_cache[4] = ($event) => _ctx.optionShowScrollBar = true),
          onMouseleave: _cache[5] || (_cache[5] = ($event) => _ctx.optionShowScrollBar = false)
        }, [
          _hoisted_3$c,
          createElementVNode("div", _hoisted_4$a, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.optionList, (item, index2) => {
              return openBlock(), createElementBlock("div", {
                class: "bp-option",
                key: `option-${index2}`,
                title: item[$props.label],
                onClick: ($event) => $setup.handleOptionItemClick(item)
              }, [
                createElementVNode("div", _hoisted_6$5, [
                  createElementVNode("span", null, toDisplayString(item[$props.label]), 1)
                ])
              ], 8, _hoisted_5$5);
            }), 128))
          ])
        ], 544), [
          [vShow, _ctx.optionShow]
        ])
      ]),
      _: 1
    })
  ]);
}
var bpSelect = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l]]);
bpSelect.install = function(Vue) {
  Vue.component(bpSelect.name, bpSelect);
};
const useEquipment = () => {
  const isMobile = () => document.body.clientWidth < 760;
  return {
    isMobile
  };
};
const _sfc_main$l = {
  name: "bp-dialog",
  directives: { clickOutside },
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: "\u63D0\u793A" },
    width: { type: String, default: "35%" },
    top: { type: String, default: "15vh" },
    noFooter: { type: Boolean, default: false },
    lockScroll: { type: Boolean, default: true },
    closeOnClickMask: { type: Boolean, default: true },
    closeOnPressEscape: { type: Boolean, default: false }
  },
  emits: ["confirm", "cancel", "update:modelValue"],
  setup(props, { emit }) {
    const state = reactive$1({
      visible: false,
      maskShow: false,
      dialogLock: true
    });
    if (props.closeOnPressEscape) {
      document.addEventListener("keyup", (e) => {
        if (e.keyCode == 27) {
          onClose();
        }
      });
    }
    const modalWidth = ref("");
    const { isMobile } = useEquipment();
    const getWidth = () => {
      modalWidth.value = isMobile() ? "90%" : props.width;
    };
    onMounted(() => {
      getWidth();
      nextTick(() => {
        window.addEventListener("resize", () => getWidth(), false);
      });
    });
    const onConfirm = () => {
      emit("confirm");
    };
    const onOpen = () => {
      if (state.visible)
        return;
      state.visible = true;
      state.maskShow = true;
      setTimeout(() => {
        state.dialogLock = false;
      }, 200);
    };
    const onClose = function() {
      if (!state.visible)
        return;
      state.maskShow = false;
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 10);
      setTimeout(() => {
        state.dialogLock = true;
      }, 200);
    };
    const onCancel = () => {
      onClose();
      setTimeout(() => {
        emit("cancel");
      }, 200);
    };
    watch(() => props.modelValue, (val) => {
      val ? onOpen() : (state.visible = false, state.maskShow = false, state.dialogLock = true);
      if (props.lockScroll) {
        props.modelValue ? document.getElementsByTagName("body")[0].className = "bp-overflow-hidden" : document.body.removeAttribute("class", "bp-overflow-hidden");
      }
    });
    const onClickOutside = () => {
      if (!props.closeOnClickMask || state.dialogLock)
        return;
      onClose();
    };
    return __spreadProps(__spreadValues({}, toRefs$1(state)), {
      modalWidth,
      onConfirm,
      onClose,
      onCancel,
      onClickOutside
    });
  }
};
const _hoisted_1$i = {
  key: 0,
  class: "bp-wapper"
};
const _hoisted_2$e = { class: "header" };
const _hoisted_3$b = { class: "title" };
const _hoisted_4$9 = ["textContent"];
const _hoisted_5$4 = { class: "option" };
const _hoisted_6$4 = { class: "content" };
const _hoisted_7$2 = {
  key: 0,
  class: "footer"
};
const _hoisted_8$2 = /* @__PURE__ */ createTextVNode(" \u53D6\u6D88 ");
const _hoisted_9$2 = /* @__PURE__ */ createTextVNode(" \u786E\u5B9A ");
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_mask = resolveComponent("bp-mask");
  const _component_bp_button = resolveComponent("bp-button");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_bp_mask, {
      modelValue: _ctx.maskShow,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.maskShow = $event)
    }, null, 8, ["modelValue"]),
    createVNode(Transition, { name: "bp-dialog-fade" }, {
      default: withCtx(() => [
        _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
          withDirectives((openBlock(), createElementBlock("div", {
            class: "bp-dialog",
            style: normalizeStyle(`width:${$setup.modalWidth};margin-top:${$props.top}`)
          }, [
            createElementVNode("div", _hoisted_2$e, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createElementVNode("div", _hoisted_3$b, [
                  createElementVNode("p", {
                    class: "title-content",
                    textContent: toDisplayString($props.title)
                  }, null, 8, _hoisted_4$9)
                ]),
                createElementVNode("div", _hoisted_5$4, [
                  createElementVNode("i", {
                    class: "ri-close-fill",
                    onClick: _cache[1] || (_cache[1] = (...args) => $setup.onClose && $setup.onClose(...args))
                  })
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_6$4, [
              renderSlot(_ctx.$slots, "default")
            ]),
            !$props.noFooter ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                createVNode(_component_bp_button, {
                  type: "default",
                  onClick: $setup.onCancel
                }, {
                  default: withCtx(() => [
                    _hoisted_8$2
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_bp_button, { onClick: $setup.onConfirm }, {
                  default: withCtx(() => [
                    _hoisted_9$2
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ])) : createCommentVNode("", true)
          ], 4)), [
            [_directive_click_outside, $setup.onClickOutside]
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    })
  ], 64);
}
var bpDialog = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k]]);
bpDialog.install = function(Vue) {
  Vue.component(bpDialog.name, bpDialog);
};
const _sfc_main$k = {
  name: "bp-mask",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const visible = ref(false);
    watch(() => props.modelValue, (val) => {
      visible.value = val;
    });
    return {
      visible
    };
  }
};
const _hoisted_1$h = {
  key: 0,
  class: "bp-mask"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, { name: "mask-fade" }, {
      default: withCtx(() => [
        $setup.visible ? (openBlock(), createElementBlock("div", _hoisted_1$h)) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
var bpMask = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j]]);
bpMask.install = function(Vue) {
  Vue.component(bpMask.name, bpMask);
};
const _sfc_main$j = {
  name: "bp-avatar",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: function(value) {
        return ["normal", "large", "small", "mini"].indexOf(value) !== -1;
      }
    },
    icon: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "circle",
      validator: function(value) {
        return ["circle", "square"].indexOf(value) !== -1;
      }
    },
    fit: {
      type: String,
      default: "cover"
    },
    alt: {
      type: String,
      default: ""
    }
  },
  emits: ["click", "error"],
  setup(props, { emit }) {
    let avatarClass = computed(() => {
      let className = ["bp-avatar"];
      className.push(`bp-avatar-${props.size}`);
      className.push(`bp-avatar-${props.shape}`);
      return className;
    });
    let textShow = computed(() => {
      return props.icon === "" && props.src === "";
    });
    let iconShow = computed(() => {
      return props.src === "" && props.icon !== "";
    });
    let srcShow = computed(() => {
      return props.src !== "" && props.icon === "";
    });
    const { handleError, handleClick } = useAvatarEvent(emit);
    return {
      avatarClass,
      textShow,
      iconShow,
      srcShow,
      handleError,
      handleClick
    };
  }
};
function useAvatarEvent(emit) {
  const handleClick = () => {
    emit("click");
  };
  const handleError = () => {
    emit("error");
  };
  return {
    handleClick,
    handleError
  };
}
const _hoisted_1$g = {
  key: 0,
  class: "avatar-text"
};
const _hoisted_2$d = ["src", "alt"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.avatarClass),
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args))
  }, [
    $setup.textShow ? (openBlock(), createElementBlock("span", _hoisted_1$g, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    $setup.iconShow ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(["avatar-icon", $props.icon])
    }, null, 2)) : createCommentVNode("", true),
    $setup.srcShow ? (openBlock(), createElementBlock("img", {
      key: 2,
      src: $props.src,
      alt: $props.alt,
      style: normalizeStyle(`object-fit:${$props.fit}`),
      onError: _cache[0] || (_cache[0] = (...args) => $setup.handleError && $setup.handleError(...args))
    }, null, 44, _hoisted_2$d)) : createCommentVNode("", true)
  ], 2);
}
var bpAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i]]);
bpAvatar.install = function(Vue) {
  Vue.component(bpAvatar.name, bpAvatar);
};
const isHtmlEl = (e) => e && e.nodeType === 1;
const isInContainer = (target, container) => {
  if (!target || !container)
    return false;
  const isNotContainer = [window, document, document.documentElement, null, void 0].includes(container);
  const elClientReact = target.getBoundingClientRect();
  let containerClientRect = null;
  if (!isNotContainer) {
    containerClientRect = container.getBoundingClientRect();
  } else {
    containerClientRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elClientReact.top < containerClientRect.bottom && elClientReact.bottom > containerClientRect.top && elClientReact.right > containerClientRect.left && elClientReact.left < containerClientRect.right;
};
const getScrollContainer = (el, isVertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
const isScroll = (el, isVertical) => {
  const determinedDirection = isVertical === null || isVertical === void 0;
  const overflow = determinedDirection ? getStyle(el, "overflow") : isVertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x");
  return overflow.match(/(scroll|auto)/);
};
const getStyle = function(element, styleName) {
  if (!element || !styleName)
    return null;
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const style = element.style[styleName];
    if (style)
      return style;
    const computed2 = document.defaultView.getComputedStyle(element, "");
    return computed2 ? computed2[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};
const _sfc_main$i = {
  name: "bp-image",
  props: {
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    src: { type: String, default: "" },
    fit: { type: String, default: "cover" },
    lazy: { type: Boolean, default: false },
    radius: { type: [Number, String], default: "" },
    scrollContainer: { type: String, default: "" }
  },
  emits: ["load", "error"],
  setup(props, { emit }) {
    const state = reactive$1({
      id: "bp-image-" + Math.random().toString(36).substr(2),
      isLoadError: false,
      loading: true,
      imgWidth: 0,
      imgHeight: 0
    });
    let _scrollContainer = null;
    let _lazyLoadHandler = null;
    const container = ref(null);
    const loadImage = () => {
      state.loading = true;
      state.isLoadError = false;
      var image = new Image();
      image.onload = (e) => onComplete(e, image);
      image.onerror = () => onError(image);
      image.src = props.src;
    };
    watch(() => props.src, () => {
      loadImage();
    });
    const imgStyle = computed(() => {
      return `object-fit:${props.fit};border-radius:${props.radius}px`;
    });
    function onComplete(e, image) {
      state.imgWidth = image.width;
      state.imgHeight = image.height;
      state.loading = false;
      state.isLoadError = false;
      emit("load", e);
    }
    function onError(image) {
      state.loading = false;
      state.isLoadError = true;
      emit("error", image);
    }
    function onLazyLoad() {
      if (isInContainer(container.value, _scrollContainer)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    function addLazyLoadLintener() {
      const { scrollContainer } = props;
      if (isHtmlEl(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (typeof scrollContainer === "string" && scrollContainer !== "") {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(container.value);
      }
      if (_scrollContainer) {
        _lazyLoadHandler = throttle(onLazyLoad, 200);
        on(_scrollContainer, "scroll", _lazyLoadHandler);
        setTimeout(() => onLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!_scrollContainer || !_lazyLoadHandler)
        return;
      off(_scrollContainer, "scroll", _lazyLoadHandler);
      _scrollContainer = null;
      _lazyLoadHandler = null;
    }
    onMounted(() => {
      if (!props.lazy) {
        return loadImage();
      }
      nextTick(addLazyLoadLintener);
    });
    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener();
    });
    return __spreadProps(__spreadValues({}, toRefs$1(state)), {
      container,
      imgStyle
    });
  }
};
const _hoisted_1$f = ["id"];
const _hoisted_2$c = {
  key: 0,
  class: "bp-image-placeholder bp-image-inner"
};
const _hoisted_3$a = /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u4E2D");
const _hoisted_4$8 = {
  key: 1,
  class: "bp-image-error bp-image-inner"
};
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u5931\u8D25");
const _hoisted_6$3 = ["src"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.id,
    style: normalizeStyle(`width:${$props.width}px;height:${$props.height}px`),
    ref: "container",
    class: "bp-image"
  }, [
    _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
      renderSlot(_ctx.$slots, "placeholder", {}, () => [
        _hoisted_3$a
      ])
    ])) : _ctx.isLoadError ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
      renderSlot(_ctx.$slots, "error", {}, () => [
        _hoisted_5$3
      ])
    ])) : (openBlock(), createElementBlock("img", {
      key: 2,
      class: "bp-image-inner",
      src: $props.src,
      style: normalizeStyle($setup.imgStyle)
    }, null, 12, _hoisted_6$3))
  ], 12, _hoisted_1$f);
}
var bpImage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h]]);
bpImage.install = function(Vue) {
  Vue.component(bpImage.name, bpImage);
};
const _sfc_main$h = {
  name: "bp-item-bar",
  props: {
    itemList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  emits: {
    change: {}
  },
  setup(props, { emit }) {
    const activeItemIndex = ref(0);
    activeItemIndex.value = props.activeIndex;
    const handleItemClick = (item, index2) => {
      activeItemIndex.value = index2;
    };
    watch(activeItemIndex, () => {
      emit("change", {
        item: props.itemList[activeItemIndex.value],
        index: activeItemIndex.value
      });
    });
    return {
      activeItemIndex,
      handleItemClick
    };
  }
};
const _hoisted_1$e = { class: "bp-item-bar" };
const _hoisted_2$b = { class: "bp-item-bar-list" };
const _hoisted_3$9 = ["onClick"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    createElementVNode("div", _hoisted_2$b, [
      createElementVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.itemList, (item, index2) => {
          return openBlock(), createElementBlock("li", {
            key: `bp-item-${index2}`,
            onClick: ($event) => $setup.handleItemClick(item, index2),
            class: normalizeClass({ active: $setup.activeItemIndex == index2 })
          }, [
            createElementVNode("span", null, toDisplayString(item), 1)
          ], 10, _hoisted_3$9);
        }), 128))
      ])
    ])
  ]);
}
var bpItemBar = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g]]);
bpItemBar.install = function(Vue) {
  Vue.component(bpItemBar.name, bpItemBar);
};
const _sfc_main$g = {
  name: "bp-badge",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number,
      default: 0
    },
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "danger",
      validator: function(value) {
        return ["primary", "success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  },
  setup(props) {
    const { badgeText } = useBadge(props);
    const { className } = useClass(props);
    return {
      badgeText,
      className
    };
  }
};
function useBadge(props) {
  const badgeText = computed(() => {
    const isOverFlow = props.max !== 0 && typeof props.value === "number" && props.value > props.max;
    return isOverFlow ? `${props.max}+` : props.value;
  });
  return {
    badgeText
  };
}
function useClass(props) {
  const className = computed(() => {
    let name = ["bp-badge"];
    name.push(`bp-badge-${props.type}`);
    return name;
  });
  return {
    className
  };
}
const _hoisted_1$d = {
  key: 0,
  class: "bp-badge-dot"
};
const _hoisted_2$a = ["textContent"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return !$props.hidden ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass($setup.className)
  }, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(Transition, { name: "bp-fade-in" }, {
      default: withCtx(() => [
        $props.isDot ? (openBlock(), createElementBlock("span", _hoisted_1$d)) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, { name: "bp-fade-in" }, {
      default: withCtx(() => [
        !$props.isDot ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "bp-badge-value",
          textContent: toDisplayString($setup.badgeText)
        }, null, 8, _hoisted_2$a)) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 2)) : createCommentVNode("", true);
}
var bpBadge = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
bpBadge.install = function(Vue) {
  Vue.component(bpBadge.name, bpBadge);
};
const _sfc_main$f = {
  name: "bp-spin",
  props: {
    spinning: { type: Boolean, default: false },
    delay: { type: Number, default: 0 },
    radius: { type: [Number, String], default: 0 }
  },
  setup(props) {
    const loading = ref(false);
    watch(() => props.spinning, (val) => {
      if (val) {
        loading.value = val;
        return;
      }
      if (props.delay !== 0) {
        setTimeout(() => {
          loading.value = false;
        }, props.delay);
        return;
      }
      loading.value = false;
    }, {
      immediate: true
    });
    return {
      loading
    };
  }
};
const _hoisted_1$c = { class: "bp-spin-main" };
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("span", { class: "bp-icon-spin" }, [
  /* @__PURE__ */ createElementVNode("i", { class: "ri-loader-fill" })
], -1);
const _hoisted_3$8 = { class: "bp-spon-text" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "bp-fade-in" }, {
    default: withCtx(() => [
      $setup.loading ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "bp-spin",
        style: normalizeStyle(`border-radius:${$props.radius}px`)
      }, [
        createElementVNode("div", _hoisted_1$c, [
          _hoisted_2$9,
          createElementVNode("p", _hoisted_3$8, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ], 4)) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
var bpSpin = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e]]);
bpSpin.install = function(Vue) {
  Vue.component(bpSpin.name, bpSpin);
};
const _sfc_main$e = {
  name: "bp-popconfirm",
  directives: { clickOutside },
  setup() {
    const popShow = ref(false);
    const container = ref(null);
    const state = reactive$1({
      position: {
        bottom: "",
        left: ""
      }
    });
    const onClick = () => {
      container.value.offsetWidth;
      const elHeight = container.value.offsetHeight;
      state.position.bottom = `${elHeight + 10}px`;
      popShow.value = !popShow.value;
    };
    const onClickOutside = () => {
      console.log("[ popShow.value ]", popShow.value);
      if (!popShow.value)
        return;
      console.log("[ sss ]");
      popShow.value = false;
    };
    return __spreadValues({
      onClick,
      popShow,
      container,
      onClickOutside
    }, toRefs$1(state));
  }
};
const _hoisted_1$b = {
  class: "bp-popconfirm-container",
  ref: "container"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "bp-popconfirm",
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClick && $setup.onClick(...args))
  }, [
    $setup.popShow ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createElementVNode("div", {
        class: "bp-popconfirm-content",
        style: normalizeStyle(`bottom:${_ctx.position.bottom};left:${_ctx.position.left}`)
      }, " \u5C11\u65F6\u8BF5\u8BD7\u4E66 ", 4),
      createElementVNode("div", {
        class: "popconfirm-arrow",
        style: normalizeStyle(`bottom:${_ctx.position.bottom};`)
      }, null, 4)
    ], 64)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_1$b, [
      renderSlot(_ctx.$slots, "default")
    ], 512)
  ]);
}
var bpPopconfirm = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d]]);
bpPopconfirm.install = function(Vue) {
  Vue.component(bpPopconfirm.name, bpPopconfirm);
};
const _sfc_main$d = {
  name: "bp-tag",
  props: {
    type: { type: String, default: "default" },
    theme: { type: String, default: "light" }
  },
  setup(props) {
    const tagClazz = computed(() => {
      let name = ["bp-tag"];
      name.push(`tag-${props.theme}-${props.type}`);
      return name;
    });
    return {
      tagClazz
    };
  }
};
const _hoisted_1$a = { class: "bp-tag-inner" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.tagClazz)
  }, [
    createElementVNode("p", _hoisted_1$a, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var bpTag = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c]]);
bpTag.install = function(Vue) {
  Vue.component(bpTag.name, bpTag);
};
const _sfc_main$c = {
  name: "bp-dropdown-option",
  props: {
    modelValue: { type: Boolean, default: false },
    source: { type: Array, default: () => [] },
    label: { type: String, default: "label" },
    value: { type: String, default: "value" },
    optionArrowLeft: { type: Number, default: 24 }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = (item) => {
      if (item.disabled)
        return;
      emit("click", item);
    };
    return {
      onClick
    };
  }
};
const _hoisted_1$9 = { class: "select-item-box scro scro-1" };
const _hoisted_2$8 = { class: "bp-dropdown-option-container" };
const _hoisted_3$7 = ["title", "onClick"];
const _hoisted_4$7 = { class: "item" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "option-slide" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", _hoisted_1$9, [
        createElementVNode("div", {
          class: "option-arrow",
          style: normalizeStyle(`left:${$props.optionArrowLeft}%`)
        }, null, 4),
        createElementVNode("div", _hoisted_2$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.source, (item, index2) => {
            return openBlock(), createElementBlock("div", {
              class: "bp-dropdown-option",
              key: `option-${index2}`,
              title: item[$props.label],
              onClick: ($event) => $setup.onClick(item)
            }, [
              createElementVNode("div", _hoisted_4$7, [
                createElementVNode("p", {
                  class: normalizeClass(["item-content", { "item-disabled": item["disabled"] }])
                }, toDisplayString(item[$props.label]), 3)
              ])
            ], 8, _hoisted_3$7);
          }), 128))
        ])
      ], 512), [
        [vShow, $props.modelValue]
      ])
    ]),
    _: 1
  });
}
var bpDropdownOption = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b]]);
const triggerList = ["click", "hover"];
const _sfc_main$b = {
  name: "bp-dropdown",
  directives: { clickOutside },
  components: { bpDropdownOption },
  props: {
    options: { type: Array, default: [] },
    label: { type: String, default: "label" },
    value: { type: String, default: "value" },
    hideOnClick: { type: Boolean, default: true },
    hideArrow: { type: Boolean, default: false },
    optionArrowLeft: { type: Number, default: 24 },
    trigger: {
      type: String,
      default: "click",
      validator: (value) => triggerList.indexOf(value) !== -1
    }
  },
  emits: ["change", "visible-change"],
  setup(props, { emit }) {
    const optionShow = ref(false);
    const onClose = () => {
      if (!optionShow.value)
        return;
      optionShow.value = false;
      emit("visible-change", optionShow.value);
    };
    const onOpen = () => {
      if (optionShow.value)
        return;
      optionShow.value = true;
      emit("visible-change", optionShow.value);
    };
    const onClick = () => {
      if (props.trigger === "hover")
        return;
      optionShow.value ? onClose() : onOpen();
    };
    const onMouseEnter = () => {
      if (props.trigger === "click")
        return;
      onOpen();
    };
    const onMouseLeave = () => {
      if (props.trigger === "click")
        return;
      onClose();
    };
    const onOptionClick = (item) => {
      emit("change", item);
      if (props.hideOnClick)
        onClose();
    };
    return {
      optionShow,
      onClick,
      onClose,
      onMouseEnter,
      onMouseLeave,
      onOptionClick
    };
  }
};
const _hoisted_1$8 = { class: "bp-dropdown-inner-text" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_dropdown_option = resolveComponent("bp-dropdown-option");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "bp-dropdown",
    onMouseleave: _cache[3] || (_cache[3] = (...args) => $setup.onMouseLeave && $setup.onMouseLeave(...args))
  }, [
    createElementVNode("div", {
      class: "bp-dropdown-inner",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClick && $setup.onClick(...args)),
      onMouseenter: _cache[1] || (_cache[1] = (...args) => $setup.onMouseEnter && $setup.onMouseEnter(...args))
    }, [
      createElementVNode("p", _hoisted_1$8, [
        renderSlot(_ctx.$slots, "default"),
        !$props.hideArrow ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["ri-arrow-down-s-line", { open: $setup.optionShow }])
        }, null, 2)) : createCommentVNode("", true)
      ])
    ], 32),
    createVNode(_component_bp_dropdown_option, {
      modelValue: $setup.optionShow,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.optionShow = $event),
      optionArrowLeft: $props.optionArrowLeft,
      source: $props.options,
      label: $props.label,
      value: $props.value,
      onClick: $setup.onOptionClick
    }, null, 8, ["modelValue", "optionArrowLeft", "source", "label", "value", "onClick"])
  ], 32)), [
    [_directive_click_outside, $setup.onClose]
  ]);
}
var bpDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
bpDropdown.install = function(Vue) {
  Vue.component(bpDropdown.name, bpDropdown);
};
const _sfc_main$a = {
  name: "bp-alert",
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: "" },
    showIcon: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    closeable: { type: Boolean, default: true },
    closeText: { type: String, default: "" },
    type: {
      type: String,
      default: "danger",
      validator: function(value) {
        return ["primary", "success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive$1({
      visible: false
    });
    const iconType = ref({
      primary: "ri-information-fill",
      success: "ri-checkbox-circle-fill",
      warning: "ri-error-warning-fill",
      danger: "ri-close-circle-fill"
    });
    const onOpen = () => {
      if (state.visible)
        return;
      state.visible = true;
    };
    const onClose = function() {
      if (!state.visible)
        return;
      emit("update:modelValue", false);
    };
    const alertClassName = computed(() => {
      let className = ["bp-alert-content"];
      let typeName = "";
      props.light ? typeName = `alert-${props.type}-light` : typeName = `alert-${props.type}`;
      className.push(typeName);
      return className;
    });
    watch(() => props.modelValue, (val) => {
      val ? onOpen() : state.visible = false;
    }, {
      immediate: true
    });
    return __spreadProps(__spreadValues({}, toRefs$1(state)), {
      onClose,
      iconType,
      alertClassName
    });
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "bp-alert"
};
const _hoisted_2$7 = { class: "bp-alert-header" };
const _hoisted_3$6 = { class: "bp-alert-header-title" };
const _hoisted_4$6 = ["textContent"];
const _hoisted_5$2 = {
  key: 0,
  class: "ri-close-fill"
};
const _hoisted_6$2 = { key: 1 };
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = { class: "bp-alert-description" };
const _hoisted_9$1 = { class: "bp-alert-description-content" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("div", {
      class: normalizeClass($setup.alertClassName)
    }, [
      createElementVNode("div", _hoisted_2$7, [
        createElementVNode("p", _hoisted_3$6, [
          $props.showIcon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["icon", `${$setup.iconType[$props.type]}`])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("span", {
            class: "text",
            textContent: toDisplayString($props.title)
          }, null, 8, _hoisted_4$6)
        ]),
        $props.closeable ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "bp-alert-header-close",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClose && $setup.onClose(...args))
        }, [
          $props.closeText == "" ? (openBlock(), createElementBlock("i", _hoisted_5$2)) : createCommentVNode("", true),
          $props.closeText != "" ? (openBlock(), createElementBlock("span", _hoisted_6$2, toDisplayString($props.closeText), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]),
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_7$1, [
        createElementVNode("div", _hoisted_8$1, [
          createElementVNode("p", _hoisted_9$1, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ])) : createCommentVNode("", true)
    ], 2)
  ])) : createCommentVNode("", true);
}
var bpAlert = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
bpAlert.install = function(Vue) {
  Vue.component(bpAlert.name, bpAlert);
};
const _sfc_main$9 = {
  name: "bp-checkbox",
  props: {
    modelValue: { type: Boolean, default: false },
    name: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    customClick: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    value: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "click"],
  setup(props, { emit }) {
    const inputValue = ref("");
    const className = computed(() => {
      let name = ["bp-checkbox"];
      if (props.disabled) {
        name.push("bp-checkbox-disabled");
      }
      return name;
    });
    const innerClassName = computed(() => {
      let name = props.disabled ? ["bp-checkbox-inner-box-disabled"] : ["bp-checkbox-inner-box"];
      return name;
    });
    const onClick = () => {
      if (props.disabled) {
        return;
      }
      if (props.customClick) {
        emit("click");
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };
    return {
      className,
      innerClassName,
      onClick,
      inputValue
    };
  }
};
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("div", { class: "bp-checkbox-inner" }, null, -1);
const _hoisted_2$6 = [
  _hoisted_1$6
];
const _hoisted_3$5 = ["name"];
const _hoisted_4$5 = { class: "bp-checkbox-inner-text" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.className),
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.onClick && $setup.onClick(...args))
  }, [
    createElementVNode("div", {
      class: normalizeClass([
        $setup.innerClassName,
        { checked: $props.modelValue || $props.value, indeterminate: $props.indeterminate }
      ])
    }, _hoisted_2$6, 2),
    withDirectives(createElementVNode("input", {
      ref: "checkbox",
      type: "checkbox",
      name: $props.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputValue = $event)
    }, null, 8, _hoisted_3$5), [
      [vModelCheckbox, $setup.inputValue]
    ]),
    createElementVNode("div", _hoisted_4$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var bpCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8]]);
bpCheckbox.install = function(Vue) {
  Vue.component(bpCheckbox.name, bpCheckbox);
};
const _sfc_main$8 = {
  name: "bp-table",
  props: {
    cols: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dataSource: {
      type: Array,
      default: () => {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1$5 = { class: "bp-table" };
const _hoisted_2$5 = { class: "bp-table-inner" };
const _hoisted_3$4 = {
  key: 0,
  class: "bp-table-empty-tr"
};
const _hoisted_4$4 = ["colspan"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_spin = resolveComponent("bp-spin");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_bp_spin, { spinning: $props.loading }, null, 8, ["spinning"]),
    createElementVNode("div", _hoisted_2$5, [
      createElementVNode("table", null, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.cols, (item, index2) => {
              return openBlock(), createElementBlock("th", {
                key: `bp-table-thead-${index2}`,
                style: normalizeStyle(`width:${item.width};min-width:${item.minWidth}`)
              }, toDisplayString(item.title), 5);
            }), 128))
          ])
        ]),
        createElementVNode("tbody", null, [
          $props.dataSource.length == 0 ? (openBlock(), createElementBlock("tr", _hoisted_3$4, [
            createElementVNode("td", {
              colspan: $props.cols.length
            }, "\u6682\u65E0\u6570\u636E", 8, _hoisted_4$4)
          ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.dataSource, (item, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: `bp-table-tbody-tr-${index2}`
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.cols, (v, k) => {
                return openBlock(), createElementBlock("td", {
                  key: `bp-table-tbody-td-${index2}-${k}`
                }, [
                  !v.scopedSlots ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(item[v.key]), 1)
                  ], 64)) : renderSlot(_ctx.$slots, v.scopedSlots.customRender, {
                    key: 1,
                    row: item,
                    index: index2,
                    data: item[v.key]
                  })
                ]);
              }), 128))
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
var bpTable = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
bpTable.install = function(Vue) {
  Vue.component(bpTable.name, bpTable);
};
const _sfc_main$7 = {
  name: "bp-buttongroup",
  props: {
    round: { type: Boolean, default: false }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([$props.round ? "bp-buttongroup-round" : "bp-buttongroup"])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var bpButtongroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
bpButtongroup.install = function(Vue) {
  Vue.component(bpButtongroup.name, bpButtongroup);
};
const _sfc_main$6 = {
  name: "bp-pagination-ul",
  props: {
    currentPage: { type: [Number, String], default: 1 },
    total: { type: [Number, String], default: 0 },
    pageSize: { type: [Number, String], default: () => 10 },
    disabled: { type: Boolean, default: false },
    prevText: { type: String, default: "" },
    nextText: { type: String, default: "" }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const pageList = ref([]);
    const pageCount = ref(1);
    const isFirstPage = computed(() => props.currentPage === 1);
    const isLastPage = computed(() => props.currentPage === pageCount.value);
    const prevItemClass = computed(() => {
      let name = ["bp-pagination-item", "bp-prev-page"];
      if (isFirstPage.value)
        name.push("pagination-item-disabled");
      return name;
    });
    const nextItemClass = computed(() => {
      let name = ["bp-pagination-item", "bp-next-page"];
      if (isLastPage.value)
        name.push("pagination-item-disabled");
      return name;
    });
    const onClick = (pageNum = "") => {
      if (props.disabled || pageNum === "")
        return;
      emit("click", pageNum);
    };
    function setPageList() {
      pageList.value = [];
      const { total, pageSize } = props;
      const len = Math.ceil(total / pageSize);
      pageCount.value = len;
      for (let i = 0; i < len; i++) {
        pageList.value.push(i + 1);
      }
    }
    watch(() => props.total, () => {
      setPageList();
    }, {
      immediate: true
    });
    return {
      onClick,
      isFirstPage,
      isLastPage,
      pageList,
      pageCount,
      prevItemClass,
      nextItemClass
    };
  }
};
const _hoisted_1$4 = { class: "bp-pagination-container" };
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$3 = {
  key: 1,
  class: "ri-arrow-left-s-line"
};
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = {
  key: 1,
  class: "ri-arrow-right-s-line"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1$4, [
    createElementVNode("li", {
      class: normalizeClass($setup.prevItemClass),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.onClick($setup.isFirstPage ? "" : $props.currentPage - 1))
    }, [
      $props.prevText !== "" ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString($props.prevText), 1)) : (openBlock(), createElementBlock("i", _hoisted_3$3))
    ], 2),
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.pageList, (item, index2) => {
      return openBlock(), createElementBlock("li", {
        key: `page-item-${index2}`,
        class: normalizeClass([
          "bp-pagination-item",
          { "pagination-item-active": item === $props.currentPage },
          { "pagination-item-disabled": $props.disabled }
        ]),
        onClick: ($event) => $setup.onClick(item)
      }, [
        createElementVNode("span", null, toDisplayString(item), 1)
      ], 10, _hoisted_4$3);
    }), 128)),
    createElementVNode("li", {
      class: normalizeClass($setup.nextItemClass),
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.onClick($setup.isLastPage ? "" : $props.currentPage + 1))
    }, [
      $props.nextText !== "" ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString($props.nextText), 1)) : (openBlock(), createElementBlock("i", _hoisted_6$1))
    ], 2)
  ]);
}
var bpPaginationUl = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5]]);
const _sfc_main$5 = {
  name: "bp-pagination",
  components: {
    bpPaginationUl
  },
  props: {
    total: { type: [Number, String], default: 0 },
    pageSize: { type: [Number, String], default: () => 20 },
    current: { type: [Number, String], default: 1 },
    disabled: { type: Boolean, default: false },
    prevText: { type: String, default: "" },
    nextText: { type: String, default: "" },
    showTotal: { type: Boolean, default: false },
    sizesList: { type: Array, default: () => [10, 20, 50, 100] }
  },
  emits: ["pageChange"],
  setup(props, { emit }) {
    const currentPage = ref(1);
    const onPageClick = (pageNum = 1) => {
      currentPage.value = pageNum;
      emit("pageChange", pageNum);
    };
    const sizeOption = ref([]);
    watch(() => props.current, () => {
      currentPage.value = Number(props.current);
    }, {
      immediate: true
    });
    watch(() => props.sizesList, () => {
      sizeOption.value = [];
      for (let i = 0; i < props.sizesList.length; i++) {
        const item = props.sizesList[i];
        sizeOption.value.push({ label: `${item}\u6761/\u9875`, value: item });
      }
    }, {
      immediate: true
    });
    return {
      sizeOption,
      onPageClick,
      currentPage
    };
  }
};
const _hoisted_1$3 = { class: "bp-pagination" };
const _hoisted_2$3 = {
  key: 0,
  class: "bp-pagination-total"
};
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode(" \u5171 ");
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(" \u6761 ");
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_pagination_ul = resolveComponent("bp-pagination-ul");
  const _component_bp_select = resolveComponent("bp-select");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    $props.showTotal ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
      createElementVNode("p", null, [
        _hoisted_3$2,
        createElementVNode("span", null, toDisplayString($props.total), 1),
        _hoisted_4$2
      ])
    ])) : createCommentVNode("", true),
    createVNode(_component_bp_pagination_ul, {
      disabled: $props.disabled,
      total: $props.total,
      pageSize: $props.pageSize,
      "current-page": $setup.currentPage,
      "prev-text": $props.prevText,
      "next-text": $props.nextText,
      onClick: $setup.onPageClick
    }, null, 8, ["disabled", "total", "pageSize", "current-page", "prev-text", "next-text", "onClick"]),
    createVNode(_component_bp_select, {
      modelValue: $props.pageSize,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $props.pageSize = $event),
      "option-list": $setup.sizeOption
    }, null, 8, ["modelValue", "option-list"])
  ]);
}
var bpPagination = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
bpPagination.install = function(Vue) {
  Vue.component(bpPagination.name, bpPagination);
};
const _sfc_main$4 = {
  name: "bp-radio",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: [Boolean, String, Number], default: "" },
    name: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const className = computed(() => {
      let name = ["bp-radio"];
      if (props.disabled) {
        name.push("bp-radio-disabled");
      }
      return name;
    });
    const innerClassName = computed(() => {
      let name = props.disabled ? ["bp-radio-inner-box-disabled"] : ["bp-radio-inner-box"];
      if (props.modelValue === props.label) {
        name.push("checked");
      }
      return name;
    });
    const onClick = () => {
      if (props.disabled)
        return;
      emit("update:modelValue", props.label);
    };
    return {
      onClick,
      className,
      innerClassName
    };
  }
};
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("div", { class: "bp-radio-inner" }, null, -1);
const _hoisted_2$2 = [
  _hoisted_1$2
];
const _hoisted_3$1 = ["name", "value"];
const _hoisted_4$1 = { class: "bp-radio-inner-text" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.className),
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.onClick && $setup.onClick(...args))
  }, [
    createElementVNode("div", {
      class: normalizeClass($setup.innerClassName)
    }, _hoisted_2$2, 2),
    withDirectives(createElementVNode("input", {
      ref: "radio",
      type: "radio",
      name: $props.name,
      value: $props.label,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $props.modelValue = $event),
      "aria-hidden": "true"
    }, null, 8, _hoisted_3$1), [
      [vModelRadio, $props.modelValue]
    ]),
    createElementVNode("span", _hoisted_4$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var bpRadio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
bpRadio.install = function(Vue) {
  Vue.component(bpRadio.name, bpRadio);
};
const _sfc_main$3 = {
  name: "bp-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return ["primary", "success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      isChecked: this.value === this.activeValue
    };
  },
  computed: {
    innerClassName() {
      let name = ["bp-switch-inner"];
      if (this.isChecked) {
        name.push(`switch-${this.type}`);
        name.push("bp-switch-on");
      }
      if (this.disabled) {
        name.push("switch-disabled");
      }
      return name;
    }
  },
  watch: {
    value(val) {
      this.isChecked = val === this.activeValue;
    },
    isChecked(val) {
      this.$emit("input", this.isChecked ? this.activeValue : this.inactiveValue);
    }
  },
  methods: {
    handleSwitchClick() {
      if (this.disabled) {
        return;
      }
      this.isChecked = !this.isChecked;
    }
  }
};
const _hoisted_1$1 = { class: "bp-switch" };
const _hoisted_2$1 = ["value"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("span", {
      class: normalizeClass($options.innerClassName),
      value: $props.value,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleSwitchClick && $options.handleSwitchClick(...args))
    }, null, 10, _hoisted_2$1)
  ]);
}
var bpSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
bpSwitch.install = function(Vue) {
  Vue.component(bpSwitch.name, bpSwitch);
};
const _hoisted_1 = { class: "bp-date-picker" };
const _hoisted_2 = {
  key: 0,
  class: "bp-picker-inner"
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "picker-arrow" }, null, -1);
const _hoisted_4 = { class: "bp-picker-box" };
const _hoisted_5 = { class: "bp-picker-select" };
const _hoisted_6 = { class: "picker-select-left" };
const _hoisted_7 = { class: "picker-select-middle" };
const _hoisted_8 = { class: "picker-select-year" };
const _hoisted_9 = { class: "picker-select-month" };
const _hoisted_10 = { class: "picker-select-right" };
const _hoisted_11 = { class: "day-screen" };
const _hoisted_12 = { class: "screen-item sec-week" };
const _hoisted_13 = { class: "screen-item sec-days" };
const _hoisted_14 = ["onClick"];
const __default__ = {
  name: "bp-date-picker",
  directives: { clickOutside }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive$1({
      visibled: false,
      year: 2001,
      month: 1,
      day: 1,
      toYear: 2001,
      toMonth: 1,
      today: 1,
      prevMonth: [],
      nextMonth: [],
      days: [],
      weeks: [
        { cn: "\u65E5", en: "Sun" },
        { cn: "\u4E00", en: "Mon" },
        { cn: "\u4E8C", en: "Tud" },
        { cn: "\u4E09", en: "Wen" },
        { cn: "\u56DB", en: "Thu" },
        { cn: "\u4E94", en: "Fri" },
        { cn: "\u516D", en: "Sat" }
      ],
      months: [
        { cn: "\u4E00\u6708", en: "January", as: "Jun", days: 31 },
        { cn: "\u4E8C\u6708", en: "February", as: "Feb", days: 28 },
        { cn: "\u4E09\u6708", en: "March", as: "Mar", days: 31 },
        { cn: "\u56DB\u6708", en: "April", as: "Apr", days: 30 },
        { cn: "\u4E94\u6708", en: "May", as: "May", days: 31 },
        { cn: "\u516D\u6708", en: "June", as: "Jun", days: 30 },
        { cn: "\u4E03\u6708", en: "July", as: "Jul", days: 31 },
        { cn: "\u516B\u6708", en: "August", as: "Aug", days: 31 },
        { cn: "\u4E5D\u6708", en: "September", as: "Sep", days: 30 },
        { cn: "\u5341\u6708", en: "October", as: "Oct", days: 31 },
        { cn: "\u5341\u4E00\u6708", en: "November", as: "Nov", days: 30 },
        { cn: "\u5341\u4E8C\u6708", en: "December", as: "Dec", days: 31 }
      ]
    });
    const isActive = (day, month) => {
      const { modelValue: modelValue2 = "" } = props;
      if (!modelValue2)
        return;
      const val = modelValue2.split("-");
      if (day === Number(state.day) && Number(val[1]) === Number(month) && Number(val[0]) === Number(state.year)) {
        return {
          active: true
        };
      }
    };
    const isToday = (day, month) => {
      if (Number(state.today) === day && Number(month) === Number(state.toMonth) && Number(state.year) === Number(state.toYear)) {
        return {
          "active-today": true
        };
      }
    };
    const onOpen = () => {
      let date = new Date();
      state.toYear = date.getFullYear();
      state.toMonth = date.getMonth() + 1;
      state.today = date.getDate();
      if (!props.modelValue) {
        state.year = date.getFullYear();
        state.months[1].days = isLeapYear(state.year) ? 29 : 28;
        state.month = date.getMonth() + 1;
      } else {
        const { modelValue: modelValue2 } = props;
        const val = modelValue2.split("-");
        state.year = val[0];
        state.month = val[1];
        state.day = val[2];
      }
      renderScreen();
      state.visibled = true;
    };
    const onClose = () => {
      state.visibled = false;
    };
    const onMonthChange = (type = "specify", month = "") => {
      const isSpecify = type === "specify";
      if (!month && isSpecify)
        return;
      let m2 = state.month;
      if (isSpecify)
        m2 = month;
      if (type === "add")
        m2++;
      if (type === "reduce")
        m2--;
      if (isSpecify && (m2 < 1 || m2 > 12))
        m2 = 1;
      if (!isSpecify) {
        if (m2 > 12) {
          m2 = 1;
          onYearChange("add");
        }
        if (m2 < 1) {
          m2 = 12;
          onYearChange("reduce");
        }
      }
      state.month = m2;
      return renderScreen();
    };
    const onYearChange = (type = "specify", year = "") => {
      const isSpecify = type === "specify";
      if (!year && isSpecify)
        return;
      let y = state.year;
      if (type === "specify")
        m = year;
      if (type === "add")
        y++;
      if (type === "reduce")
        y--;
      if (y < 1e3 || y > 3e3)
        y = 1e3;
      return state.year = y;
    };
    const onSelectDay = (item = {}) => {
      state.day = item.day;
      if (item.type === "prev") {
        if (state.month == 1) {
          state.month = 12;
          state.year--;
        } else {
          state.month = state.month - 1;
        }
      } else if (item.type === "next") {
        if (state.month == 12) {
          state.month = 1;
          state.year++;
        } else {
          state.month = state.month + 1;
        }
      }
      emit("update:modelValue", `${state.year}-${state.month}-${state.day}`);
      onClose();
    };
    const renderScreen = () => {
      let arr = [];
      const { month } = state;
      const startWeek = new Date(state.year, state.month - 1, 1).getDay();
      const prevMonth = state.months[month === 1 ? 11 : month - 2];
      const prevLen = startWeek == 0 ? prevMonth.days - 7 : prevMonth.days - startWeek;
      for (let i = prevLen; i < prevMonth.days; i++) {
        arr.push({ month: month === 1 ? 12 : month - 1, day: i + 1, type: "prev" });
      }
      for (let i = 0; i < state.months[state.month - 1].days; i++) {
        arr.push({ month: Number(month), day: i + 1, type: "current" });
      }
      const nextLen = 42 - arr.length;
      for (let i = 0; i < nextLen; i++) {
        arr.push({ month: Number(month) + 1, day: i + 1, type: "next" });
      }
      state.days = arr;
    };
    const isLeapYear = (year) => {
      return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    };
    return (_ctx, _cache) => {
      const _component_bp_input = resolveComponent("bp-input");
      const _component_bp_button = resolveComponent("bp-button");
      const _directive_click_outside = resolveDirective("click-outside");
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_bp_input, {
          placeholder: "\u9009\u62E9\u65E5\u671F",
          readonly: "",
          onFocus: onOpen,
          modelValue: __props.modelValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef$1(modelValue) ? modelValue.value = $event : null)
        }, null, 8, ["modelValue"]),
        createVNode(Transition, { name: "option-slide" }, {
          default: withCtx(() => [
            unref(state).visibled ? (openBlock(), createElementBlock("div", _hoisted_2, [
              _hoisted_3,
              createElementVNode("div", _hoisted_4, [
                createElementVNode("div", _hoisted_5, [
                  createElementVNode("div", _hoisted_6, [
                    createVNode(_component_bp_button, {
                      onClick: _cache[1] || (_cache[1] = ($event) => onMonthChange("reduce")),
                      icon: "ri-arrow-left-s-line"
                    })
                  ]),
                  createElementVNode("div", _hoisted_7, [
                    createElementVNode("p", _hoisted_8, toDisplayString(unref(state).year) + "\u5E74", 1),
                    createElementVNode("p", _hoisted_9, toDisplayString(unref(state).months[unref(state).month - 1].cn), 1)
                  ]),
                  createElementVNode("div", _hoisted_10, [
                    createVNode(_component_bp_button, {
                      onClick: _cache[2] || (_cache[2] = ($event) => onMonthChange("add")),
                      icon: "ri-arrow-right-s-line"
                    })
                  ])
                ]),
                createElementVNode("div", _hoisted_11, [
                  createElementVNode("div", _hoisted_12, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).weeks, (item, index2) => {
                      return openBlock(), createElementBlock("span", {
                        class: "sec-week-item",
                        key: `week-${index2}`
                      }, toDisplayString(item["cn"]), 1);
                    }), 128))
                  ]),
                  createElementVNode("div", _hoisted_13, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).days, (item, index2) => {
                      return openBlock(), createElementBlock("span", {
                        key: `day-${index2}`,
                        onClick: ($event) => onSelectDay(item),
                        class: normalizeClass([
                          "day-item",
                          `${item.type}-month`,
                          isActive(item.day, item.month),
                          isToday(item.day, item.month)
                        ])
                      }, toDisplayString(item.day), 11, _hoisted_14);
                    }), 128))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])), [
        [_directive_click_outside, onClose]
      ]);
    };
  }
});
_sfc_main$2.install = function(Vue) {
  Vue.component(_sfc_main$2.name, _sfc_main$2);
};
const _sfc_main$1 = {
  name: "bp-form",
  props: {
    model: { type: Object, default: () => {
    } },
    rules: { type: Object, default: () => {
    } },
    layout: { type: String, default: "" },
    labelAlign: { type: String, default: "" },
    inline: { type: Boolean, default: false }
  },
  setup() {
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_col = resolveComponent("bp-col");
  const _component_bp_row = resolveComponent("bp-row");
  return openBlock(), createBlock(_component_bp_row, {
    class: normalizeClass(["bp-form", { "bp-form-inline": $props.inline }])
  }, {
    default: withCtx(() => [
      createVNode(_component_bp_col, { span: "24" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["class"]);
}
var bpForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
bpForm.install = function(Vue) {
  Vue.component(bpForm.name, bpForm);
};
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const targetMap = new WeakMap();
let trackOpBit = 1;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
Promise.resolve();
const _sfc_main = {
  name: "bp-form-item",
  props: {
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    isRequire: { type: Boolean, default: false },
    col: { type: [String, Object, Number], default: 0 }
  },
  setup(props) {
    const col = reactive({
      labelCol: "",
      innerCol: ""
    });
    if (typeof props.col === "Object") {
      col.labelCol = Number(props.col.span);
      col.innerCol = 24 - props.col.span;
    } else {
      col.labelCol = Number(props.col);
      col.innerCol = 24 - col.labelCol;
    }
    return __spreadValues({}, toRefs(col));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bp_col = resolveComponent("bp-col");
  const _component_bp_row = resolveComponent("bp-row");
  return openBlock(), createBlock(_component_bp_row, {
    class: "bp-form-item",
    type: "flex",
    justify: "start",
    gutter: "5",
    align: "top"
  }, {
    default: withCtx(() => [
      $props.col !== 0 ? (openBlock(), createBlock(_component_bp_col, {
        key: 0,
        class: "bp-form-item-label",
        span: _ctx.labelCol
      }, {
        default: withCtx(() => [
          createElementVNode("label", {
            class: normalizeClass(["bp-form-item-label-text", { "require-label": $props.isRequire }])
          }, toDisplayString($props.label), 3)
        ]),
        _: 1
      }, 8, ["span"])) : createCommentVNode("", true),
      createVNode(_component_bp_col, {
        span: _ctx.innerCol,
        class: "bp-form-item-inner"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["span"])
    ]),
    _: 3
  });
}
var bpFormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
bpFormItem.install = function(Vue) {
  Vue.component(bpFormItem.name, bpFormItem);
};
const components = [
  _sfc_main$s,
  _sfc_main$p,
  bpDialog,
  bpImage,
  bpMask,
  bpSelect,
  bpAvatar,
  bpItemBar,
  bpBadge,
  bpRow,
  bpCol,
  bpSpin,
  bpCheckbox,
  bpPopconfirm,
  bpTag,
  bpDropdown,
  bpAlert,
  bpTable,
  bpRadio,
  bpSwitch,
  bpButtongroup,
  bpPagination,
  _sfc_main$2,
  bpForm,
  bpFormItem
];
const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
var index = {
  install,
  bpButton: _sfc_main$s,
  bpSelect,
  bpImage,
  bpItemBar,
  bpDialog,
  bpAvatar,
  bpAlert,
  bpInput: _sfc_main$p,
  bpMask,
  bpTable,
  bpSpin,
  bpCheckbox,
  bpPopconfirm,
  bpTag,
  bpDropdown,
  bpRadio,
  bpSwitch,
  bpBadge,
  bpRow,
  bpCol,
  bpButtongroup,
  bpPagination,
  bpDatePicker: _sfc_main$2,
  bpForm,
  bpFormItem
};
export { index as default };