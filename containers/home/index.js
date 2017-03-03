import Page from '../layout'
import Container from '../container'

import Title from './title'
import Subtitle from './subtitle'
import Planet from './planet'

export default () => (
  <Page
    color='#8E71F9'
    gradient='linear-gradient(270deg, #1DD1D8 0%, #3A88D5 100%)'
  >
    <Container>
      <Title>Agence web agile</Title>
      <Subtitle>Nous developpons avec vous des produits web faits maison</Subtitle>
      <Planet/>
    </Container>
  </Page>
)
