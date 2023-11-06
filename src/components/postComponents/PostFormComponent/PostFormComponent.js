import {useForm} from "react-hook-form";
import {postService} from "../../../services/post.service";

const PostFormComponent = ({setPosts}) => {

    const {reset, handleSubmit, register, formState:{isValid, errors}} = useForm()


    const save =  async (post) => {
        const {data} = await postService.create(post)
        setPosts(prev => [...prev, data])
        reset()

    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export default PostFormComponent;