import { RuleItem } from "async-validator";
import { PropType, computed, defineComponent, inject, ref } from "vue";
import { FormContext, FormInjectionKey } from "./types";

export default defineComponent({
  name: "FormItem",
  props: {
    label: { type: String },
    field: { type: String },
    rules: { type: Array as PropType<RuleItem[]>, default: () => [] },
    labelStyle: { type: [Object, String], default: "" },
    wrapperStyle: { type: [Object, String], default: "" },
  },
  setup(props, { slots, expose }) {
    const name = "bp-form-item";
    const messageVisible = ref<boolean>(false);
    const ctx = ref<FormContext>();
    const message = ref<string>("");

    ctx.value = inject(FormInjectionKey, null);
    // console.log("[ ctx.value ]-21", ctx.value.model[props.field]);

    const formItemCls = computed(() => {
      let clsName = [name];

      return clsName;
    });

    const wrapperCls = computed(() => {
      let clsName = [`${name}-wrapper`];
      if (messageVisible.value) clsName.push(`has-message`);

      return clsName;
    });

    const isRequire = computed(() => {
      return props.rules.some(item => {
        return item.required;
      });
    });

    const handleError = (msg: string) => {
      message.value = msg;
      messageVisible.value = true;
    };

    const resetFields = () => {
      ctx.value.model[props.field] = ''
    };

    const render = () => {
      return (
        <div class={formItemCls.value}>
          <div class={`${name}-label`} style={props.labelStyle}>
            {isRequire.value ? <span class="label-asterisk"></span> : ""}
            <label>{props.label}</label>
          </div>
          <div class={wrapperCls.value} style={props.wrapperStyle}>
            {slots.default?.()}
            {messageVisible.value ? (
              <div class={`${name}-message`}>
                <span>{message.value}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    };

    expose({ handleError,resetFields });
    return render;
  },
});
