import React, { Children, useEffect, useState } from 'react'
import { Form, Grid, Input, Dropdown } from 'semantic-ui-react'
import { Cicle } from '@data/ciclo'
import { Course } from '@data/course'
import { structure } from '@data/course'

export const Options = Course.map((a) => {
  return {
    key: a.codigo,
    value: a.codigo,
    text: a.asignatura + '  ' + a.ciclo,

    // {
    //   avatar: true,
    //   icon: 
    // }

  }
})

export const GridColumns = () => {

  const [Curso, setCurso] = useState<structure>()
  const [Courses, setCourses] = useState<structure[]>([])
  const [Asignatura, setAsignatura] = useState<string>('')

  let historial: structure[] = []

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
    if (!data.asignatura) return console.log('No se encontró el curso')
    else CalculatePreRequisitos(data)
  }

  const CalculatePreRequisitos = (curso: structure) => {
    CalculateChildren(curso)
  }

  const CalculateChildren = (cursoanterior: structure) => {

    //obtiene el curso anterior a este
    Cicle.map(({ courses }) => courses?.filter((a) => {
      cursoanterior.prerequisito == a.codigo ? (
        historial.push(a),
        CalculateChildren(a)
      ) : 'No hay Prerequisitos'
    }))
    setCourses([...Courses, ...historial])

  }

  useEffect(() => {
    buscarCourse("")
  }, [])

  return (
    <>
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
            onChange={(e, { value }) => console.log(value)}
          />
        </Form.Field>
        <Form.Button onClick={() => buscarCourse(Asignatura)}>
          Calcular
        </Form.Button>

      </Form>




    </>
  )
}
