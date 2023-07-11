import ApiEndpoint from "../config/api-endpoints"
import HTTPRequest from "../config/http-request"

const StoryRequest = (token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    
    return  {
        async getAll(){
            return await HTTPRequest.get(ApiEndpoint.GET_ALL_STORIES, {
                headers
            })
        },
        
        async create(body){
            return await HTTPRequest.post(ApiEndpoint.POST_STORY, body, {
                headers
            })
        },
        
        async getOne(id){
            return await HTTPRequest.get(ApiEndpoint.GET_STORY_BY_ID(id), {
                headers
            })
        }
    }
}

export default StoryRequest