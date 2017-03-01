import React from 'react'

import Page from '../containers/layout'
import Container from '../containers/container'

import Title from './Home/title'
import Subtitle from './Home/subtitle'
import Planet from './Home/planet'

export default ({url}) => (
  <Page
    color='#8E71F9'
    gradient='linear-gradient(270deg, #1DD1D8 0%, #3A88D5 100%)'
    path={url.pathname}
  >
    <Container>
      <Title>Agence web agile</Title>
      <Subtitle>Nous developpons avec vous des produits web faits maison</Subtitle>
      <Planet/>
    </Container>
  </Page>
)
