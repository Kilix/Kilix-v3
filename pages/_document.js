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
          <title>Kilix</title>
          <meta charSet='UTF-8'/>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Exo+2:200,400" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="/static/assets/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/static/assets/favicon-16x16.png" sizes="16x16"/>
          <link rel="manifest" href="/static/assets/manifest.json"/>
          <link rel="mask-icon" href="/static/assets/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="/static/assets/favicon.ico"/>
          <meta name="msapplication-config" content="/static/assets/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>

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
