// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
        <div id="drawer-root"></div>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
