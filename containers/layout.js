import Head from 'next/head'
import { createComponent } from 'react-fela'

const Layout = createComponent(({color, gradient}) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: color,
  background: gradient,
}), 'div')

export default ({ title, color, gradient,  children }) => (
  <Layout {...{color, gradient}}>
    <Head>
      <title>Kilix - { title }</title>
    </Head>
    {children}
  </Layout>
)
