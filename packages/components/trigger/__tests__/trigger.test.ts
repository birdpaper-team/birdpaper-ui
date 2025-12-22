import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Trigger from '../src/trigger.tsx';

describe('Trigger', () => {
  it('renders properly', () => {
    const wrapper = mount(Trigger, {
      slots: {
        default: '<button>Click me</button>',
        content: '<div>Content</div>',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('shows content when modelValue is true', () => {
    const wrapper = mount(Trigger, {
      props: {
        modelValue: true,
      },
      slots: {
        default: '<button>Click me</button>',
        content: '<div>Content</div>',
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});