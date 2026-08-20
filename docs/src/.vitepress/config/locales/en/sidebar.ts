const prefix = (link: string) => `/en${link}`;

export default {
  "/en/design/": [
    { text: "Introduction", link: prefix("/design/introduction") },
    { text: "Color", link: prefix("/design/color") },
    { text: "Principles", link: prefix("/design/principle") },
    { text: "Style Guide", link: prefix("/design/guide") },
    { text: "Dark Mode", link: prefix("/design/dark") },
    { text: "Design Resources", link: prefix("/design/resource") },
  ],
  "/en/develop/": [
    { text: "Install", link: prefix("/develop/install") },
    { text: "Quick Start", link: prefix("/develop/start") },
    { text: "Theming", link: prefix("/develop/theme") },
    { text: "Changelog", link: prefix("/develop/changelog") },
    { text: "Local Development", link: prefix("/develop/local-dev") },
    { text: "Contributing", link: prefix("/develop/pr") },
  ],

  "/en/components/": [
    {
      text: "Getting Started",
      items: [
        { text: "Catalog", link: prefix("/components/catalog") },
        { text: "Config Provider", link: prefix("/components/config") },
      ],
    },
    {
      text: "General",
      items: [
        { text: "Layout", link: prefix("/components/grid/") },
        { text: "Space", link: prefix("/components/space/") },
        { text: "Button", link: prefix("/components/button/") },
        { text: "Icon", link: prefix("/components/icon/") },
      ],
    },
    {
      text: "Data Entry",
      items: [
        { text: "Form", link: prefix("/components/form/") },
        { text: "Input", link: prefix("/components/input/") },
        { text: "Textarea", link: prefix("/components/textarea/") },
        { text: "Radio", link: prefix("/components/radio/") },
        { text: "Checkbox", link: prefix("/components/checkbox/") },
        { text: "Switch", link: prefix("/components/switch/") },
        { text: "Rate", link: prefix("/components/rate/") },
        { text: "Select", link: prefix("/components/select/") },
        { text: "VerifyCode", link: prefix("/components/verifyCode/") },
        { text: "DatePicker", link: prefix("/components/datePicker/") },
        { text: "TimePicker", link: prefix("/components/timePicker/") },
        { text: "ColorPicker", link: prefix("/components/colorPicker/") },
        { text: "InputNumber", link: prefix("/components/inputNumber/") },
        { text: "InputTag", link: prefix("/components/inputTag/") },
      ],
    },
    {
      text: "Navigation",
      items: [
        { text: "Link", link: prefix("/components/link/") },
        { text: "Pagination", link: prefix("/components/pagination/") },
        { text: "Dropdown", link: prefix("/components/dropdown/") },
        { text: "Steps", link: prefix("/components/steps/") },
      ],
    },
    {
      text: "Data Display",
      items: [
        { text: "Avatar", link: prefix("/components/avatar/") },
        { text: "Table", link: prefix("/components/table/") },
        { text: "Tag", link: prefix("/components/tag/") },
        { text: "Badge", link: prefix("/components/badge/") },
        { text: "Image", link: prefix("/components/image/") },
        { text: "Statistic", link: prefix("/components/statistic/") },
        { text: "Empty", link: prefix("/components/empty/") },
        { text: "Spin", link: prefix("/components/spin/") },
        { text: "Tooltip", link: prefix("/components/tooltip/") },
      ],
    },
    {
      text: "Feedback",
      items: [
        { text: "Alert", link: prefix("/components/alert/") },
        { text: "Message", link: prefix("/components/message/") },
        { text: "Popconfirm", link: prefix("/components/popconfirm/") },
        { text: "Modal", link: prefix("/components/modal/") },
        { text: "Drawer", link: prefix("/components/drawer/") },
        { text: "Trigger", link: prefix("/components/trigger/") },
      ],
    },
  ],
};
