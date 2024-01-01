interface AboutBlog {
  postsConnection: any;
  aboutBlogsConnection: {
    edges: AboutData[]
  }
}

interface AboutData {
  node: {
    heading: string;
    id: string;
    aboutContent: {
      raw: {
        children?: HTMLElementNode[]; // Add a check for the existence of children
      };
    };
  };
}

interface RecentPosts {
  postsConnection: {
    edges: PostDisplay[]
  }
}

interface PostDisplay {
    node: {
      title: string
      excerpt: string
      createdAt: string
      author: {
        name: string
        slug: string
      }
      id: string
      slug: string
    }
}