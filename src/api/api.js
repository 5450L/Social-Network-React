import axios from "axios";

const instanse = axios.create(
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
        return instanse
            .get(
                `users?page=${currentPage}&count=${pageSize}`
            ).then(response => {
                return response.data
            });
    },
    follow(id) {
        return instanse.post(`follow/${id}`)
    },
    unfollow(id) {
        return instanse.delete(`follow/${id}`)
    }
}
