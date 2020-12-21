/* eslint-disable import/no-anonymous-default-export */
import axios from '../../config/axios'

export default {
  login: (credentials) => axios.post("/users/login", credentials),
  register: (payload) => axios.post("/users/register", payload),

  details: () => axios.get("/users"),
};