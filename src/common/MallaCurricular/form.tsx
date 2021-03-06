import React, { Dispatch, SetStateAction, useState } from 'react'
import { Form, Grid, Input, Dropdown, Table, Button } from 'semantic-ui-react'
import { Cicle } from '@data/ciclo'
import { Course } from '@data/course'
import { structure } from '@data/course'

export const Color = [
  {
    ciclo: 1,
    color: 'red'
  },
  {
    ciclo: 2,
    color: 'blue'
  },
  {
    ciclo: 3,
    color: 'black'
  },
  {
    ciclo: 4,
    color: 'purple'
  },
  {
    ciclo: 5,
    color: 'orange'
  },
  {
    ciclo: 6,
    color: 'teal'
  },
  {
    ciclo: 7,
    color: 'pink'
  },
  {
    ciclo: 8,
    color: 'green'
  },
  {
    ciclo: 9,
    color: 'violet'
  },
  {
    ciclo: 10,
    color: 'olive'
  },
]

export const Options = Course.map((a) => {
  return {
    key: a.codigo,
    value: a.codigo,
    text: a.asignatura,
    description: <h3>{Color.find((b) => b.ciclo === a.ciclo)?.ciclo}</h3>,
    label: {
      color: Color.find((b) => b.ciclo === a.ciclo)?.color, description: 'hola'
    }
  }
})

interface props {
  Curso: structure,
  setCurso: Dispatch<SetStateAction<structure>>,
  setPreRequisitos: Dispatch<SetStateAction<structure[]>>,
  PreRequisitos: structure[]
  SetProximosCursos: Dispatch<SetStateAction<structure[]>>,
  ProximosCursos: structure[]
}

export const Formulario = (Props: props) => {
  const { Curso, setCurso, setPreRequisitos, PreRequisitos, ProximosCursos, SetProximosCursos } = Props
  const [asignatura, setasignatura] = useState('')
  let historial: structure[] = []
  let SgtCursos: structure[] = []

  const buscarCourse = (CodigoBuscar: string) => {

    let data: structure | string = {
      ciclo: 0,
      codigo: '',
      asignatura: '',
      prerequisito: null
    }

    Cicle.map(({ courses }) => courses.map((a) => {
      if (a.codigo === CodigoBuscar) data = a
      return;
    }))

    setCurso(data)

    if (!data.asignatura) return console.log('No se encontrĂ³ el curso')
    else CalculatePreRequisitos(data), CalculateNextCurso(data)

  }

  const CalculatePreRequisitos = (curso: structure) => {
    CalculateChildren(curso)
  }

  const CalculateChildren = (cursoanterior: structure) => {

    //obtiene el curso anterior a este
    Cicle.map(({ courses }) => courses?.filter((a) => {
      cursoanterior.prerequisito === a.codigo ? (
        historial.push(a),
        CalculateChildren(a)
      ) : 'No hay Prerequisitos'
    }))
    setPreRequisitos([...historial])

  }

  const CalculateNextCurso = (curso: structure) => {
    // console.log()
    Cicle.map(({ courses }) => courses?.filter((a) => {
      curso.codigo === a.prerequisito ? (
        SgtCursos.push(a),
        CalculateNextCurso(a)
      ) : 'No hay Sgt Cursos'
    }))
    SetProximosCursos([...SgtCursos])
  }

  return (
    <Form>
      <Form.Field>
        <label>
          Codigo de Asignatura
        </label>
        {/* <Input type='text' name="asignatura" value={Asignatura} onChange={({ target }) => setAsignatura(target.value)} /> */}
        <Dropdown
          placeholder='Select Country'
          fluid
          search
          selection
          options={Options}
          onChange={(e, { value }) => {
            setasignatura(`${value}`)
          }}
        />
      </Form.Field>
      <Form.Button onClick={() => { buscarCourse(asignatura) }}>
        Calcular
      </Form.Button>

    </Form>

  )
}
