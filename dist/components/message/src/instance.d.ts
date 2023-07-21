import { AppContext } from "vue";
import { MessageConfig } from "./type";
declare class MessageManager {
    private container;
    private readonly messageList;
    constructor(appContext?: AppContext);
    /**
     * 添加消息提示
     * @param {MessageConfig} config
     * @returns
     */
    add: (config: MessageConfig) => {
        close: () => void;
    };
    /**
     * 移除消息提示
     * @param {string | number} id 消息id
     */
    remove: (id: string | number) => void;
    clear: () => void;
}
export default MessageManager;
