import { computed, type Ref, type WritableComputedRef } from "vue";

/**
 * Simplify v-model handling in components.
 * Returns a writable computed that syncs with the model value and emits updates.
 *
 * @param model - The defineModel ref
 * @param propGetter - Optional getter to transform the value for reading
 * @param propSetter - Optional setter to transform the value for writing
 */
export function useVModel<T>(
  model: Ref<T>,
  propGetter?: (v: T) => T,
  propSetter?: (v: T) => T
): WritableComputedRef<T> {
  return computed({
    get: () => (propGetter ? propGetter(model.value) : model.value),
    set: (val) => {
      model.value = propSetter ? propSetter(val) : val;
    },
  });
}
