import theme from "../../../packages/style/common/theme.module.less";

export enum ColorType {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Gary = "gary",
}

export type ColorMap = Record<
  ColorType,
  {
    title: string;
    list: ColorThemeItem[];
  }
>;

export interface ColorThemeItem {
  name: string;
  value: string;
  color: string;
}

export const colorList: string[] = [
  ColorType.Primary,
  ColorType.Success,
  ColorType.Warning,
  ColorType.Danger,
  ColorType.Gary,
];

export const colorThemes: ColorMap = {
  primary: {
    title: "主色 / Primary",
    list: [
      { name: "primary-0", value: theme["primary-0"], color: theme["gary-10"] },
      { name: "primary-1", value: theme["primary-1"], color: theme["gary-10"] },
      { name: "primary-2", value: theme["primary-2"], color: theme["gary-10"] },
      { name: "primary-3", value: theme["primary-3"], color: theme["gary-10"] },
      { name: "primary-4", value: theme["primary-4"], color: theme["gary-10"] },
      { name: "primary-5", value: theme["primary-5"], color: theme["gary-10"] },
      { name: "primary-6", value: theme["primary-6"], color: theme["gary-1"] },
      { name: "primary-7", value: theme["primary-7"], color: theme["gary-1"] },
      { name: "primary-8", value: theme["primary-8"], color: theme["gary-1"] },
      { name: "primary-9", value: theme["primary-9"], color: theme["gary-1"] },
    ],
  },
  success: {
    title: "成功色 / Success",
    list: [
      { name: "success-0", value: theme["success-0"], color: theme["gary-10"] },
      { name: "success-1", value: theme["success-1"], color: theme["gary-10"] },
      { name: "success-2", value: theme["success-2"], color: theme["gary-10"] },
      { name: "success-3", value: theme["success-3"], color: theme["gary-10"] },
      { name: "success-4", value: theme["success-4"], color: theme["gary-10"] },
      { name: "success-5", value: theme["success-5"], color: theme["gary-10"] },
      { name: "success-6", value: theme["success-6"], color: theme["gary-1"] },
      { name: "success-7", value: theme["success-7"], color: theme["gary-1"] },
      { name: "success-8", value: theme["success-8"], color: theme["gary-1"] },
      { name: "success-9", value: theme["success-9"], color: theme["gary-1"] },
    ],
  },
  warning: {
    title: "警告色 / Warning",
    list: [
      { name: "warning-0", value: theme["warning-0"], color: theme["gary-10"] },
      { name: "warning-1", value: theme["warning-1"], color: theme["gary-10"] },
      { name: "warning-2", value: theme["warning-2"], color: theme["gary-10"] },
      { name: "warning-3", value: theme["warning-3"], color: theme["gary-10"] },
      { name: "warning-4", value: theme["warning-4"], color: theme["gary-10"] },
      { name: "warning-5", value: theme["warning-5"], color: theme["gary-10"] },
      { name: "warning-6", value: theme["warning-6"], color: theme["gary-1"] },
      { name: "warning-7", value: theme["warning-7"], color: theme["gary-1"] },
      { name: "warning-8", value: theme["warning-8"], color: theme["gary-1"] },
      { name: "warning-9", value: theme["warning-9"], color: theme["gary-1"] },
    ],
  },
  danger: {
    title: "危险色 / Danger",
    list: [
      { name: "danger-0", value: theme["danger-0"], color: theme["gary-10"] },
      { name: "danger-1", value: theme["danger-1"], color: theme["gary-10"] },
      { name: "danger-2", value: theme["danger-2"], color: theme["gary-10"] },
      { name: "danger-3", value: theme["danger-3"], color: theme["gary-10"] },
      { name: "danger-4", value: theme["danger-4"], color: theme["gary-10"] },
      { name: "danger-5", value: theme["danger-5"], color: theme["gary-10"] },
      { name: "danger-6", value: theme["danger-6"], color: theme["gary-1"] },
      { name: "danger-7", value: theme["danger-7"], color: theme["gary-1"] },
      { name: "danger-8", value: theme["danger-8"], color: theme["gary-1"] },
      { name: "danger-9", value: theme["danger-9"], color: theme["gary-1"] },
    ],
  },
  gary: {
    title: "中性色 / Gary",
    list: [
      { name: "gary-1", value: theme["gary-1"], color: theme["gary-10"] },
      { name: "gary-2", value: theme["gary-2"], color: theme["gary-10"] },
      { name: "gary-3", value: theme["gary-3"], color: theme["gary-10"] },
      { name: "gary-4", value: theme["gary-4"], color: theme["gary-10"] },
      { name: "gary-5", value: theme["gary-5"], color: theme["gary-10"] },
      { name: "gary-6", value: theme["gary-6"], color: theme["gary-10"] },
      { name: "gary-7", value: theme["gary-7"], color: theme["gary-1"] },
      { name: "gary-8", value: theme["gary-8"], color: theme["gary-1"] },
      { name: "gary-9", value: theme["gary-9"], color: theme["gary-1"] },
      { name: "gary-10", value: theme["gary-10"], color: theme["gary-1"] },
      { name: "gary-11", value: theme["gary-11"], color: theme["gary-1"] },
      { name: "gary-12", value: theme["gary-12"], color: theme["gary-1"] },
    ],
  },
};
