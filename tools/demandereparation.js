import { api } from "../axios.js";

const API = "/demandes";

// GET ALL
export async function getDemandes() {
  const res = await api.get(API);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// CREATE
export async function createDemande(data) {
  await api.post(API, data);
  return {
    content: [{ type: "text", text: "Demande créée" }]
  };
}

// GET BY ID
export async function getDemande(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// UPDATE
export async function updateDemande(id, data) {
  await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: "Demande updated" }]
  };
}

// DELETE
export async function deleteDemande(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Demande deleted" }]
  };
}