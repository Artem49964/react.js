import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
    getAll:() => axiosService.get(urls.posts),
    getById:(id) => axiosService.get(urls.byId(id)),
    create:(post) => axiosService.post(urls.posts, post),
    update:(id, post) => axiosService.put(urls.byId(id), post),
    delete:(id) => axiosService.delete(urls.byId(id))
}


export {
    userService
}