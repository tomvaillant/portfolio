import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, useRef, useState } from 'react'
import HeadMeta from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import Header from '@/components/dom/header'
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"
import { useSpring, useTransition, animated } from '@react-spring/web'
import IconLogo from '@/components/dom/iconLogo'
import LayerTransition from '@/components/dom/layerTransition'

const breakpoints = createTheme({
  sm: "440px",
  md: "600px",
  xl: "1440px",
});

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()
  const theme = useStore((s) => s.theme)
  // const [loading, setLoading] = useState(true)

  // const transitions = useTransition(loading, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })

  // useEffect(() => {
  //   setTimeout(() => { setLoading(false) }, 5000)
  // }, [])

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
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 1000));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setTimeout(() => {setLoading(true)}, 1000));
    };
  }, [router.events]);

  return (
    <>
    {loading ? 
    <div className={`global theme-${ theme }`}>
      <HeadMeta title={pageProps.title} />
      <ThemeProvider theme={breakpoints}>
        <Dom>
          {/* <LayerTransition /> */}
          <Header/>
          <Component {...pageProps} key={router.route} />
        </Dom>
      </ThemeProvider>

      {/* <HeadMeta title={pageProps.title} />
      <ThemeProvider theme={breakpoints}>
              <Dom>
                <LayerTransition />
      {
        transitions(({ opacity }, item) =>
        item ? (
          <animated.div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              transform: 'translate3D(-50%, -50%, 0)',
            }}>
            <IconLogo />
          </animated.div>
        ) : (
          <animated.div
            style={{
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            }}>
                <Header/>
                <Component {...pageProps} />
          </animated.div>
        )
      )
      }
      </Dom>
      </ThemeProvider> */}
    </div> : (null)}</>
  )
}

export default App