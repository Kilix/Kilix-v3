import { createComponent } from 'react-fela'

const title = () => ({
  margin: 0,
  padding: 0,
  marginBottom: 15,
  fontSize: 1.7,
  fontWeight: 400,
  lineHeight: 1,
  textAlign: 'center',
  color: '#fff',
  tabletUp: {
    marginTop: 'auto',
  },
})

export default createComponent(title, 'h1')
