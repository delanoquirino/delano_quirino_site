
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { PageBlog } from "@/components/PageBlog";
import { PageBlogProps } from "@/types/blog-info";


const getPageData = async (): Promise<PageBlogProps> => {
  const GET_ALL_POSTS = `
  query GetAllPosts {
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      subtitle
      createdAt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;

return fetchHygraphQuery(
  GET_ALL_POSTS,
  
)
}

export default async function Blog() {
  const {posts} = await getPageData();
    
  return (
    <PageBlog posts={posts}/>
  );
}
