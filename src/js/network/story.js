import ApiEndpoint from "../config/api-endpoints"
import HTTPRequest from "../config/http-request"

const StoryRequest = {
    async getAll(page = 1, limit = 15) {
        return await HTTPRequest.get(ApiEndpoint.GET_ALL_STORIES, {
            params: {
                page,
                limit
            }
        })
    },

    async create(body) {
        return await HTTPRequest.post(ApiEndpoint.POST_STORY, body)
    },

    async getOne(id) {
        return await HTTPRequest.get(ApiEndpoint.GET_STORY_BY_ID(id))
    },
}
  
export default StoryRequest