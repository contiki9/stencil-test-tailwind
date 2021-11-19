import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() color: string = 'red-500';

  render() {
    const { color } = this;
    const style = {
      [`text-2xl`]: true,
      [`text-${color}`]: true,
    };
    return <div class={style}>tailwind</div>;
  }
}
