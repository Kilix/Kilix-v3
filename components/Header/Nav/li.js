import { createComponent, connect } from 'react-fela'
import Router from 'next/router'

const li = ({isActive}) => ({
  position: 'relative',
  marginTop: 25,
  marginBottom: 25,
  textAlign: 'center',
  ':after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 60,
    marginLeft: '20%',
    height: '0px',
    backgroundColor: '#FFFFFF',
    transition: 'height .3s ease-out'
  },
  desktopUp: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 25,
    paddingRight: 25,
  },
  extend: {
    condition: isActive === true,
    style: {
      ':after': {
        height: '2px',
      }
    }
  },
})

const link = () => ({
  fontSize: 2,
  fontWeight: '300',
  color: '#fff',
  textDecoration: 'none',
  desktopUp: {
    fontSize: 1,
  },
})

const CustomLink = ({ styles, children, href, as, closeAction }) => (
  <a
    className={styles}
    href={href}
    onClick={(e) => {
      e.preventDefault()
      closeAction()
      Router.push(href, as)
    }}
  >
    {children}
  </a>
)
const mapStylesToProps =
  props =>
    renderer =>
      renderer.renderRule(link, props)

const Li = createComponent(li, 'li')
const Link = connect(mapStylesToProps)(CustomLink)
export default ({ children, href, as, isActive, closeAction }) => (
  <Li isActive={isActive}>
    <Link {...{href, as, closeAction}}>
      {children}
    </Link>
  </Li>
)
