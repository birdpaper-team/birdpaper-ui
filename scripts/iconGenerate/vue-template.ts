export const getIconVueComponent = ({
  name,
  componentName,
  svgHtml,
}: {
  name: string;
  componentName: string;
  svgHtml: string;
}) =>
  // language=Vue
  // prettier-ignore
  `<template>
  ${svgHtml}
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: '${componentName}',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 旋转角度 */
    rotate: { type: Number },
    /** 是否旋转 */
    spin: { type: Boolean },
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const name = 'bp-icon';

    const iconClass = computed(() => [name, \`\${name}-${name.replace('icon-', '')}\`, { [\`\${name}-spin\`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.width = props.size);
        props.size && (styles.height = props.size);
        props.rotate && (styles.transform = \`rotate(\${props.rotate}deg)\`);

        return styles;
    });

    const onClick = (ev: MouseEvent) => {
      emit('click', ev);
    };

    return {
      iconClass,
      innerStyle,
      onClick,
    };
  }
});
</script>
`;

export const getComponentIndex = ({ name, componentName }: { name: string; componentName: string }) => {
  return `import type { App } from 'vue';
import _${componentName} from './${name}.vue';

const ${componentName} = Object.assign(_${componentName}, {
  install: (app: App) => {
    app.component(_${componentName}.name, _${componentName});
  }
});

export default ${componentName};`
};

export const getBpVueIcon = ({ imports, components }: { imports: string[]; components: string[] }) =>
  // language=TypeScript
  // prettier-ignore
  `import type { App, Plugin } from 'vue';
${imports.join('\n')}

const icons: Record<string, Plugin> = {
  ${components.join(',\n  ')}
};

const install = (app: App) => {
  for (const key of Object.keys(icons)) {
    app.use(icons[key]);
  }
};

const BpVueIcon = {
  ...icons,
  install
};

export default BpVueIcon;
`;

export const getIndex = ({ exports }: { exports: string[] }) =>
  // language=TypeScript
  // prettier-ignore
  `export { default } from './birdpaper-ui-icon';
${exports.join('\n')}
export type {} from './icon-components';
`;

export const getType = ({ exports }: { exports: string[] }) =>
  `// @ts-nocheck

declare module 'vue' {
  export interface GlobalComponents {
${exports.map(item => `${" ".repeat(4)}${item}`).join("\n")}
  }
}

export {};
`;
