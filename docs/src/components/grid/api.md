<script setup lang="ts">
import { rowProps, colProps, rowSlots, colSlots } from "../../example/grid/api.ts"
</script>

## Row 属性

<api-block type="prop" :data="rowProps" />

## Col 属性

<api-block type="prop" :data="colProps" />

## Row 插槽

<api-block type="slot" :data="rowSlots" />

## Col 插槽

<api-block type="slot" :data="colSlots" />