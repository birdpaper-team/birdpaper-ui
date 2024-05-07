<script setup lang="ts">
  import props from "../example/verifyCode/props.ts";
  import events from "../example/verifyCode/events.ts";
</script>

# 验证码 VerifyCode

### 基础用法
验证码输入框的基础用法
<demo-block src="example/verifyCode/basic" stack-blitz-name="verifycode-basic"></demo-block>

### 不同状态
支持 `disabled`、`readonly`、`is-danger` 三个状态
<demo-block src="example/verifyCode/status" stack-blitz-name="verifycode-status"></demo-block>


### 匿文模式
同个设置 `is-password` 使用匿文模式
<demo-block src="example/verifyCode/password" stack-blitz-name="verifycode-password"></demo-block>

### VerifyCode 属性

<table-block type="props" :data="props"></table-block>

### VerifyCode 事件

<table-block type="events" :data="events"></table-block>