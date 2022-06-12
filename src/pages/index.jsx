import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import pick from '@/helpers/pick';
import Home from '../components/pages/home';

const mdxComponents = {};

const Page = (props) => {
  // const MDXContent = useMDXComponent(props.posts);
  return (
    <>
      {/* <MDXContent components={mdxComponents} /> */}
      <Home posts={ props.posts } />
    </>
  )
}

Page.r3f = (props) => (
  <></>
)

export default Page

export async function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'publishedAt',
        'description',
        'image',
        'category',
        'externalLink',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
