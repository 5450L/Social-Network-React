import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": 'e1d37797-9076-482e-8f1a-cde3e95b1183'
        }
    }
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`
            ).then(response => {
                return response.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    }
};

export const authAPI = {
    auth() {
        return instance
            .get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const profileAPI = {
    setUserProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}
