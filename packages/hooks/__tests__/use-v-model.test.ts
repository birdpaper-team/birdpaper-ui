import { describe, expect, it } from "vitest";
import { ref } from "vue";
import { useVModel } from "../src/use-v-model";

describe("useVModel", () => {
  it("reads and writes model value", () => {
    const model = ref("hello");
    const vm = useVModel(model);

    expect(vm.value).toBe("hello");
    vm.value = "world";
    expect(model.value).toBe("world");
  });

  it("applies getter transform", () => {
    const model = ref(5);
    const vm = useVModel(model, (v) => v * 2);

    expect(vm.value).toBe(10);
  });

  it("applies setter transform", () => {
    const model = ref(0);
    const vm = useVModel(model, undefined, (v) => v + 1);

    vm.value = 5;
    expect(model.value).toBe(6);
  });

  it("applies both getter and setter transforms", () => {
    const model = ref(10);
    const vm = useVModel(
      model,
      (v) => v / 2,
      (v) => v * 2
    );

    expect(vm.value).toBe(5);
    vm.value = 8;
    expect(model.value).toBe(16);
  });
});
