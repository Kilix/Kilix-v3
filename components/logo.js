import { connect } from 'react-fela'

const logo = ({inMenu}) => ({
  width: '80px',
  extend: {
    condition: inMenu === true,
    style: {
      position: 'absolute',
      top: 14,
      left: 15,
      width: '55px',
    }
  }
})

const Logo = ({ styles }) => <img className={styles} src='static/assets/kilix-logo.svg' alt='logo kilix' />
const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)
export default connect(mapStylesToProps)(Logo)
