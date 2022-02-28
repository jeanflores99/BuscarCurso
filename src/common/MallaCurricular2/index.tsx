import React, { ReactElement } from 'react'
import { Grid, Segment, Container, Card, Label } from 'semantic-ui-react'
import { Course, structure } from '@data/course'
import { Cicle } from '@data/ciclo'

interface IProps {
  PreRequisitos: structure[]
  Curso: structure,
  ProximosCursos: structure[]
}
interface typerender {
  Anteriores: {
    content: structure[],
    bg: string
  },
  Siguientes: {
    content: structure[],
    bg: string
  }
}
const MallaCurricularView = ({ PreRequisitos, Curso, ProximosCursos }: IProps) => {
  const TypeRender: typerender | any = {
    Anteriores: {
      content: PreRequisitos,
      bg: 'bg bg-success'
    }
    ,
    Siguientes: {
      content: ProximosCursos,
      bg: 'bg bg-danger'
    }

  }
  const CoursesWarapper = ({ llave = 0, typeArray = '' }): any => {
    let aea = Course.filter(a => a.ciclo === llave)
    return <Grid
      columns={'equal'}
      centered
    >
      {aea.map((obj, key) => (
        <CardView obj={obj} key={key} typeArray={typeArray} />
      ))}
    </Grid>
  }

  const CardView = ({ obj, typeArray }: any): any => {
    if (TypeRender[typeArray].content.includes(obj)) return <Grid.Column
      className='d-flex justify-content-center'
    ><Card className='border border-success'>
        <Card.Description textAlign='center' className={TypeRender[typeArray].bg || ''} >{obj.asignatura}</Card.Description>
        <Card.Meta textAlign='center'>Ciclo: {obj.ciclo}</Card.Meta>
      </Card>
    </Grid.Column>
    else return null

  }


  return <Container>

    {PreRequisitos.length > 0 ? (Cicle.map((obj, key) =>
      <CoursesWarapper key={key} llave={obj.ciclo} typeArray='Anteriores' />))
      :
      <Grid
        columns={'equal'}
        centered
      >
        <Grid.Column
          className='d-flex justify-content-center'
        ><Card className='border border-success'>
            <Card.Description textAlign='center'>No hay PreRequisitos</Card.Description>
            {/* <Card.Meta textAlign='center'>Ciclo: {obj.ciclo}</Card.Meta> */}
          </Card>
        </Grid.Column>
      </Grid>}
    <Grid
      columns={'equal'}
      centered
    >
      <Grid.Column className='d-flex justify-content-center'>
        <Card className='border border-primary'>
          <Card.Description textAlign='center'>{Curso?.asignatura || ''}</Card.Description>
          <Card.Meta textAlign='center'>{Curso?.ciclo || ''}</Card.Meta>
        </Card>
      </Grid.Column>
    </Grid>
    {ProximosCursos.length > 0 ? (Cicle.map((obj, key) =>
      <CoursesWarapper key={key} llave={obj.ciclo} typeArray='Siguientes' />))
      :
      <Grid
        columns={'equal'}
        centered
      >
        <Grid.Column
          className='d-flex justify-content-center'
        ><Card className='border border-success'>
            <Card.Description textAlign='center'>No hay Cursos Siguientes</Card.Description>
          </Card>
        </Grid.Column>
      </Grid>}



  </Container>

}
export default MallaCurricularView
