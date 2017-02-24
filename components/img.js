import { connect } from 'react-fela'

const img = () => ({
  position: 'relative',
  top: 40,
  maxWidth: 740,
  width: 85,
  desktopUp: {
    top: 100,
  },
})

const Img = ({ styles, src, alt }) => <img className={styles} {...{src, alt}} />
const mapStylesToProps = props => renderer => renderer.renderRule(img)
export default connect(mapStylesToProps)(Img)
