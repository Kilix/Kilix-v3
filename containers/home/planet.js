import { createComponent } from 'react-fela'
import Box from '../../components/box'

const PlanetImg = createComponent(() => ({
  background: `url('static/assets/planet-placeholder.png')`,
  backgroundSize: '130%',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  flex: 1,
  desktopUp: {
    marginTop: 'auto',
    backgroundSize: '65%',
    backgroundPosition: 'center 35px',
  }
}), Box)

export default PlanetImg