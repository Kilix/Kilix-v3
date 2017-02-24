import Page from '../containers/layout'

import Container from '../components/container'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Img from '../components/img'

export default () => (
  <Page color='#8E71F9' gradient='linear-gradient(270deg, #1DD1D8 0%, #3A88D5 100%)'>
    <Container>
      <Title>Agence web agile</Title>
      <Subtitle>Nous developpons avec vous des produits web faits maison</Subtitle>
      <Img src='static/assets/planet-placeholder.png' alt='planete' />
    </Container>
  </Page>
)
