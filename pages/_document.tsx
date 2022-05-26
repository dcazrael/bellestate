import Document, { Head, Html, Main, NextScript } from 'next/document'

class CustomDoc extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="7RArDTaJfH18l9KBlp2CvxMoSMHL8V6ExF2TobsPMTo"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default CustomDoc
