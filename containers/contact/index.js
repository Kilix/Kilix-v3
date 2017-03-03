import Page from '../layout'
import ContainerContact from './container'
import Text from './text'
import Title from './title'

export default () => (
  <Page
    color='#ED4E4F'
    gradient='linear-gradient(0deg, #FE5E3C 0%, #D83A66 100%)'
  >
    <ContainerContact>
        <Title>Rencontrez-nous !</Title>
        <Text hideOnMobile fontSize='1.2rem'>Venez partager un café en discutant de vos idées et projets !</Text>
        <Text fontSize='1.8rem'>hello@kilix.fr</Text>
        <Text fontSize='1.2rem'>01 46 99 91 91</Text>
        <Text fontSize='1rem' fontWeight='200'>1,  Avenue de la Cristallerie<br/>92310 Sèvres</Text>
    </ContainerContact>
  </Page>
)
