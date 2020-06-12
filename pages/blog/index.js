import BlogContent, {title} from '../../content/Blog.mdx'
import {useRouter} from 'next/router'
const Blog = () => {
  const router = useRouter();
  console.log(router);
return <>
  <BlogContent />
</>}
Blog.title = title;

Blog.getInitialProps = ({ ctx, req }) => {
  if (typeof req === 'object') {
  }
  const path = require('path');
  console.log(path.join(__dirname, '/'));
  return {}
  // const fs = require('fs');
}
Blog.isMDXComponent = true;
export default Blog;