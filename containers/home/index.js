import Page from '../layout'
import Container from '../container'

import Box from '../../components/box'
import GoTo from '../../components/goto'
import Title from './title'
import Subtitle from './subtitle'
import Planet from './planet'

export default () => (
  <Page
    title='Agence web agile'
    color='#8E71F9'
    gradient='linear-gradient(270deg, #1DD1D8 0%, #3A88D5 100%)'
  >
    <Container>
      <Box margin="0 15px 0 15px">
        <Title>Agence web agile</Title>
        <Subtitle>Nous developpons avec vous des produits web faits maison</Subtitle>
      </Box>
      <Planet />
      <GoTo to="offres" title="Offres" />
    </Container>
  </Page>
)
