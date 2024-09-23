import _space from "./src/space";

export const Space = _space;

export * from "./src/types";

export type SpaceInstance = InstanceType<typeof Space>;
export default Space;
