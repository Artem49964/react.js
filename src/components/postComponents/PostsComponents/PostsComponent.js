import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = ({posts}) => {


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;