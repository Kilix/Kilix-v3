import { createComponent } from 'react-fela'
import Box from '../../components/box'

const Img = createComponent(() => ({
  position: 'relative',
  width: 100,
  desktopUp: {
    maxWidth: '650px',
    transform: 'translateX(-100px) scale(1.6)'
  }
}), 'img', ['src', 'alt'])


export default () => (
  <Box center>
    <Img src='static/assets/illu_references.png' alt='placeholder' />
  </Box>
)
