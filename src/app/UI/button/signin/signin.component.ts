import { Component, Input } from '@angular/core';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-signin-button',
  standalone: true,
  imports: [NzButtonModule],
  template: `
    <button
      class="border-slate-950 font-bold px-4 hover:shadow-solid hover:text-block w-32"
      (click)="click()"
      nz-button
      [nzSize]="size"
    >
      <span class="align-super mr-2">Sign In</span>
      @if (showIcon) {
      <b class="material-symbols-outlined">arrow_forward</b>
      }
    </button>
  `,
})
export class SigninComponent {
  @Input() size: NzButtonSize = 'large';
  @Input() click = () => void 0;
  @Input() showIcon = true;
}
