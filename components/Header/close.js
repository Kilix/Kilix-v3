import { connect } from 'react-fela'

const closeBtn = ({styles}) => ({
  position: 'absolute',
  top: 10,
  right: 20,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 1.8,
  cursor: 'pointer',
  desktopUp: {
    display: 'none',
  },
  ...styles,
})

const Close = ({styles, closeAction}) =>
  <span className={`${styles} material-icons`} onClick={() => closeAction()}>close</span>
const mapStylesToProps = props => renderer => renderer.renderRule(closeBtn)
export default connect(mapStylesToProps)(Close)

