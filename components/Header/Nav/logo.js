import { connect } from 'react-fela'
import Li from './li'
import svg from '../../kilix'

const logo = () => ({
  width: 110,
  desktopUp: {
    display: 'none',
  },
})

const Logo = ({ styles, href }) => (
  <Li href='/'>
    { svg(styles) }
  </Li>
)

const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)
export default connect(mapStylesToProps)(Logo)
