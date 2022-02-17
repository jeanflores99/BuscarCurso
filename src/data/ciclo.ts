import { Course } from './course';
interface structure {
  ciclo: number,
  totalCredito?: number,
  courses: typeof Course
}

export const Cicle: structure[] = [
  {
    ciclo: 1,
    totalCredito: 21,
    courses: Course.filter(a => a.ciclo === 1)
  },
  {
    ciclo: 2,
    totalCredito: 21,
    courses: Course.filter(a => a.ciclo === 2)
  },
  {
    ciclo: 3,
    totalCredito: 23,
    courses: Course.filter(a => a.ciclo === 3)
  },
  {
    ciclo: 4,
    totalCredito: 24,
    courses: Course.filter(a => a.ciclo === 4)
  },
  {
    ciclo: 5,
    totalCredito: 23,
    courses: Course.filter(a => a.ciclo === 5)
  }
]