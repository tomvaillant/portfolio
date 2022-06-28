import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, useState } from 'react'
import HeadMeta from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import Header from '@/components/dom/header'
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
import { motion, AnimatePresence } from "framer-motion";
import Preloader from '@/components/pages/preloader'

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
    </>
  )
}

export default App
