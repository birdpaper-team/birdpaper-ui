import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormItem",
  props: {
    label: { type: String },
    field: { type: String },
    required: { type: Boolean, default: false },
    message: { type: String, default: "" },
    rules: { type: Object },
    labelStyle: { type: [Object, String], default: "" },
    wrapperStyle: { type: [Object, String], default: "" },
  },
  setup(props, { emit, slots }) {
    const name = "bp-form-item";
    const showMessage = ref<boolean>(false);
    const defaultMessage = `${props.field} is unvalidate`;

    const formItemCls = computed(() => {
      let clsName = [name];

      return clsName;
    });

    const wrapperCls = computed(() => {
      let clsName = [`${name}-wrapper`];
      if (showMessage.value) clsName.push(`has-message`);

      return clsName;
    });

    const isRequire = computed(() => {
      return props.required;
    });
    const render = () => {
      return (
        <div class={formItemCls.value}>
          <div class={`${name}-label`} style={props.labelStyle}>
            {isRequire.value ? <span class="label-asterisk"></span> : ""}
            <label>{props.label}</label>
          </div>
          <div class={wrapperCls.value} style={props.wrapperStyle}>
            {slots.default?.()}
            {showMessage.value ? (
              <div class={`${name}-message`}>
                <span>{props.message || defaultMessage}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    };

    return render;
  },
});
