import IconArrow from '@/components/dom/iconArrow';
import { PostStyle } from '@/components/pages/post/index.style'
import { motion } from 'framer-motion';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

const mdxComponents = {
  h1: (props) => <motion.h1 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h2: (props) => <motion.h2 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h3: (props) => <motion.h3 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h4: (props) => <motion.h4 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h5: (props) => <motion.h5 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h6: (props) => <motion.h6 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  h7: (props) => <motion.h7 {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  p: (props) => <motion.p {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  a: (props) => <motion.a {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  ul: (props) => <motion.ul {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  ol: (props) => <motion.ol {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />,
  img: (props) => <motion.img {...props} initial="initial" animate="animate" exit="exit" variants={fadeInUp} />
};

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

const Post = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  console.log(post.body.code)
  return (
    <PostStyle>
      <motion.div className="container-post" initial='initial' animate='animate' variants={stagger}>
        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInUp}>
          <Link href="/">
            <a className='back a2'>
              <IconArrow orientation='left' />
              <span>Back</span>
            </a>
          </Link>
        </motion.div>
        { post.image && <motion.img className='hero' src={ post.image } alt='Image alt' initial="initial" animate="animate" exit="exit" variants={fadeInUp} /> }
        <div className="container-post-content">
          <MDXContent components={mdxComponents} />
        </div>
      </motion.div>
    </PostStyle>
  )
}

export default Post;
