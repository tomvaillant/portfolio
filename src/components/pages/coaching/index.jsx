import { CoachingStyle } from '@/components/pages/coaching/index.style'
import { motion } from 'framer-motion';

const Coaching = () => {

  const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 1.1,
    skewY: 2.5
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    skewY: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

  return (
    <CoachingStyle>
      <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInUp}>
        <div className="container-post-content">
          <h1>Producer Coaching</h1>
          <h2>Book a working session with me.</h2>
          <p>60 minutes — $200</p>
          <p>We&apos;ll spend the time talking about your top goals and challenges, outlining a strategy and arranging an action plan for implementation in your production or your profesionnal growth. I also give ideas for tooling to help you simplify or improve creative processes.</p>
          <p>You&apos;ll also get a free copy of my course for creative producers once it is released in October.</p>
          <p>The recording and any resources we create or discuss are yours to keep.</p>
          <p>You can contact me by email <a href="mailto:tom@buriedsignals.com">here</a></p>
        </div>
      </motion.div>
    </CoachingStyle>
  )
}

export default Coaching
