import { createComponent } from 'react-fela'

import Li from './li'

export default ({ href, as, text, isActive, closeAction }) => (
  <Li {...{href, as, isActive, closeAction}}>
    <span>{text}</span>
  </Li>
)
