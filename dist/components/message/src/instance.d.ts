import { AppContext } from "vue";
import { MessageItem } from "./type";
declare class MessageManager {
    private mask;
    private messageList;
    constructor(appContext?: AppContext);
    /**
     * 添加消息提示
     * @param {MessageItem} config
     * @returns
     */
    add: (config: MessageItem) => {
        remove: () => void;
    };
    /**
     * 移除消息提示
     * @param {string} id 消息id
     */
    remove: (id: string) => void;
    /** 清除消息列表 */
    clear: () => void;
}
export default MessageManager;
