import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Agenda de estudio';
  descripcion = 'Organiza tu tiempo y alcanza tus metas.';
}
