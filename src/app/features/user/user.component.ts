import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { SigninComponent } from '@app/UI/button/signin/signin.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NzButtonModule, NzAvatarModule, SigninComponent],
  templateUrl: './user.component.html',
  styles: `
    button:hover b {
      padding-left: 6px;
    }
  `,
})
export class UserComponent {
  username = 'Newiclus';
  isLogged = false;
  login = () => (this.isLogged = true);
}
