import { createComponent } from 'react-fela'

const title = () => ({
  color: '#fff',
  fontSize: 2,
  fontWeight: 600,
  margin: 0,
  padding: 0,
  desktopUp: {
    fontSize: 3,
  },
})

export default createComponent(title, 'h1')
