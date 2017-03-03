import { createComponent } from 'react-fela'

import Ul from './ul'

const nav = () => ({
  width: 100,
  height: 100,
})

const Nav = createComponent(nav, 'nav')

export default ({ children }) => (
  <Nav>
    <Ul>
      {children}
    </Ul>
  </Nav>
)
