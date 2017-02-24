import { connect } from 'react-fela'

const closeBtn = () => ({
  position: 'absolute',
  top: 10,
  right: 10,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 1.5,
  cursor: 'pointer',
  desktopUp: {
    display: 'none',
  },
})

const Close = ({styles, closeAction}) =>
  <span className={`${styles} material-icons`} onClick={() => closeAction()}>close</span>
const mapStylesToProps = props => renderer => renderer.renderRule(closeBtn)
export default connect(mapStylesToProps)(Close)

