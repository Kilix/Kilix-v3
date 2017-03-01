import Link from 'next/link'
import { connect } from 'react-fela'
import svg from '../kilix'

const logo = () => ({
  position: 'absolute',
  top: 12,
  left: 20,
  width: '60px',
  desktopUp: {
    zIndex: 11,
    top: 0,
    width: '80px',
    height: '80px',
  },
})

const Logo = ({ styles }) => (
  <Link prefetch href='/'>
    <a>
      {svg(styles)}
    </a>
  </Link>
)

const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)
export default connect(mapStylesToProps)(Logo)
