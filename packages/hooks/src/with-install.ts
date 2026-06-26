import type { App, Plugin, Component } from "vue";

export type WithInstall<T> = T & { install: (app: App) => void };

/**
 * Add an `install` method to a component, enabling `app.use(Component)`.
 *
 * @param component - The Vue component to enhance
 * @param name - Optional custom name (defaults to component.name)
 */
export function withInstall<T extends Component>(component: T, name?: string): WithInstall<T> {
  const comp = component as T & Plugin;
  comp.install = (app: App) => {
    const componentName = name || (component as any).name || (component as any).__name;
    if (componentName) {
      app.component(componentName, component);
    }
  };
  return comp as WithInstall<T>;
}
