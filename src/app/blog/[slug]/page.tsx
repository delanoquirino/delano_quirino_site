
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { PostBlog } from "@/components/PostBlog";
import { PagePostProps } from "@/types/postBlog-info";

type PostProps = {
  params: {
    slug: string
  }
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



export default async function Post({params: {slug}}: PostProps) {
  const {post} = await getPostDetails(slug);
  console.log(post)
  return (
    
      <>
        <PostBlog posts={post}/>
      </>
  );
};

