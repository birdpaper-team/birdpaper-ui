import { RuleItem } from "async-validator";
import { PropType, Transition, computed, defineComponent, inject, ref, watch } from "vue";
import { FormContext, FormInjectionKey } from "./types";

export default defineComponent({
  name: "FormItem",
  props: {
    label: { type: String },
    field: { type: String },
    rules: { type: Array as PropType<RuleItem[]>, default: () => [] },
    labelCol: { type: Number, default: 4 },
    wrapperCol: { type: Number, default: 20 },
    gutter: { type: Number, default: 4 },
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
        <bp-row class={formItemCls.value} gutter={props.gutter}>
          <bp-col span={props.labelCol} v-show={props.label || ctx.value.layout !== "inline"} class={`${name}-label`}>
            {isRequire.value ? <span class="label-asterisk"></span> : ""}
            <label>{props.label}</label>
          </bp-col>
          <bp-col span={props.wrapperCol} class={wrapperCls.value}>
            {slots.default?.()}

            {messageVisible.value ? (
              <Transition name="form-error" appear>
                <div class={`${name}-message`} v-show={messageVisible.value}>
                  {message.value}
                </div>
              </Transition>
            ) : null}
          </bp-col>
        </bp-row>
      );
    };

    expose({ handleError, clearError, resetFields });
    return render;
  },
});
