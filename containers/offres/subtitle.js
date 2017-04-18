import { createComponent } from 'react-fela'

const title = () => ({
  maxWidth: '600px',
  margin: 0,
  padding: 0,
  color: '#fff',
  fontWeight: 200,
  fontSize: 1.1,
  textAlign: 'left',
  tabletUp: {
    marginBottom: 'auto',
    textAlign: 'center',
  },
})

export default createComponent(title, 'h2')
