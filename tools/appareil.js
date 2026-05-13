import { api } from "../axios.js";

const API = "/appareils";

// GET ALL
export async function getAppareils() {
  const res = await api.get(API);

  return {
    content: [
      {
        type: "text",
        text: `Liste des appareils:\n${JSON.stringify(res.data, null, 2)}`
      }
    ]
  };
}

// CREATE
export async function createAppareil(data) {
  await api.post(API, data);
  return {
    content: [{ type: "text", text: "Appareil ajouté" }]
  };
}

// GET BY ID
export async function getAppareil(id) {
  const res = await api.get(`${API}/${id}`);
  return {
    content: [{ type: "text", text: JSON.stringify(res.data) }]
  };
}

// UPDATE
export async function updateAppareil(id, data) {
  await api.put(`${API}/${id}`, data);
  return {
    content: [{ type: "text", text: "Appareil updated" }]
  };
}

// DELETE
export async function deleteAppareil(id) {
  await api.delete(`${API}/${id}`);
  return {
    content: [{ type: "text", text: "Appareil deleted" }]
  };
}