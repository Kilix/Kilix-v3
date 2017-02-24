import { createComponent } from 'react-fela'

import Li from '../components/li'
import Logo from '../components/logo'

export default ({ href, text }) => (
  <Li href={href}>
    <span>{text}</span>
  </Li>
)
