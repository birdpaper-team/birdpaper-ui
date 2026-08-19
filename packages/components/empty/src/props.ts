import { ExtractPropTypes } from "vue";

export const emptyProps = {
  /**
   * @type string
   * @description Content text. Falls back to ConfigProvider emptyText.
   */
  content: { type: String },
};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
