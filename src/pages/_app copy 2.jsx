import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'
import HeadMeta from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import Header from '@/components/dom/header'
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
import PageTransition from '@/components/dom/pageTransition'
import Canvas from '@/components/layout/canvas'

const breakpoints = createTheme({
  sm: "440px",
  md: "600px",
  xl: "1440px",
});

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()
  const theme = useStore((s) => s.theme)

  useEffect(() => {
    useStore.setState({ router })
    switch (router.pathname.split('/')[1]) {
      case "about":
        useStore.setState({ theme: 'dark' })
        break;
      default:
        useStore.setState({ theme: 'light' })
        break;
    }
  }, [router])

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return (
    <>
      <HeadMeta title={pageProps.title} />
      <ThemeProvider theme={breakpoints}>
        <PageTransition route={router.asPath}>
          <Dom className={`global theme-${ theme }`}>
            <Header/>
            <Component {...pageProps} key={router.route} />
          </Dom>
        </PageTransition>
      </ThemeProvider>
    </>
  )
}

export default App
