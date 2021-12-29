
class AuthService{
    registerSuccessfulLogin=(username,post)=>{
        sessionStorage.setItem(username,post);
    }
    isLoggedIn=()=>{
        if(sessionStorage.length>0) return true;
        else return false;
    }
    logout=()=>{
        sessionStorage.clear();
    }
  
}

export default new AuthService();