type Post = {
    userId:number,
    id: number,
    title: string,
    body: string,
}

interface BlogPostProps {
  post: Post
}

const BlogPost = ({ post }: BlogPostProps) => {
    const {userId, id, title, body} = post;
    return (
        <div className="blog-post">
            <h2>Title: {title}</h2>
            <p key={id}> Content: {body}</p>
            <p>Author: {userId}</p>
        </div>
    )

}

export default BlogPost;