import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

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
  imports: [
    NgFor,
    NgIf,
    NgClass,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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

  get actividadesPendientes(): number {
    return this.actividades.filter((actividad) => !actividad.completada).length;
  }

  get actividadesCompletadas(): number {
    return this.actividades.filter((actividad) => actividad.completada).length;
  }

  hayActividadesPendientes(): boolean {
    return this.actividadesPendientes > 0;
  }

  obtenerIconoPrioridad(prioridad: string): string {
    switch (prioridad.toLowerCase()) {
      case 'alta':
        return 'keyboard_double_arrow_up';
      case 'media':
        return 'drag_handle';
      case 'baja':
        return 'keyboard_double_arrow_down';
      default:
        return 'flag';
    }
  }
}
