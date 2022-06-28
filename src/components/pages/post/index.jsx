import IconArrow from '@/components/dom/iconArrow';
import { PostStyle } from '@/components/pages/post/index.style'
import { motion } from 'framer-motion';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

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
        <Link href="/">
          <a className='back a2'>
            <IconArrow orientation='left' />
            <span>Back</span>
          </a>
        </Link>
        <MDXContent components={mdxComponents} />
      </motion.div>
    </PostStyle>
  )
}

export default Post;
