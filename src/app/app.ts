import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

interface ActividadEstudio {
  id: number;
  materia: string;
  actividad: string;
  completada: boolean;
  prioridad: string;
  fechaEntrega?: string;
  observaciones?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Agenda de estudio';
  descripcion = 'Organiza tu tiempo y alcanza tus metas.';

  actividades: ActividadEstudio[] = [
    {
      id: 1,
      materia: 'Desarrollo Web Avanzado',
      actividad: 'Revisar los conceptos de Angular',
      completada: false,
      prioridad: 'Alta',
      fechaEntrega: '2026-10-30',
      observaciones: 'Repasar interfaces y directivas',
    },
    {
      id: 2,
      materia: 'Bases de Datos',
      actividad: 'Repasar consultas SQL',
      completada: true,
      prioridad: 'Media',
      fechaEntrega: '2026-10-31',
      observaciones: 'Practicar consultas SELECT',
    },
    {
      id: 3,
      materia: 'Ingeniería de Software',
      actividad: 'Estudiar los requisitos funcionales',
      completada: false,
      prioridad: 'Alta',
      fechaEntrega: '2026-11-02',
      observaciones: 'Revisar los apuntes de clase',
    },
    {
      id: 4,
      materia: 'Desarrollo Web Avanzado',
      actividad: 'Practicar TypeScript',
      completada: false,
      prioridad: 'Media',
      observaciones: 'Realizar ejercicios de interfaces',
    },
    {
      id: 5,
      materia: 'Sistemas Operativos',
      actividad: 'Leer el material de la unidad',
      completada: true,
      prioridad: 'Baja',
      fechaEntrega: '2026-11-05',
    },
  ];

  cambiarEstado(actividad: ActividadEstudio): void {
    actividad.completada = !actividad.completada;
  }
}
