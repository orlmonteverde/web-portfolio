import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='initial-scale1.0, width=devise-width' />
          <link rel='icon' href='/static/favicon.png' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          <script src='https://use.fontawesome.com/releases/v5.5.0/js/all.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
