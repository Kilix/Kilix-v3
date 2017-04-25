import { connect } from 'react-fela'
import Router from 'next/router'
import Li from './li'
import kilixLogo from '../../kilix-logo'

const logo = () => ({
  width: 100,
  desktopUp: {
    display: 'none',
  },
})

const Logo = ({ styles, href, closeAction }) => (
  <Li href='/' as='/' {...{closeAction}} >
    <a onClick={(e) => { e.preventDefault(); closeAction(); Router.push('/?page=home', '/') }}>
      {kilixLogo(styles)}
    </a>
  </Li>
)

const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)
export default connect(mapStylesToProps)(Logo)
