import { PostStyle } from '@/components/pages/post/index.style'
import { motion } from 'framer-motion';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

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

const Post = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <PostStyle>
      <motion.div className="container1" initial="initial" animate="animate" exit="exit" variants={fadeInUp}>
        <MDXContent components={mdxComponents} />
      </motion.div>
    </PostStyle>
  )
}

export default Post;
