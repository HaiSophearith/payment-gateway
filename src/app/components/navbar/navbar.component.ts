import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  closeOtherButtons(route: string) {
    const currentUrl = this.router.url;

    // If the clicked button is not already active, close the other button
    if (currentUrl !== `/${route}`) {
      // Navigate to the clicked button's route
      this.router.navigateByUrl(`/${route}`);
    }
  }
}
