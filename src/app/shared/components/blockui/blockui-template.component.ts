import { Component } from '@angular/core';

@Component({
  selector: 'app-block-temp',
  styles: [`
    :host {
      text-align: center;
      color: #ffffff;
    }
  `],
  template: `
    <div class="block-ui-template">
      <i class="fa-sharp fa-solid fa-n fa-4x" aria-hidden="true"></i>
      <div><strong>{{message}}</strong></div>
    </div>
  `
})
export class BlockTemplateComponent {
  message: any;
}
