import React, { useState, Dispatch, SetStateAction, } from 'react'
import { Container, Divider, Grid, Header, Message, Label } from 'semantic-ui-react'
import { Formulario } from './form'
import { structure } from '@data/course'
import { Courses } from './courses'

interface IProps {
  Curso: structure,
  setCurso: Dispatch<SetStateAction<structure>>,
  setPreRequisitos: Dispatch<SetStateAction<structure[]>>,
  PreRequisitos: structure[],
  SetProximosCursos: Dispatch<SetStateAction<structure[]>>,
  ProximosCursos: structure[]
}


export const MallaCurricular = ({ Curso, PreRequisitos, setCurso, setPreRequisitos, ProximosCursos, SetProximosCursos }: IProps) => {
  return (
    <Container >
      <Divider hidden />

      <Header as="h1" dividing>
        Malla Curricular Psicologia
      </Header >

      <Formulario Curso={Curso} setCurso={setCurso} setPreRequisitos={setPreRequisitos} PreRequisitos={PreRequisitos} SetProximosCursos={SetProximosCursos} ProximosCursos={ProximosCursos} />


    </Container>
  )
}
