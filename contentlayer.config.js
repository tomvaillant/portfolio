import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false },
    category: { type: 'enum', options: ['articles', 'experiments'], default: 'articles', required: true },
    externalLink: { type: 'string', default: null, required: false },
  },
  computedFields
}));

const contentLayoutConfig = makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, 
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        { 
          properties: { className: ['anchor'] }
        }
      ]
    ] 
  }
});

export default contentLayoutConfig;
