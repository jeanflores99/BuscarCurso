export interface structure {
  ciclo?: number,
  codigo?: string,
  asignatura?: string,
  prerequisito?: string | null
}

export const Course: structure[] = [
  //1 CICLO
  {
    ciclo: 1,
    codigo: "EGCOM01",
    asignatura: "COMUNICACIÓN",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGMAB02",
    asignatura: "MATEMATICA BASICA ",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGDNC03",
    asignatura: "DEFENSA NACIONAL Y CIUDADANIA ",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGMEU04",
    asignatura: "METODOLOGIA DEL ESTUDIO UNIVERSITARIO ",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGIAGE05",
    asignatura: "INTRODUCCION A LA ADMINISTRACION Y GESTION EMPRESARIAL ",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGPS016",
    asignatura: "PSICOLOGIA",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGBIO06",
    asignatura: "BIOLOGIA",
    prerequisito: null
  },
  {
    ciclo: 1,
    codigo: "EGTIC07",
    asignatura: "TECNOLOGIA DE LA INFORMACION Y LA COMUNICACION",
    prerequisito: null
  },
  //2 CICLO
  {
    ciclo: 2,
    codigo: "EGEB08",
    asignatura: "ESTADISTICA BASICA",
    prerequisito: "EGMAB02"
  },
  {
    ciclo: 2,
    codigo: "EGFYL09",
    asignatura: "FILOSOFIA Y LOGICA",
    prerequisito: "EGPS016"
  },
  {
    ciclo: 2,
    codigo: "EGSEI10",
    asignatura: "SOCIOLOGIA E INTERCULTURALIDAD ",
    prerequisito: "EGDNC03"
  },
  {
    ciclo: 2,
    codigo: "EEEB01",
    asignatura: "ECOLOGIA BASICA ",
    prerequisito: "EGBIO06"
  },
  {
    ciclo: 2,
    codigo: "EGMIC11",
    asignatura: "METODOLOGIA DE LA INVESTIGACION CIENTIFICA",
    prerequisito: "EGMEU04"
  },
  {
    ciclo: 2,
    codigo: "EEPCB02",
    asignatura: "PROCESOS COGNITIVOS BASICOS",
    prerequisito: "EGPSO16"
  },
  {
    ciclo: 2,
    codigo: "EENEU03",
    asignatura: "NEUROANATOMIA",
    prerequisito: "EGBIO06"
  },
  //3 CICLO
  {
    ciclo: 3,
    codigo: "EEPDH04",
    asignatura: "PSICOLOGIA DEL DESARROLLO HUMANO I",
    prerequisito: null
  },
  {
    ciclo: 3,
    codigo: "EETDP05",
    asignatura: "TEORIAS DE LA PERSONALIDAD",
    prerequisito: null
  },
  {
    ciclo: 3,
    codigo: "EEPCS06",
    asignatura: "PROCESOS COGNITIVOS SUPERIORES",
    prerequisito: "EEPCB02"
  },
  {
    ciclo: 3,
    codigo: "EEMTOE7",
    asignatura: "METODOS Y TECNICAS DE OBSERVACION Y ENTREVISTA",
    prerequisito: null
  },
  {
    ciclo: 3,
    codigo: "ESPDA01",
    asignatura: "PSICOLOGIA DEL APRENDIZAJE",
    prerequisito: null
  },
  {
    ciclo: 3,
    codigo: "EENEU08",
    asignatura: "NEUROFISIOLOGIA",
    prerequisito: "EENEU03"
  },
  {
    ciclo: 3,
    codigo: "EGEAI16",
    asignatura: "ESTADISTICA APLICADA A LA INVESTIGACION",
    prerequisito: "EGEB08"
  },
  {
    ciclo: 3,
    codigo: "EGING12",
    asignatura: "INGLES I",
    prerequisito: null
  },
  //4 CICLO
  {
    ciclo: 4,
    codigo: "ESPPD02",
    asignatura: "PSICOANALISIS Y PSICOLOGIA DINAMICA",
    prerequisito: "EETDP05"
  },
  {
    ciclo: 4,
    codigo: "ESPSC03",
    asignatura: "PSICOLOGIA SOCIAL Y COMUNITARIA",
    prerequisito: null
  },
  {
    ciclo: 4,
    codigo: "EEPPL10",
    asignatura: "PSICOLOGIA DEL PENSAMIENTO Y DEL LENGUAJE ",
    prerequisito: "EEPCS06"
  },
  {
    ciclo: 4,
    codigo: "EEPDDH11",
    asignatura: "PSICOLOGIA DEL DESARROLLO HUMANO II",
    prerequisito: "EEPDH04"
  },
  {
    ciclo: 4,
    codigo: "ESPSI04",
    asignatura: "PSICOPATOLOGIA I",
    prerequisito: null
  },
  {
    ciclo: 4,
    codigo: "EEEPC12",
    asignatura: "EVALUACION DEL PROCESOS COGNITIVOS",
    prerequisito: "EEPCS06"
  },
  {
    ciclo: 4,
    codigo: "EETEC13",
    asignatura: "TERAPIA CONDUCTUAL",
    prerequisito: "ESPDA01"
  },
  {
    ciclo: 4,
    codigo: "EGING13",
    asignatura: "INGLES II",
    prerequisito: "EGING12"
  },
  //5 CICLO
  {
    ciclo: 5,
    codigo: "ESPSI05",
    asignatura: "PSICOPATOLOGIA II",
    prerequisito: "ESPSI04"
  },
  {
    ciclo: 5,
    codigo: "EEEPP14",
    asignatura: "EVALUACION PSICOMETRICA DE LA PERSONALIDAD",
    prerequisito: "EETDP05"
  },
  {
    ciclo: 5,
    codigo: "EEPSH15",
    asignatura: "PSICOLOGIA DE LA SEXUALIDAD HUMANA",
    prerequisito: null
  },
  {
    ciclo: 5,
    codigo: "ESPSE06",
    asignatura: "PSICOLOGIA EDUCATIVA",
    prerequisito: "EEEPC12"
  },
  {
    ciclo: 5,
    codigo: "ESFNEU13",
    asignatura: "NEUROPSICOLOGIA",
    prerequisito: "EENEU08"
  },
  {
    ciclo: 5,
    codigo: "ESPMT14",
    asignatura: "PSICOLOGIA DE LA MOTIVACION Y TECNICA DE GRUPOS 3",
    prerequisito: "ESPPD02"
  },
  {
    ciclo: 5,
    codigo: "EGING14",
    asignatura: "INGLES III",
    prerequisito: "EGING13"
  },
  {
    ciclo: 5,
    codigo: "EERESI16",
    asignatura: "RESPONSABILIDAD SOCIAL I",
    prerequisito: null
  },


]
