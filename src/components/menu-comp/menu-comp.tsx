import { Component } from '@stencil/core';

@Component({
  tag: 'menu-comp',
  styleUrl: 'menu-comp.css',
  shadow: true
})
export class menuComponent {

  render() {
    return <nav class="nav">
      <a href="/home">Home</a>
      <a href="/home">Home</a>
    </nav>;
  }
}
