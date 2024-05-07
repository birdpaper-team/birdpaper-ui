import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import verifyCode from "./src/verifyCode.vue";

verifyCode.name = getComponentsPrefix() + verifyCode.name;

const VerifyCode = Object.assign(verifyCode, {
  install: (app: App) => {
    app.component(verifyCode.name, verifyCode);
  },
});

export type VerifyCodeInstance = InstanceType<typeof verifyCode>;
export default VerifyCode;
