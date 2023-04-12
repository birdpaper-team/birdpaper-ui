const DEFAULT_PREFIX = "Bp";

export const getComponentsPrefix = (name?: string) => {
  return name ?? DEFAULT_PREFIX;
};
