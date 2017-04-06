import { connect } from 'react-fela'
import Li from './li'
import kilixLogo from '../../kilix-logo'

const logo = () => ({
  width: 110,
  desktopUp: {
    display: 'none',
  },
})

const Logo = ({ styles, href, closeAction }) => (
  <Li href='/' as='/' {...{closeAction}} >
    { kilixLogo(styles) }
  </Li>
)

const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)
export default connect(mapStylesToProps)(Logo)
