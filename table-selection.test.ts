import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import Table from "./packages/components/table/src/table.vue";
import TableColumn from "./packages/components/table/src/components/table-column.vue";

describe("Table Selection", () => {
  const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  const columnsSlot = () => [h(TableColumn, { title: "ID", dataIndex: "id" })];

  it("emits selection events in radio mode", async () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "id",
        rowSelection: { type: "radio" },
      },
      slots: {
        columns: columnsSlot,
      },
    });

    const firstRadio = wrapper.find(".bp-radio");
    await firstRadio.trigger("click");
    await nextTick();

    const selectionChangeEvents = wrapper.emitted("selection-change");
    const selectEvents = wrapper.emitted("select");

    expect(selectionChangeEvents?.length).toBeGreaterThan(0);
    expect(selectionChangeEvents?.[0]?.[0]).toEqual([1]);

    expect(selectEvents?.length).toBeGreaterThan(0);
    expect(selectEvents?.[0]?.[0]).toEqual([1]);
    expect(selectEvents?.[0]?.[1]).toBe(1);
  });

  it("select-all toggle emits selected and empty arrays", async () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "id",
        rowSelection: { type: "checkbox" },
      },
      slots: {
        columns: columnsSlot,
      },
    });

    const headerCheckbox = wrapper.find(".bp-table-header-wrap .bp-checkbox");
    await headerCheckbox.trigger("click");
    await nextTick();

    await headerCheckbox.trigger("click");
    await nextTick();

    const selectionChangeEvents = wrapper.emitted("selection-change") || [];

    expect(selectionChangeEvents.length).toBeGreaterThanOrEqual(2);
    expect(selectionChangeEvents[0]?.[0]).toEqual([1, 2]);
    expect(selectionChangeEvents[1]?.[0]).toEqual([]);
  });

  it("header checkbox shows indeterminate when partially selected", async () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "id",
        rowSelection: { type: "checkbox" },
        selectedKeys: [1],
      },
      slots: {
        columns: columnsSlot,
      },
    });

    await nextTick();

    const minusIcon = wrapper.find(".bp-table-header-wrap .bp-icon-subtract-line");
    const checkIcon = wrapper.find(".bp-table-header-wrap .bp-icon-check-line");

    expect(minusIcon.exists()).toBe(true);
    expect(checkIcon.exists()).toBe(false);
  });
});
