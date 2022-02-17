import { structure } from '@data/course'
import React from 'react'
import { Header, Image, Table, Label } from 'semantic-ui-react'

interface props {
  PreRequisitos: structure[]
}
export const Courses = ({ PreRequisitos }: props) => {
  return (
    <>
      <h1 className='card-tittle'>Cursos Pre-Requisitos</h1>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell>ciclo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {PreRequisitos.map((a, b) => (

            <Table.Row key={b}>
              <Table.Cell>
                <Header as='h4' image>
                  {/* <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' /> */}
                  <Header.Content>
                    {a.asignatura}
                    <Header.Subheader>
                      Codigo de Curso: <h5 >{a.codigo}</h5>
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{a.ciclo}</Table.Cell>
            </Table.Row>


          ))}


        </Table.Body>
      </Table>
    </>

  )
}
