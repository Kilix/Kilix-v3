import { createComponent } from 'react-fela'
import { combineRules } from 'fela'

import { containerRules } from '../../containers/container'

const container = () => ({
  flexWrap: 'none',
  desktopUp: {
    flexDirection: 'row',
  }
})

const speContainer = combineRules(containerRules, container)

export default createComponent(speContainer, 'div')
