import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nombreUsuario: string='Jose Angel Torres Santos';
  obtenerSaludo():string{
    return `!Hola, ${this.nombreUsuario}! Bienvenido a tu perfil.`;
}
}
