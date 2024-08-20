export interface ConfigProviderProps {
  prefix: string;
  /** Custom component namespace. */
  namespace: string;
}

export type ConfigProviderContext = Partial<ConfigProviderProps>;
