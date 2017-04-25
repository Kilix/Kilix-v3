import { createComponent } from 'react-fela'

const containerOffers = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'stretch',
  maxWidth: '1300px',
  width: 100,
  paddingBottom: 25,
  tabletUp: {
    marginTop: 60,
    flexDirection: 'row',
  },
})

export default createComponent(containerOffers, 'div')
