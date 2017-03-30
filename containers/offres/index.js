import Page from '../layout'
import Container from '../container'

import Card from './card'
import ContainerOffers from './container'
import Subtitle from './subtitle'
import Title from './title'

export default ({url}) => (
  <Page
    title='Offres'
    color='#8E71F9'
    gradient='linear-gradient(270deg, #379DEB 0%, #9B6AFB 100%)'
  >
    <Container>
      <Title>Une équipe d’experts du web pas comme les autres</Title>
      <Subtitle>
        N’allez pas croire que ces créatures curieuses et créatives sont férues de gymnastique rythmique, leur passion est plutôt d'optimiser méthodiquement les développements de vos besoins avec les technologies les plus adaptées.
      </Subtitle>
      <ContainerOffers>
        <Card
          svg='developpement'
          title="Développement et design web fait maison"
          text='Sur la planète Kilix, le développement a deux saveurs : l’agilité et le fait maison. Grâce à cette approche, nous réalisons les produits qui répondent véritablement à vos attentes.'
        />
        <Card
          svg='poc'
          title='POC : Prouver, Oser, Créer'
          text='Développement de prototypes d’applications, sites, plateformes web ou même validation d’un choix technologique, les Proof Of Concept Kilix vous aident à être certains de vos idées.'
        />
        <Card
          svg='accompagnement'
          title='Accompagnement à la carte'
          text='Nos experts en développement, gestion de projet ou UX/UI vous accompagnent pour vous aider à construire votre produit ou intervenir sur un de vos projets en cours.'
        />
        <Card
          svg='formation'
          title='Kilix’Academy : formations Agiles'
          text='Avec l’aide de nos guides choisissez l’itinéraire de formation qui correspond le mieux à vos équipes, votre culture et montez rapidement en compétences.'
        />
      </ContainerOffers>
    </Container>
  </Page>
)
