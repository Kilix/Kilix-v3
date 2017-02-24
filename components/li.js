import { createComponent, connect } from 'react-fela'
import Router from 'next/router'

const li = (props) => ({
  marginTop: 25,
  marginBottom: 25,
  desktopUp: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 25,
    paddingRight: 25,
    extend: {
      condition: props.isLogo === true,
      style: { marginRight: 'auto' },
    },
  },
})

const link = () => ({
  fontSize: 1.4,
  fontWeight: '300',
  color: '#fff',
  textDecoration: 'none',
  desktopUp: {
    fontSize: 1,
  },
})

const CustomLink = ({ styles, children, href }) => (
  <a className={styles} href={href} onClick={(e) => {e.preventDefault(); Router.push(href)}}>
    {children}
  </a>
)
const mapStylesToProps = props => renderer => renderer.renderRule(link)

const Li = createComponent(li, 'li')
const Link = connect(mapStylesToProps)(CustomLink)
export default ({ children, href, isLogo }) => (
  <Li isLogo={isLogo}>
    <Link href={href}>
      {children}
    </Link>
  </Li>
)
