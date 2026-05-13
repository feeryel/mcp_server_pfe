import { api } from "../axios.js";

const API = "/planning";

// 🔹 GET ALL
export async function getPlannings() {
  try {
    const res = await api.get(API);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(res.data)
        }
      ]
    };
  } catch (err) {
    return {
      content: [{ type: "text", text: err.message }]
    };
  }
}

// 🔹 GET ONE
export async function getPlanning(id) {
  const res = await api.get(`${API}/${id}`);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(res.data)
      }
    ]
  };
}

// 🔹 CREATE
export async function createPlanning(data) {
  await api.post(API, data);

  return {
    content: [{ type: "text", text: "Planning créé" }]
  };
}

// 🔹 UPDATE
export async function updatePlanning(id, data) {
  await api.put(`${API}/${id}`, data);

  return {
    content: [{ type: "text", text: "Planning mis à jour" }]
  };
}

// 🔹 DELETE
export async function deletePlanning(id) {
  await api.delete(`${API}/${id}`);

  return {
    content: [{ type: "text", text: "Planning supprimé" }]
  };
}