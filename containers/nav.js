import { createComponent } from 'react-fela'

const nav = () => ({
  width: 100,
  height: 100,
})

const ul = () => ({
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
})

const Nav = createComponent(nav, 'nav')
const Ul = createComponent(ul, 'ul')
export default ({ children }) => (
  <Nav>
    <Ul>
      {children}
    </Ul>
  </Nav>
)
