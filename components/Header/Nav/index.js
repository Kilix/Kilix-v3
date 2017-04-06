import { createComponent } from 'react-fela'

const Nav = createComponent(() => ({
  width: 100,
  height: 100,
}), 'nav')

const Ul = createComponent(() => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 0,
    padding: 0,
    desktopUp: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }
}), 'ul')

export default ({ children }) => (
  <Nav>
    <Ul>
      {children}
    </Ul>
  </Nav>
)
