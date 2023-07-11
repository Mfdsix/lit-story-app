import ApiEndpoint from "../config/api-endpoints"
import HTTPRequest from "../config/http-request"

const AuthRequest = {
    async register(body) {
        return await HTTPRequest.post(ApiEndpoint.REGISTER, body)
    },
    
    async login(body) {
        return await HTTPRequest.post(ApiEndpoint.LOGIN, body)
    },
}
  
export default AuthRequest