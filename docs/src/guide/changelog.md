# 更新日志

<script setup lang="ts">
import {eventTrack, goToLink} from "../../components/util/helper.ts";

const  handleClick = ()=>{
  const url = 'https://birdpaper.feishu.cn/base/XuwfbzYJZaXsQ4shv6rcl1J4nNb';

  eventTrack('feishu_product_plan');
  return goToLink(url);
}
</script>

`birdpaper-ui` 遵循 Semver 语义化版本规范。如果你想了解该项目的开发，可以访问 <a @click="handleClick">产品计划</a>

::: timeline 2023-11-07

<!--@include: ../change-log/2.1.5.md-->

:::
::: timeline 2023-11-02

<!--@include: ../change-log/2.1.4.md-->

:::
::: timeline 2023-10-28

<!--@include: ../change-log/2.1.3.md-->

:::
::: timeline 2023-10-12

<!--@include: ../change-log/2.1.2.md-->

:::
::: timeline 2023-10-10

<!--@include: ../change-log/2.1.1.md-->

:::
::: timeline 2023-10-08

<!--@include: ../change-log/2.1.0.md-->

:::
::: timeline 2023-08-30

<!--@include: ../change-log/2.0.3.md-->

:::
::: timeline 2023-08-20

<!--@include: ../change-log/2.0.2.md-->

:::
::: timeline 2023-08-12

<!--@include: ../change-log/2.0.0.md-->

:::
