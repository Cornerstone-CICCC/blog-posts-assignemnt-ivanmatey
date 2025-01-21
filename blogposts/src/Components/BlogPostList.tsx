import BlogPost from "./BlogPost";

type Post = {
    userId:number,
    id: number,
    title: string,
    body: string,
}

// // type List = {
// //     blogList:Posts[]
// // }

interface BlogPostListProps {
  posts: Post[]
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
    if (!posts.length) return <p>No posts available.</p>;
  
    return (
      <div className="post-list">
        {posts.map((post:Post) => (
            <BlogPost key={post.id} post={post}/>
        ))}
      </div>
    );
  };
  
  export default BlogPostList;