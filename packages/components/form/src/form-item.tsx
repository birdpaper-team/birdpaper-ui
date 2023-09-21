import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormItem",
  props: {
    label: { type: String },
    field: { type: String },
    required: { type: Boolean, default: false },
    message: { type: String, default: "" },
  },
  setup(props, { emit, slots }) {
    const name = "bp-form-item";
    const showMessage = ref<boolean>(false);

    const formItemCls = computed(() => {
      let clsName = [name];

      return clsName;
    });

    const wrapperCls = computed(() => {
      let clsName = [`${name}-wrapper`];
      if (showMessage.value) clsName.push(`has-message`);

      return clsName;
    });

    const render = () => {
      return (
        <div class={formItemCls.value}>
          <div class={`${name}-label`}>
            <span class="label-asterisk"></span>
            <label>{props.label}</label>
          </div>
          <div class={wrapperCls.value}>
            {slots.default?.()}
            {showMessage.value ? (
              <div class={`${name}-message`}>
                <span>请填写内容</span>
              </div>
            ) : null}
          </div>
        </div>
      );
    };

    return render;
  },
});
