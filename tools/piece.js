import { api } from "../axios.js";

const API = "/pieces";

// 🔹 GET ALL
export async function getPieces() {
  const res = await api.get(API);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 CREATE
export async function createPiece(data) {
  const res = await api.post(API, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 GET ONE
export async function getPiece(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 UPDATE
export async function updatePiece(id, data) {
  const res = await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// 🔹 DELETE
export async function deletePiece(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Piece supprimée" }]
  };
}