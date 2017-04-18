import { connect } from 'react-fela'

const headerBtn = () => ({
  zIndex: 1,
  position: 'fixed',
  top: 10,
  right: 10,
  padding: 4,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 1.5,
  cursor: 'pointer',
  desktopUp: {
    display: 'none',
  },
})

const Menu = ({styles, openAction}) =>
  <img className={styles} onClick={() => openAction()} alt='open menu' src='static/assets/menu-mobile.svg'/>
const mapStylesToProps = props => renderer => renderer.renderRule(headerBtn)
export default connect(mapStylesToProps)(Menu)

