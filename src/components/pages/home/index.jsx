import { HomeStyle } from '@/components/pages/home/index.style'
import ListPosts from '@/components/dom/listPosts';
import { motion } from 'framer-motion';

const datas = {
  title: "Hello, I am Tom.",
  description: "Currently visualising thoughts and working as a creative producer in digital and film. I run Buried Signals, where we curate visual, investigative and immersive experiments in journalism.",
  allCategories : ["articles", "experiments"]
}

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.185
    }
  }
};

const Home = ({ posts, ...props }) => {
  return (
    <HomeStyle>
      <motion.div className="container1" initial="initial" animate="animate" variants={stagger} >
        <motion.h1 className="h1 main-appear" variants={fadeInUp}>{ datas.title }</motion.h1>
        <motion.p className="p1 secondary-appear" variants={fadeInUp}>{ datas.description }</motion.p>
        <motion.hr className="separator secondary-appear" variants={fadeInUp}/>
        <motion.div variants={fadeInUp}>
          <ListPosts className=" secondary-appear" posts={ posts } categories={ datas.allCategories } maxPagination={ 6 } />
        </motion.div>
      </motion.div>
    </HomeStyle>
  )
}

export default Home;
