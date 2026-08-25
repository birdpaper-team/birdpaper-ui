import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const paginationProps = {
  /**
   * @type string
   * @description The layout config.
   * @default "prev, pager, next"
   */
  layout: { type: String, default: "total, prev, pager, next, sizes, jumper" },
  /**
   * @type boolean
   * @description Whether to disable the pagination.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type InputSize
   * @description Pagination sizes.
   * @default default
   */
  size: {
    type: String as PropType<InputSize>,
    default: "default",
  },
  /**
   * @type number
   * @description The total number of.
   * @default 0
   */
  total: { type: Number, default: 0 },
  /**
   * @type number
   * @description The current number of pages.
   * @default 1
   */
  current: { type: Number, default: 1 },
  /**
   * @type number
   * @description The size of entries per page.
   * @default 10
   */
  pageSize: { type: Number, default: () => 10 },
  /**
   * @type array
   * @description The sizes list.
   * @default [10, 20, 50, 100]
   */
  sizesList: { type: Array, default: () => [10, 20, 50, 100] },
  /**
   * @type string
   * @description The previous page button text.
   * @default ""
   */
  prevText: { type: String, default: "" },
  /**
   * @type string
   * @description The next page button text.
   * @default ""
   */
  nextText: { type: String, default: "" },
  /**
   * @type number
   * @description The maximum number of pages.
   * @default 7
   */
  maxPager: { type: Number, default: 7 },
  /**
   * @type string
   * @description The total copywriting template. Falls back to the ConfigProvider locale.
   * @default ''
   */
  totalTmpString: { type: String, default: "" },
  /**
   * @type string
   * @description The jumper copywriting template. Falls back to the ConfigProvider locale.
   * @default ''
   */
  jumperTmpString: { type: String, default: "" },
  /**
   * @type string
   * @description The sizes copywriting template. Falls back to the ConfigProvider locale.
   * @default ''
   */
  sizesTmpString: { type: String, default: "" },
};

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
