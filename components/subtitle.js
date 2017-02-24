import { createComponent } from 'react-fela'

const title = () => ({
  color: '#fff',
  fontSize: 1,
  fontWeight: 300,
  margin: 0,
  padding: 0,
  paddingLeft: 25,
  paddingRight: 25,
  textAlign: 'center',
  desktopUp: {
    fontSize: 1.7,
  },
})

export default createComponent(title, 'h2')
