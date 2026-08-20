<script lang="ts">
import Usage from "../../example/button/usage.vue";
</script>
<Usage />

## Basic Usage

Supports 5 types: `normal` - <b>normal (default)</b>, `secondary` - <b>secondary</b>, `plain` - <b>plain</b>, `dashed` - <b>dashed</b>, `text` - <b>text</b>.

<demo-block src="button/basic">

<<< @/en/example/button/basic.vue

</demo-block>

## Shape

Supports 3 shapes: `square` - <b>square (default)</b>, `round` - <b>round</b>, `circle` - <b>circle</b>.

<demo-block src="button/shape">

<<< @/en/example/button/shape.vue

</demo-block>

## Status

Supports 5 statuses: `gray` - <b>gray</b>, `primary` - <b>primary (default)</b>, `success` - <b>success</b>, `warning` - <b>warning</b>, `danger` - <b>danger</b>.

<demo-block src="button/status">

<<< @/en/example/button/status.vue

</demo-block>

## Size

Supports 4 sizes: `mini` - <b>mini</b>, `small` - <b>small</b>, `default` - <b>default</b>, `large` - <b>large</b>.

<demo-block src="button/size">

<<< @/en/example/button/size.vue

</demo-block>

## Loading

Use `loading` and `loading-icon` to show a loading state.

<demo-block src="button/loading">

<<< @/en/example/button/loading.vue

</demo-block>

::: info Tip
`loading-icon` accepts a number from 1-5 or a custom Icon `Component`.
:::

## Icon Button

Set an icon with the `icon` prop.

<demo-block src="button/icon">

<<< @/en/example/button/icon.vue

</demo-block>

## Button Group

Group related buttons for clearer layout and actions.

<demo-block src="button/group">

<<< @/en/example/button/group.vue

</demo-block>
