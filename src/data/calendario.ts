export interface EventoCalendario {
  fecha: string;
  dia: string;
  mes: string;
  titulo: string;
  descripcion: string;
}

export const eventosCalendario: EventoCalendario[] = [
  {
    fecha: '2026-09-01',
    dia: '01',
    mes: 'SEP',
    titulo: 'Apertura de inscripciones 2026-2',
    descripcion: 'Inicia el proceso de inscripción para pregrados y posgrados.',
  },
  {
    fecha: '2026-09-20',
    dia: '20',
    mes: 'SEP',
    titulo: 'Cierre de inscripciones',
    descripcion: 'Último día para inscribirse al periodo académico 2026-2.',
  },
  {
    fecha: '2026-10-05',
    dia: '05',
    mes: 'OCT',
    titulo: 'Publicación de admitidos',
    descripcion: 'Resultados del proceso de admisión disponibles en el portal.',
  },
  {
    fecha: '2026-10-15',
    dia: '15',
    mes: 'OCT',
    titulo: 'Matrículas financieras',
    descripcion: 'Fecha límite para el pago de matrícula de estudiantes admitidos.',
  },
];
