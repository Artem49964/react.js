const PostComponent = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <hr/>

        </div>
    );
};

export default PostComponent;