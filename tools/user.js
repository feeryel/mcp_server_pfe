import { api } from "../axios.js";

const API = "/users";

// 🔹 GET ALL
export async function getUsers() {
  const res = await api.get(API);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 GET ONE
export async function getUser(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 CREATE
export async function createUser(data) {
  await api.post(API, data);
  return {
    content: [{ type: "text", text: "User ajouté" }]
  };
}

// 🔹 UPDATE
export async function updateUser(id, data) {
  await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: "User updated" }]
  };
}

// 🔹 DELETE
export async function deleteUser(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "User deleted" }]
  };
}