import {api} from "../axios.js";

const API = "/factures";

// 🔹 GET ALL
export async function getFactures() {
  const res = await api.get(API);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 CREATE
export async function createFacture(data) {
  const res = await api.post(API, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 GET ONE
export async function getFacture(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 UPDATE
export async function updateFacture(id, data) {
  const res = await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 DELETE
export async function deleteFacture(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Facture supprimée" }]
  };
}