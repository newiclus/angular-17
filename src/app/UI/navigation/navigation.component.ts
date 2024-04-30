import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { SigninComponent } from '@app/UI/button/signin/signin.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NzAvatarModule, NzButtonModule, NzDividerModule, SigninComponent],
  template: `
    <header class="bg-cyan-400">
      <div class="max-w-4xl mx-auto py-4 px-2 flex">
        <figure class="flex-1">
          <img src="assets/angular-icon.svg" alt="Angular logo" width="120" />
        </figure>

        <nav class="flex justify-end text-right">
          <a class="block mx-2 font-bold" nz-button nzType="text" href="/"
            >Careers</a
          >
          <nz-divider
            class="h-8"
            nzType="vertical"
            nzOrientation="center"
          ></nz-divider>

          <a class="block mx-2 font-bold" nz-button nzType="text" href="/browse"
            >Browse</a
          >

          <nz-divider
            class="h-8"
            nzType="vertical"
            nzOrientation="center"
          ></nz-divider>

          <a class="block mx-2 font-bold" nz-button nzType="text" href="/help"
            >Help Center</a
          >
          <nz-divider
            class="h-8"
            nzType="vertical"
            nzOrientation="center"
          ></nz-divider>

          @if (isLogged) {
          <figure>
            <nz-avatar
              [nzSize]="36"
              nzSrc="https://github.com/newiclus.png"
            ></nz-avatar>
          </figure>
          } @else {
          <app-signin-button
            size="default"
            [showIcon]="false"
            (click)="onSignIn()"
          ></app-signin-button>
          }
        </nav>
      </div>
    </header>
  `,
  styles: ``,
})
export class NavigationComponent {
  @Input() isLogged = false;
  @Output() signInEvent = new EventEmitter<boolean>();
  onSignIn = () => this.signInEvent.emit(true);
}
