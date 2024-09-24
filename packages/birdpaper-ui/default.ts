import { installer } from "./installer";
import Components from "./components";
import Plugins from "./plugins";

export default installer([...Components, ...Plugins]);
