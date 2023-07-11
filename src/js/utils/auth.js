const AUTH_KEY = "story_app_user"

const AuthUtils = {
    setAuth(user) {
        return sessionStorage.setItem(AUTH_KEY, JSON.stringify(user))
    },
    getAuth() {
        return JSON.parse(sessionStorage.getItem(AUTH_KEY));
    },
    destroyAuth() {
      return sessionStorage.removeItem(AUTH_KEY);
    },
  };
  
  export default AuthUtils;