import Header from '@/components/dom/header';
import PageTransition from '@/components/dom/pageTransition';
import Dom from '@/components/layout/dom';
import About from '@/components/pages/about';

const Page = () => {
  return (
    <>
      <Dom>
        <Header />
        <About />
        <PageTransition />
      </Dom>
    </>
  )
}

export default Page
