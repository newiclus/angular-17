import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '@app/UI/navigation/navigation.component';
import { UserComponent } from '@app/features/user/user.component';
import { SubjectComponent } from '@app/features/subject/subject.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, UserComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  title = 'SchoolShop';
  isLogged = false;
  getLoginStatus = (status: boolean) => (this.isLogged = status);
}
