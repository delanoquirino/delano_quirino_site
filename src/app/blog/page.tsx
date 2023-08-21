
import { PageBlog } from "@/components/PageBlog";
import { BlogPageData } from "@/types/page-blog";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";



const getPageData = async (): Promise<BlogPageData> => {
  const GET_ALL_POSTS = `
  query MyQuery {
    posts(orderBy: publishedAt_DESC){
      createdAt
      id
      publishedAt
      slug
      subtitle
      title
      updatedAt
      coverImage{
        url
      }
      author {
        name
      }
      content {
        json
      }
    }
  }
`;

return fetchHygraphQuery(
  GET_ALL_POSTS,
  
)
}

export default async function Blog() {
  const {posts:BlogData} = await getPageData();
    console.log(BlogData)
  return (
    <PageBlog blogInfo={BlogData}/>
  );
}
