import { api } from "../axios.js";

const API = "/clients";

// GET ALL
export async function getClients() {
  const res = await api.get(API);

  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// CREATE
export async function createClient(data) {
  await api.post(API, data);
  return {
    content: [{ type: "text", text: "Client ajouté" }]
  };
}

// UPDATE
export async function updateClient(id, data) {
  await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: "Client updated" }]
  };
}

// DELETE
export async function deleteClient(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Client deleted" }]
  };
}

// GET BY ID
export async function getClient(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}