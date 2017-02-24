import Header from '../components/header'
import CloseBtn from '../components/close-btn'
import Nav from './nav'
import LinkLogo from './link-logo'
import LinkItem from './link-item'

export default ({isOpen, closeAction}) => (
  <Header {...{isOpen}}>
    <CloseBtn {...{closeAction}} />
    <Nav>
      <LinkLogo href='/' />
      <LinkItem href='/offres' text='Offres' />
      <LinkItem href='/projets' text='Projets' />
      <LinkItem href='/contact' text='Contact' />
    </Nav>
  </Header>
)
