import { createComponent } from 'react-fela'

const containerOffers = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  minHeight: '100vh',
})

export default createComponent(containerOffers, 'div')
