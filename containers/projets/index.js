import Page from '../layout'
import Container from '../container'
import Box from '../../components/box'
import GoTo from '../../components/goto'
import SpeContainer from './spe-container'
import ContainerProjects from './container'
import Work from './img'
import Logo from './logo'
import Title from './title'
import Text from './text'

export default ({url}) => (
  <Page
    title='Projets'
    color='#FD8E2F'
    gradient='linear-gradient(270deg, #FDA228 0%, #FC6A3A 100%)'
  >
    <SpeContainer>
      <Work/>
      <Box justifyContent="center" margin="0 15px 0 15px">
          <Title>Ils nous font confiance</Title>
          <Text>
            Depuis 2013, nous aimons vous accompagner de A à Z dans la mise en œuvre de votre projet grâce à nos compétences techniques, humaines et cybernétiques. 
            <br/>
            Venez découvrir ce climat propice à la communication, la confiance et l’expertise qui permettra de résoudre toutes les problématiques techniques et fonctionnelles pour faire de ce projet un succès !
          </Text>
          <Box margin="15px 0 0 0">
            <Text>Voir nos projets en ligne :</Text>
            <Box row wrap>
              <Logo src='static/assets/ffb-logo.svg' alt='ffb'/>
              <Logo src='static/assets/amnesty-logo.svg' alt='amnesty'/>
              <Logo src='static/assets/horizon-logo.png' alt='horizon'/>
            </Box>
          </Box>
          <Box margin="15px 0 15px 0">
            <Text>POCs et applications métier :</Text>
            <Box row wrap>
              <Logo noShadow src='static/assets/societe-generale-logo.svg' alt='Société Générale'/>
              <Logo noShadow src='static/assets/vamos-logo.svg' alt='Vamos'/>
              <Logo noShadow src='static/assets/vente-privee-logo.png' alt='Vente Privée'/>
              <Logo noShadow src='static/assets/cross-knowledge-logo.png' alt='Crossknowledge'/>
              <Logo noShadow src='static/assets/lacoste-logo.png' alt='lacoste'/>
              <Logo noShadow src='static/assets/france-tv-logo.svg' alt='France Télévision'/>
            </Box>
          </Box>
      </Box>
      <GoTo to="contact" title="Contact" />
    </SpeContainer>
  </Page>
)
