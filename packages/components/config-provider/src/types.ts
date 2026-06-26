export type ComponentSize = "mini" | "small" | "default" | "large";

export interface ConfigProviderProps {
  /** Component name prefix when registering globally (e.g. "Bp" → <BpButton>). */
  prefix: string;
  /** Custom CSS namespace for BEM class names (default: "bp"). */
  namespace: string;
  /** Global locale language code (e.g. "zh-CN", "en"). */
  locale: string;
  /** Global default size for all form-related components. */
  size: ComponentSize;
  /** Base z-index value for popup components (Modal, Drawer, Tooltip, Message). */
  zIndex: number;
  /** Default empty-state text for Table, Select, Empty, etc. */
  emptyText: string;
}

export type ConfigProviderContext = Partial<ConfigProviderProps>;
