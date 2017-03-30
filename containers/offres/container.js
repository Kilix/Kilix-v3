import { createComponent } from 'react-fela'

const containerOffers = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'stretch',
  maxWidth: '1400px',
  width: 100,
  paddingBottom: 25,
  tabletUp: {
    marginBottom: 'auto',
  },
})

export default createComponent(containerOffers, 'div')
