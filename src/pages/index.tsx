import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head';
import { MallaCurricular } from 'src/common/MallaCurricular';
import MallaCurricularView from 'src/common/MallaCurricular2';
import { structure } from '@data/course'


const Home: NextPage = () => {

  const [Curso, setCurso] = useState<structure>({})
  const [PreRequisitos, setPreRequistos] = useState<structure[]>([])
  const [ProximosCursos, SetProximosCursos] = useState<structure[]>([])

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />

        <title>Home</title>
      </Head>

      <MallaCurricular
        Curso={Curso}
        setCurso={setCurso}
        setPreRequisitos={setPreRequistos}
        PreRequisitos={PreRequisitos}
        ProximosCursos={ProximosCursos}
        SetProximosCursos={SetProximosCursos}
      />
      <hr />
      <MallaCurricularView PreRequisitos={PreRequisitos} Curso={Curso} ProximosCursos={ProximosCursos} />
    </>
  )
}

export default Home
