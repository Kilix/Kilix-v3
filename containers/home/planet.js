import { createComponent } from 'react-fela'
import Box from '../../components/box'

const ParallaxImg = createComponent(({ src }) => ({
  backgroundImage: `url('static/assets/${src}')`,
  backgroundSize: '130%',
  backgroundPosition: '50% 20%',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  desktopUp: {
    marginTop: 'auto',
    backgroundSize: '65%',
    backgroundPosition: 'center 35px',
  }
}), Box)

const PlanetContainer = createComponent(({ src }) => ({
  position: 'relative',
  flex: 1,
}), Box)

export default () => (
  <PlanetContainer>
    <ParallaxImg src="atmosphere-only.png" />
    <ParallaxImg src="cloud-only.png" />
    <ParallaxImg src="planet-only.png" />
  </PlanetContainer>
)
