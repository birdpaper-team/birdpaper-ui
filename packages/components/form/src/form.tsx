import { PropType, computed, defineComponent, Comment, Fragment, h, ref, provide } from "vue";
import { FormInjectionKey, FormLayout } from "./types";
import { getAllElements } from "../../../utils/dom";
import Schema, { RuleItem, ValidateCallback, ValidateError } from "async-validator";
import { getValidateInfo } from "./core";

export default defineComponent({
  name: "Form",
  props: {
    model: { type: Object, default: () => {} },
    rules: { type: Object as PropType<Record<string, RuleItem[]>> },
    layout: { type: String as PropType<FormLayout>, default: "horizontal" },
    labelCol: { type: Number, default: 4 },
    wrapperCol: { type: Number, default: 20 },
  },
  setup(props, { slots, expose }) {
    const name = "bp-form";

    provide(FormInjectionKey, {
      model: props.model,
      layout: props.layout,
    });

    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.layout}`);

      return clsName;
    });

    const formRef = ref();
    const formItemRef = ref({});

    /**
     * 表单校验
     * @param callback 完成时的回调
     * @returns Promise<undefined|ValidateError[]>
     */
    const validate = async (callback?: ValidateCallback): Promise<undefined | ValidateError[]> => {
      return new Promise(resove => {
        const rules = getValidateInfo(props.rules, slots);
        const validator = new Schema(rules || {});

        const defaultCallback = (errors: ValidateError[] | null) => {
          if (errors) {
            for (let i = 0; i < errors.length; i++) {
              const { field, message } = errors[i];
              formItemRef.value[field].handleError(message);
              console.warn(`BpForm validate - [ ${field} ]`, message);
            }
            resove(errors);
          }

          resove(undefined);
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
      // TODO
    };

    const render = () => {
      const children = getAllElements(slots.default?.(), true).filter(
        item => item.type !== Comment && (item.type as any).name === "BpFormItem"
      );
      return (
        <form ref={formRef} class={cls.value}>
          {children.map((child, index) => {
            const FormItem = Object.assign({}, child);

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(FormItem, {
                  gutter: props.layout !== "vertical" ? 4 : 0,
                  labelCol: props.layout === "vertical" ? 24 : props.labelCol,
                  wrapperCol: props.layout === "vertical" ? 24 : props.wrapperCol,
                  ref: el => {
                    child.props?.field && (formItemRef.value[child.props?.field] = el);
                  },
                })}
              </Fragment>
            );
          })}
        </form>
      );
    };

    expose({ validate, clearValidate, resetFields });
    return render;
  },
});
