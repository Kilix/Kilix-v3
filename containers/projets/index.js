import Page from '../layout'
import Container from '../container'

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
    gradient='linear-gradient(0deg, #FDA228 0%, #FC6A3A 100%)'
  >
    <SpeContainer>
      <Work/>
      <ContainerProjects>
        <Container>
          <Title>Ils nous font confiance</Title>
          <Text>
            Depuis plus de 3 ans, ce que nous aimons, c’est vous accompagner de A à Z dans vos projets.
            <br/>
            Grâce à nos compétences techniques, humaines et relationnelles, nous formons avec nos clients une équipe qui travaille ensemble dans un climat propice à la communication, la confiance et l’expertise afin de résoudre toutes les problématiques techniques et/ou fonctionnelles et faire de ces projets des succès ! 
          </Text>
        </Container>
        <ContainerProjects>
          <ContainerProjects>
            <Text>Voir nos projets en ligne :</Text>
            <ContainerProjects>
              <Logo src='static/assets/ffb-logo.svg' alt='ffb'/>
              <Logo src='static/assets/amnesty-logo.svg' alt='amnesty'/>
              <Logo src='static/assets/horizon-logo.png' alt='horizon'/>
            </ContainerProjects>
          </ContainerProjects>
          <ContainerProjects>
            <Text>POCs et applications métier :</Text>
            <ContainerProjects>
              <Logo noShadow src='static/assets/societe-generale-logo.svg' alt='Société Générale'/>
              <Logo noShadow src='static/assets/vamos-logo.svg' alt='Vamos'/>
              <Logo noShadow src='static/assets/vente-privee-logo.png' alt='Vente Privée'/>
              <Logo noShadow src='static/assets/cross-knowledge-logo.png' alt='Crossknowledge'/>
              <Logo noShadow src='static/assets/lacoste-logo.png' alt='lacoste'/>
              <Logo noShadow src='static/assets/france-tv-logo.svg' alt='France Télévision'/>
            </ContainerProjects>
          </ContainerProjects>
        </ContainerProjects>
      </ContainerProjects>
    </SpeContainer>
  </Page>
)
