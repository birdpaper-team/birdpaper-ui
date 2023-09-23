import { PropType, computed, defineComponent, Comment, Fragment, h, ref } from "vue";
import { FormLayout } from "./types";
import { getAllElements } from "../../../utils/dom";
import Schema, { RuleItem, ValidateCallback, ValidateError } from "async-validator";
import { getValidateInfo } from "./core";

export default defineComponent({
  name: "Form",
  props: {
    model: { type: Object, default: () => {} },
    rules: { type: Object as PropType<Record<string, RuleItem[]>> },
    layout: { type: String as PropType<FormLayout>, default: "horizontal" },
    labelStyle: { type: [Object, String], default: "" },
    wrapperStyle: { type: [Object, String], default: "" },
  },
  setup(props, context) {
    const name = "bp-form";

    const cls = computed(() => {
      let clsName = [name];
      clsName.push(`${name}-${props.layout}`);

      return clsName;
    });

    const formItemRef = ref<any>({});

    /**
     * 表单校验
     * @param callback 完成时的回调
     * @returns Promise<undefined|ValidateError[]>
     */
    const validate = async (callback?: ValidateCallback): Promise<undefined | ValidateError[]> => {
      return new Promise(resove => {
        const rules = getValidateInfo(props.rules, context?.slots);
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

    context.expose({ validate });
    const render = () => {
      const children = getAllElements(context.slots.default?.(), true).filter(
        item => item.type !== Comment && (item.type as any).name === "BpFormItem"
      );
      return (
        <div class={cls.value}>
          {children.map((child, index) => {
            const FormItem = Object.assign({}, child);

            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {h(FormItem, {
                  ref: (el)=>{formItemRef.value[child.props?.field] = el},
                })}
              </Fragment>
            );
          })}
        </div>
      );
    };

    return render;
  },
});
