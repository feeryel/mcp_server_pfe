import {api} from "../axios.js";

const API = "/lignereparations";

// 🔹 GET ALL
export async function getLignes() {
  const res = await api.get(API);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 CREATE
export async function createLigne(data) {
  const res = await api.post(API, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 GET ONE
export async function getLigne(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 UPDATE
export async function updateLigne(id, data) {
  const res = await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 DELETE
export async function deleteLigne(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Ligne supprimée" }]
  };
}