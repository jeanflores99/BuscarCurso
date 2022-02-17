export interface structure {
  ciclo?: number,
  codigo?: string,
  asignatura?: string,
  prerequisito?: string | null | string[]
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
  //6 CICLO
  {
    ciclo: 6,
    codigo: "ESPSA07",
    asignatura: "PSICOFARMACOLOGIA APLICADA",
    prerequisito: "ESPSI05"
  },
  {
    ciclo: 6,
    codigo: "ESEPP08",
    asignatura: "EVALUACION PROYECTIVA DE LA PERSONALIDAD ",
    prerequisito: "EEEPP14"
  },
  {
    ciclo: 6,
    codigo: "ESNER09",
    asignatura: "NEUROPSICOLOGIA Y REHABILITACION",
    prerequisito: "ESFNEU13"
  },
  {
    ciclo: 6,
    codigo: "ESPSS10",
    asignatura: "PSICOLOGIA SOCIAL",
    prerequisito: "ESPSC03"
  },
  {
    ciclo: 6,
    codigo: "ESPDJ11",
    asignatura: "PSICOLOGIA DELICUENCIAL Y JURIDICA",
    prerequisito: null
  },
  {
    ciclo: 6,
    codigo: "EEPFD17",
    asignatura: "PSICOLOGIA DE LA FAMILIA Y DISFUNCIONALIDAD FAMILIAR ",
    prerequisito: "ESPMT14"
  },
  {
    ciclo: 6,
    codigo: "ESEVP12",
    asignatura: "EVALUACION PSICOPEDAGOGICA",
    prerequisito: "ESPSE06"
  },
  {
    ciclo: 6,
    codigo: "EGING15",
    asignatura: "INGLES IV",
    prerequisito: "EGING14"
  },
  {
    ciclo: 6,
    codigo: "EERESII18",
    asignatura: "RESPONSABILIDAD SOCIAL II ",
    prerequisito: "EERESI16"
  },
  //7 CICLO
  {
    ciclo: 7,
    codigo: "ESPSO15",
    asignatura: "PSICOLOGIA ONCOLOGICA",
    prerequisito: null
  },
  {
    ciclo: 7,
    codigo: "ESDTL16",
    asignatura: "DIAGNOSTICO DE LOS TRANSTORNOS DEL LENGUAJE VERBAL",
    prerequisito: "ESEVP12"
  },
  {
    ciclo: 7,
    codigo: "EEINP19",
    asignatura: "INTRODUCCION A LA PSICOTERAPIA",
    prerequisito: "ESPMT14"
  },
  {
    ciclo: 7,
    codigo: "ESTRA15",
    asignatura: "TRANSTORNOS DE APRENDIZAJE",
    prerequisito: "ESEVP12"
  },
  {
    ciclo: 7,
    codigo: "ESPSO16",
    asignatura: "PSICOLOGIA ORGANIZACIONAL",
    prerequisito: null
  },
  {
    ciclo: 7,
    codigo: "ESINC17",
    asignatura: "INTERVENCION COMUNITARIA",
    prerequisito: "ESPSS10"
  },
  {
    ciclo: 7,
    codigo: "EEDCI20",
    asignatura: "DISEÑO Y CONSTRUCCION DE INSTRUMENTOS PSICOLOGICOS",
    prerequisito: "EEEPP14"
  },
  //8 CICLO
  {
    ciclo: 8,
    codigo: "ESPSH18",
    asignatura: "PSICOTERAPIA HUMANISTICA",
    prerequisito: "EEINP19"
  },
  {
    ciclo: 8,
    codigo: "ESPPF19",
    asignatura: "PSICOTERAPIA DE PAREJA Y DE FAMILIA",
    prerequisito: "EEINP19"
  },
  {
    ciclo: 8,
    codigo: "ESEDC20",
    asignatura: "EVALUACION Y DIAGNOSTICO DEL COMPORTAMIENTO ORGANIZACIONAL ",
    prerequisito: "ESPSO16"
  },
  {
    ciclo: 8,
    codigo: "ESPCS21",
    asignatura: "PSICOLOGIA CLINICA Y DE LA SALUD",
    prerequisito: "EEINP19"
  },
  {
    ciclo: 8,
    codigo: "ESETI22",
    asignatura: "ETICA Y DEONTOLOGIA EN PSICOLOGIA",
    prerequisito: null
  },
  {
    ciclo: 8,
    codigo: "ESTCC23",
    asignatura: "TERAPIA COGNITIVA CONDUCTUAL ",
    prerequisito: null
  },
  //9 CICLO
  {
    ciclo: 9,
    codigo: "ESDPA24",
    asignatura: "DIAGNOSTICO Y PSICOTERAPIA EN LAS ADICIONES ",
    prerequisito: "ESPCS21"
  },
  {
    ciclo: 9,
    codigo: "EEPSG21",
    asignatura: "PSICOTERAPIA DE GRUPO",
    prerequisito: "ESTCC23"
  },
  {
    ciclo: 9,
    codigo: "ESIPN25",
    asignatura: "INTERVENCION PSICOTERAPEUTICA EN NIÑOS Y ADOLESCENTES",
    prerequisito: "ESTCC23"
  },
  {
    ciclo: 9,
    codigo: "EEDIP22",
    asignatura: "DIAGNOSTICO EN INFORME PSICOLOGICO",
    prerequisito: "ESTCC23"
  },
  {
    ciclo: 9,
    codigo: "ESPSF26",
    asignatura: "PSICOLOGIA FORENSE",
    prerequisito: "ESPDJ11"
  },
  {
    ciclo: 9,
    codigo: "ESSMT27",
    asignatura: "SALUD MENTAL Y TRANSTORNO MENTALES",
    prerequisito: "ESPCS21"
  },
  {
    ciclo: 9,
    codigo: "ESPED28",
    asignatura: "PSICOLOGIA DE LA EXCEPCIONALIDAD DIAGNOSTICO E INTERVENCION",
    prerequisito: "ESEVP12"
  },
  {
    ciclo: 9,
    codigo: "EETESI24",
    asignatura: "TESIS I ",
    prerequisito: ["EGMIC11", "EGEAI16"]
  },
  //10 CICLO
  {
    ciclo: 10,
    codigo: "ESIPA29",
    asignatura: "INTERVENCION PSICOTERAPEUTICA EN ADULTOS",
    prerequisito: "ESIPN25"
  },
  {
    ciclo: 10,
    codigo: "ESIPS30",
    asignatura: "INTERVENCION PSICOTERAPEUTICA EN SEXUALIDAD HUMANA",
    prerequisito: "EEPSH15"
  },
  {
    ciclo: 10,
    codigo: "ESIPT31",
    asignatura: "INTERVENCION PSICOLOGICA Y TERAPIA EN TRASTORNOS DE LENGUAJE VERBAL",
    prerequisito: "ESTRA15"
  },
  {
    ciclo: 10,
    codigo: "ESTEF32",
    asignatura: "TERAPIA FAMILIAR ",
    prerequisito: "EEPFD17"
  },
  {
    ciclo: 10,
    codigo: "EECOP23",
    asignatura: "CONSEJO PSICLOGICO",
    prerequisito: "EEPSG21"
  },
  {
    ciclo: 10,
    codigo: "EEGES33",
    asignatura: "GESTION EN SALUD ",
    prerequisito: "ESSMT27"
  },
  {
    ciclo: 10,
    codigo: "ESPSI34",
    asignatura: "PSICONEUROINMUNOLOGIA",
    prerequisito: "ESPS015"
  },
  {
    ciclo: 10,
    codigo: "EETESII25",
    asignatura: "TESIS II",
    prerequisito: "EETESI24"
  }



]
