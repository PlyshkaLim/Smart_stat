import axios from "axios";

const instance = axios.create({
    baseURL: 'http://smartstat.somee.com/',
    withCredentials: true,
    //"API-KEY": "cf552472-48ad-4167-94e3-f0ff3ea7bb4e",
});


export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(userName, password) {
        return instance.post('loginweb?', {userName, password});
        //loginweb?name=name&password=qwerty
    },
    logout(userName, password) {
        return instance.post('deleteuserweb?', {userName, password});
        //loginweb?name=name&password=qwerty
    },
}