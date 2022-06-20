import Header from '@/components/dom/header';
import PageTransition from '@/components/dom/pageTransition';
import Dom from '@/components/layout/dom';
import Post from '@/components/pages/post';
import HeadMeta from '@/config';
import { allPosts } from 'contentlayer/generated';

const Page = ({ post }) => {
  return (
    <>
      <HeadMeta title={ post.title } description={ post.description } slug={ post.slug } image={ post.image } />
      <Dom>
        <Header />
        <Post post={ post } />
        <PageTransition />
      </Dom>
    </>
  );
};

Page.r3f = () => (
  <></>
)

export default Page;

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find(
    (post) => post.slug === params.slug
  );

  return { props: { post } };
}
