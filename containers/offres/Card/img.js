import { connect } from 'react-fela'

import accompagnement from '../../../components/accompagnement'
import developpement from '../../../components/developpement'
import formation from '../../../components/formation'
import poc from '../../../components/poc'

const img = () => ({
  position: 'relative',
  width: '90px',
  marginBottom: 30,
})

const Img = ({ styles, svg }) => {
  switch(svg) {
    case 'accompagnement':
      return accompagnement(styles)
    case 'developpement':
      return developpement(styles)
    case 'formation':
      return formation(styles)
    case 'poc':
      return poc(styles)
  }
}
const mapStylesToProps =
  props =>
    renderer =>
      renderer.renderRule(img, props)
      
export default connect(mapStylesToProps)(Img)
