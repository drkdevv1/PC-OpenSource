import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContentComponent } from './public/components/header-content/header-content.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { PeopleListComponent } from "./actors/components/people-list/people-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderContentComponent, FooterContentComponent, PeopleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc-pre-202401-si729-pc1-ws53-u202213076';
}
