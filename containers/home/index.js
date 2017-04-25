import Page from '../layout'
import Container from '../container'

import Box from '../../components/box'
import GoTo from '../../components/goto'
import Title from './title'
import Subtitle from './subtitle'
import Planet from './planet'
import Asterix from './asterix'
import AsterixExplanation from './asterix-explanation'

export default () => (
  <Page
    title='Agence web agile'
    color='#8E71F9'
    gradient='linear-gradient(270deg, #1DD1D8 0%, #3A88D5 100%)'
  >
    <Container>
      <Box margin="0 15px 0 15px">
        <Title>
          Agence web agile
          <Asterix>*</Asterix>
        </Title>
        <Subtitle>Nous développons avec vous des produits web faits maison</Subtitle>
      </Box>
      <Planet />
      <GoTo to="offres" title="Offres" />
      <AsterixExplanation>* Ceci est notre MVP !</AsterixExplanation>
    </Container>
  </Page>
)
