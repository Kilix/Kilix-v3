import { createComponent, connect } from 'react-fela'

const container = ({noShadow}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '115px',
  height: '60px',
  margin: 8,
  desktopUp: {
    width: '200px',
    height: '90px',
  },
  extend: {
    condition: typeof noShadow === 'undefined',
    style: {
      margin: 12,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 6,
      backgroundColor: 'rgba(255, 255, 255, .1)',
      transition: 'all .3s ease',
      boxShadow: '0 0 20px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      ':hover': { boxShadow: '0 0 20px 8px rgba(0,0,0,0.15)' },
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

const logoC = ({ styles, src, alt }) =>
  (<img className={styles} src={src} alt={alt} />)
const mapStylesToProps = props => renderer => renderer.renderRule(logo, props)

const Logo = connect(mapStylesToProps)(logoC)
const Container = createComponent(container, 'div')

export default ({ src, alt, noShadow }) => (
  <Container noShadow={noShadow}>
    <Logo {...{src, alt, noShadow}}/>
  </Container>
)
