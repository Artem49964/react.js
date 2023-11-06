import {useEffect, useState} from "react";
import PostFormComponent from "../PostFormComponent/PostFormComponent";
import PostsComponent from "../PostsComponents/PostsComponent";
import {postService} from "../../../services/post.service";



const PostContainer = () => {


    const [posts, setPosts] = useState([])


    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])


    return (
        <div>
            <PostFormComponent setPosts={setPosts}/>
            <hr/>
            <PostsComponent posts={posts}/>


        </div>
    );
};

export default PostContainer;