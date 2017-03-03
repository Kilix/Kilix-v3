import Document, { Head, Main, NextScript } from 'next/document'
import { getRenderer } from '../helpers/fela'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const renderer = getRenderer()
    const css = renderer.renderToString()

    renderer.clear()

    return {
      ...page,
      css
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <meta charSet='UTF-8'/>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Exo+2:200,400" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <style id='fela-stylesheet'>{this.props.css}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
