import { connect } from 'react-fela'

const planet = () => ({
  position: 'relative',
  left: -5,
  width: 120,
  maxWidth: '740px',
  marginTop: 40,
  tabletUp: {
    marginTop: 'auto',
  }
})

const Planet = ({styles}) =>
  <img
    className={styles}
    src='static/assets/planet-placeholder.png'
    alt='planete'
  />

const mapStylesToProps = props => renderer => renderer.renderRule(planet, props)
      
export default connect(mapStylesToProps)(Planet)
