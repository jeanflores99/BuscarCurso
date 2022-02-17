import React, { useState } from 'react'
import { Container, Divider, Grid, Header, Message, Label } from 'semantic-ui-react'
import { Formulario } from './form'
import { structure } from '@data/course'
import { Courses } from './courses'

export const MallaCurricular = () => {

  const [Curso, setCurso] = useState<structure>({})
  const [PreRequisitos, setPreRequistos] = useState<structure[]>([])


  return (
    <Container >
      <Divider hidden />

      <Header as="h1" dividing>
        Malla Curricular Psicologia
      </Header >

      <Formulario Curso={Curso} setCurso={setCurso} setPreRequisitos={setPreRequistos} PreRequisitos={PreRequisitos} />
      {PreRequisitos.length > 0 ? (
        <Courses PreRequisitos={PreRequisitos} />
      ) : <Label color='red' style={{ marginTop: '5px' }}>No hay PreRequisitos</Label>}

    </Container>
  )
}
