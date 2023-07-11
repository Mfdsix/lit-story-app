const ApiEndpoint = {
    // auth endpoints
    REGISTER: `/register`,
    LOGIN: `/login`,

    // story endpoints
    GET_ALL_STORIES: `/stories`,
    GET_STORY_BY_ID: (id) => `/stories/${id}`,
    POST_STORY: `/stories`

};

export default ApiEndpoint;