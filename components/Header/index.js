import Header from './header'
import CloseBtn from './close'
import Logo from './Nav/logo'
import Item from './Nav/item'
import Nav from './Nav'

export default ({isOpen, closeAction, path}) => (
  <Header {...{isOpen}}>
    <CloseBtn {...{closeAction}} />
    <Nav>
      <Logo/>
      <Item isActive={path === '/offres'} href='/offres' text='Offres' />
      <Item isActive={path === '/projets'} href='/projets' text='Projets' />
      <Item isActive={path === '/contact'} href='/contact' text='Contact' />
    </Nav>
  </Header>
)
