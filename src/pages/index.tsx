import type { NextPage } from 'next'
import Head from 'next/head';
import { Container, Divider, Grid, Header, Message } from 'semantic-ui-react'
import { GridColumns } from 'src/common/GridColumns';


const Home: NextPage = () => {
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
      <Container >
        <Divider hidden />

        <Header as="h1" dividing>
          Malla Curricular Psicologia
        </Header >


        <GridColumns />

      </Container>
    </>
  )
}

export default Home
