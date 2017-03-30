import Head from 'next/head'
import { createComponent } from 'react-fela'

const container = ({color, gradient}) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: color,
  background: gradient,
})

const Container = createComponent(container, 'div')

export default ({ title, color, gradient,  children }) => (
  <Container {...{color, gradient}}>
    <Head>
      <title>{ title }</title>
    </Head>
    {children}
  </Container>
)
