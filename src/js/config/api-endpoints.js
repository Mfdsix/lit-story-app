import Config from './config';

const ApiEndpoint = {
    // auth endpoints
    REGISTER: `${Config.BASE_URL}/register`,
    LOGIN: `${Config.BASE_URL}/login`,

    // story endpoints
    GET_ALL_STORIES: `${Config.BASE_URL}/stories`,
    GET_STORY_BY_ID: (id) => `${Config.BASE_URL}/stories/${id}`,
    POST_STORY: `${Config.BASE_URL}/stories`

};

export default ApiEndpoint;