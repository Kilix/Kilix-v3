import { createComponent } from 'react-fela'

import Li from './li'

export default ({ href, text, isActive }) => (
  <Li href={href} isActive={isActive}>
    <span>{text}</span>
  </Li>
)
