import { RuleItem } from "async-validator";
import { PropType, Transition, computed, defineComponent, inject, ref, watch } from "vue";
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

    const formItemCls = computed(() => {
      let clsName = [name];
      if (messageVisible.value) clsName.push(`${name}-has-message`);

      return clsName;
    });

    const wrapperCls = computed(() => {
      let clsName = [`${name}-wrapper`];

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
    const clearError = () => {
      if (!messageVisible.value) return;

      messageVisible.value = false;
      message.value = "";
    };

    const resetFields = () => {
      // TODO
      ctx.value.model[props.field] = "";
      clearError();
    };

    watch(
      () => ctx.value.model[props.field],
      () => {
        messageVisible.value && clearError();
      }
    );

    const render = () => {
      return (
        <div class={formItemCls.value}>
          <div v-show={props.label || ctx.value.layout !== "inline"} class={`${name}-label`} style={props.labelStyle}>
            {isRequire.value ? <span class="label-asterisk"></span> : ""}
            <label>{props.label}</label>
          </div>
          <div class={wrapperCls.value} style={props.wrapperStyle}>
            {slots.default?.()}

            {messageVisible.value ? (
              <Transition name="form-error" appear>
                <div class={`${name}-message`} v-show={messageVisible.value}>
                  {message.value}
                </div>
              </Transition>
            ) : null}
          </div>
        </div>
      );
    };

    expose({ handleError, clearError, resetFields });
    return render;
  },
});
