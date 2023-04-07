import Header from '@/components/dom/header'
import PageTransition from '@/components/dom/pageTransition'
import Dom from '@/components/layout/dom'
import Coaching from '@/components/pages/coaching'

const Page = () => {
  return (
    <>
      <Dom>
        <Header />
        <Coaching />
        <PageTransition />
      </Dom>
    </>
  )
}

export default Page
