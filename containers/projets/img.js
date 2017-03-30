import { connect } from 'react-fela'

const img = () => ({
  position: 'relative',
  width: 100,
  desktopUp: {
    maxWidth: '650px',
  }
})
const Img = ({ styles }) => <img className={styles} src='static/assets/work-placeholder.png' alt='placeholder' />

const mapStylesToProps = props => renderer => renderer.renderRule(img, props)
export default connect(mapStylesToProps)(Img)
