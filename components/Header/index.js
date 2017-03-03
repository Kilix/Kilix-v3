import Header from './header'
import CloseBtn from './close'
import Logo from './Nav/logo'
import Item from './Nav/item'
import Nav from './Nav'

export default ({isOpen, closeAction, path}) => (
  <Header {...{isOpen}}>
    <CloseBtn {...{closeAction}} />
    <Nav>
      <Logo {...{closeAction}}/>
      <Item isActive={path === '/offres'} href='/?page=offres' as='/offres' text='Offres' {...{closeAction}}/>
      <Item isActive={path === '/projets'} href='/?page=projets' as='/projets' text='Projets' {...{closeAction}}/>
      <Item isActive={path === '/contact'} href='/?page=contact' as='/contact' text='Contact' {...{closeAction}}/>
    </Nav>
  </Header>
)
