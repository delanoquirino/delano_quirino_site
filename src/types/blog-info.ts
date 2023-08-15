export type BlogPost  = {
    
        id: string;
        slug: string;
        subtitle: string;
        title: string;
        createdAt: string;
        coverImage: {
          url: string;
        };
        author: {
          name: string;
        };
      };
   
  
  export type BlogPostsInfo = {
        posts: BlogPost[];
  };

  export interface PageBlogProps {
    posts: BlogPostsInfo;
  }
  