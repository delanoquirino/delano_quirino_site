
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
    json: [];
  }

};

export type PostInfoProps = {
  post: PostsInfo[];
};

export type PostPageStaticData = {
  post: {
    slug: string
  }[]
}

export interface PagePostProps {
posts: PostsInfo;

}