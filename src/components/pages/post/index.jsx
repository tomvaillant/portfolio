import { PostStyle } from '@/components/pages/post/index.style'
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

const Post = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <PostStyle>
      <div className="container1">
        <MDXContent components={mdxComponents} />
      </div>
    </PostStyle>
  )
}

export default Post;
