import { createComponent, connect } from 'react-fela'

const container = ({noShadow}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '30%',
  marginLeft: '1.5%',
  marginRight: '1.5%',
  height: '50px',
  desktopUp: {
    margin: 8,
    width: '130px',
    height: '60px',
  },
  extend: {
    condition: !noShadow,
    style: {
      margin: 12,
      marginTop: 10,
      borderRadius: 6,
      backgroundColor: 'rgba(255, 255, 255, .1)',
      transition: 'all .3s ease',
      boxShadow: '0 0 20px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      height: '65px',
      width: '130px',
      desktopUp: {
        width: '180px',
        height: '85px',
      },
      ':hover': { 
        boxShadow: '0 0 20px 6px rgba(0,0,0,0.15)',
        transform: 'scale(1.02)',
        backgroundColor: 'rgba(255, 255, 255, .2)',
      },
    }
  },
})
const logo = ({noShadow}) => ({
  position: 'relative',
  width: 90,
  extend: {
    condition: typeof noShadow === 'undefined',
    style: {
      width: 70,
    },
  },
})


const Logo = createComponent(logo, 'img', ['src', 'alt'])
const Container = createComponent(container, 'div')

export default ({ src, alt, noShadow }) => (
  <Container noShadow={noShadow}>
    <Logo {...{src, alt, noShadow}}/>
  </Container>
)
