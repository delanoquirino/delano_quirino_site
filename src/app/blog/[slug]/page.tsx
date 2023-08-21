
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { PostBlog } from "@/components/PostBlog";
import { PagePostProps } from "@/types/postBlog-info";

interface PostParams {
  params: {
    slug: string;
  };
}

const getPostDetails = async (slug: string): Promise<PagePostProps> => {
  const GET_POST = `
  query GetPost() {
    post(where: { slug: "${slug}"}) {
      id
      title
      slug
      content {
        json
      }
      author {
        name
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`

return fetchHygraphQuery(
  GET_POST,
)
}



export default async function Post({params: {slug}}: PostParams) {
  const {post} = await getPostDetails(slug as string);
  console.log(post)
  return (
    
      <>
        <PostBlog posts={post}/>
      </>
  );
};

