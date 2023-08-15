
export type PostsInfo = {
  id: string;
  title: string;
  slug: string
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
  createdAt: string;
  content: {
    json: ElementNode[]
  }

};

export interface PagePostProps {
posts: PostsInfo;
}