import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" as="image" href="./img/brush-dark.png"></link>
        <link rel="preload" as="image" href="./img/brush-light.png"></link>
        <link rel="preload" as="image" href="./img/ink-dark.png"></link>
        <link rel="preload" as="image" href="./img/ink-light.png"></link>
        <link rel="preload" as="image" href="./img/noise-dark.png"></link>
        <link rel="preload" as="image" href="./img/noise-light.png"></link>
        {/* <script async src="./datas/hypothesis.json" className="js-hypothesis-config"></script> */}
        <script dangerouslySetInnerHTML={{ __html: `window.hypothesisConfig = function () { return { openSidebar: false, showHighlights: false, theme: "clean" } }` }} ></script>
        <script async src="https://hypothes.is/embed.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
