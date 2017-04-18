import { createComponent } from 'react-fela'

const title = () => ({
  marginBottom: 15,
  fontSize: 1.7,
  fontWeight: 400,
  lineHeight: 1,
  textAlign: 'left',
  color: '#fff',
  tabletUp: {
    textAlign: 'center'
  },
})

export default createComponent(title, 'h1')
