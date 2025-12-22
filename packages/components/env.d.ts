declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}

declare module '*.svg' {
  import { DefineComponent } from 'vue';
  const content: DefineComponent;
  export default content;
}

// 为图片文件添加更精确的类型声明
declare module "*.png" {
  const content: string; // 导出为URL字符串
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.bmp" {
  const content: string;
  export default content;
}

declare module "*.tiff" {
  const content: string;
  export default content;
}