import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Microservice Frontend';
}
