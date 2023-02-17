module.exports = {
  allowBreakingChanges: ["Feat", "Fix"],
  types: [
    {
      name: "Feat",
      value: "Feat",
    },
    {
      name: "Fix",
      value: "Fix",
    },
    {
      name: "Docs",
      value: "Docs",
    },
    {
      name: "Optim",
      value: "Optim",
    },
    {
      name: "Build",
      value: "Build",
    },
    {
      name: "CI",
      value: "CI",
    },
    {
      name: "Merge",
      value: "Merge",
    },
  ],
  messages: {
    type: "请选择提交类型",
    customScope: "请选择修改范围(可选)",
    subject: "请简要描述提交(必填)",
    body: "请输入详细描述(可选)",
    footer: "请输入要关闭的issue(可选)",
    confirmCommit: "确认以上信息提交?(y/n)",
  },
  allowCustomScopes: true,
  scopes: [{ name: "packages" }, { name: "docs" }, { name: "config" }],
  skipQuestions: ["body", "footer"],
  subjectLimit: 72,
};
