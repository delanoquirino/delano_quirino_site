
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { PostBlog } from "@/components/PostBlog";
import { PagePostProps, PostPageStaticData } from "@/types/postBlog-info";

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
  
  return (
    
      <>
        <PostBlog posts={post}/>
      </>
  );
};

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugQuery() {
      post(first:100) {
          slug
      }
    }
  `
  const {post} = await fetchHygraphQuery<PostPageStaticData>(query)
  return post
}

