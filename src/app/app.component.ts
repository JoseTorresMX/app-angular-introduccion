import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from "./perfil/perfil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-app-angular';
}
