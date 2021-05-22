import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e68468bb-8118-4e9e-90de-878449bcbfeb",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  setIsFollowed(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  setIsUnFollowed(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
