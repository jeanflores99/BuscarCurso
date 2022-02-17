import React, { Children, useEffect, useState } from 'react'
import { Form, Grid, Input, Dropdown, Table, Button } from 'semantic-ui-react'
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
  const [Asignatura, setAsignatura] = useState('')

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
            onChange={(e, { value }) => {
              setAsignatura(`${value}`)
              setCourses([])
            }}
          />
        </Form.Field>
        <Form.Button onClick={() => { buscarCourse(Asignatura) }}>
          Calcular
        </Form.Button>

      </Form>



      <div className="col-md-12 col-sm-12  mt-3">
        <Table compact selectable unstackable >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ciclo</Table.HeaderCell>
              <Table.HeaderCell>Curso</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body >
            {Courses.length > 0 ? (
              Courses.map((a, b) => {
                <Table.Row key={b + ` aea`}>
                  <Table.Cell collapsing verticalAlign="middle"><span className="mt-2">{a.ciclo}</span></Table.Cell>
                  <Table.Cell>
                    {a.asignatura}
                  </Table.Cell >

                </Table.Row>

              })) : null
            }



          </Table.Body>

        </Table>
        {/* <Show condicion={typeof id === 'number'}> */}
        <Table unstackable>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell colSpan='2'>
                {/* <Button onClick={() => addmetafisica()} disabled={metafisica && metafisica.length == 12} data-toggle="tooltip" data-placement="top" title="Agregar nueva Meta Física" ><Icon name='add circle' />Agregar Meta</Button> */}
              </Table.HeaderCell>
              <Table.HeaderCell width='5'></Table.HeaderCell>
              <Table.HeaderCell textAlign='right' width='6'  >
                {/* <CurrencyInput
                                        prefix='S/ '
                                        decimalsLimit={2}
                                        groupSeparator=","
                                        decimalSeparator="."
                                        value={desagregadometas && desagregadometas.monto || 0}
                                        style={{ textAlign: 'right', color: 'black' }}
                                        disabled
                                    /> */}
                {/* <InputMoney
                      value={desagregadometas && desagregadometas.monto || 0}
                      style={{ textAlign: 'right', color: 'black' }}
                      disabled={true}
                      prefix='S/ '
                      maxLength={14}

                    /> */}
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='right' collapsing >Costo Total</Table.HeaderCell>

            </Table.Row>
          </Table.Header>
        </Table>
        {/* </Show> */}

      </div>




    </>
  )
}
