import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, useState } from 'react'
import HeadMeta from '@/config'
import '@/styles/index.css'
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
import { AnimatePresence } from "framer-motion";
import Preloader from '@/components/pages/preloader'
import Canvas from '@/components/dom/canvas'

const breakpoints = createTheme({
  sm: "440px",
  md: "600px",
  xl: "1440px",
});

function App({ Component, pageProps = { title: 'index' } }) {
  const [isPreload, setIsPreload] = useState(false)

  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
    const timeoutTheme = setTimeout(() => {
      switch (router.pathname.split('/')[1]) {
        case "about":
          useStore.setState({ theme: 'dark' })
          break;
        default:
          useStore.setState({ theme: 'light' })
          break;
      }
    }, isPreload ? 0 : 1000)
    switch (router.pathname.split('/')[1]) {
      case "about":
        useStore.setState({ ink: 'dark' })
        break;
      default:
        useStore.setState({ ink: 'light' })
        break;
    }
    return () => {
      clearTimeout(timeoutTheme)
    }
  }, [router])

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsPreload(false)
  //   }, 2500)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])

  return (
    <>
      <HeadMeta title={pageProps.title} />
      <ThemeProvider theme={breakpoints}>
        <AnimatePresence exitBeforeEnter>
          {isPreload ? <Preloader /> : <Component {...pageProps} key={router.route} />}
        </AnimatePresence>
      </ThemeProvider>
          {!isPreload && <Canvas />}
    </>
  )
}

export default App
