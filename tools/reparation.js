import { api } from "../axios.js";

const API = "/reparations";

// 🔹 GET ALL
export async function getReparations() {
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
export async function getReparation(id) {
  try {
    const res = await api.get(`${API}/${id}`);

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

// 🔹 CREATE
export async function createReparation(data) {
  try {
    await api.post(API, data);

    return {
      content: [{ type: "text", text: "Réparation créée" }]
    };
  } catch (err) {
    return {
      content: [{ type: "text", text: err.message }]
    };
  }
}

// 🔹 UPDATE
export async function updateReparation(id, data) {
  try {
    await api.put(`${API}/${id}`, data);

    return {
      content: [{ type: "text", text: "Réparation mise à jour" }]
    };
  } catch (err) {
    return {
      content: [{ type: "text", text: err.message }]
    };
  }
}

// 🔹 DELETE
export async function deleteReparation(id) {
  try {
    await api.delete(`${API}/${id}`);

    return {
      content: [{ type: "text", text: "Réparation supprimée" }]
    };
  } catch (err) {
    return {
      content: [{ type: "text", text: err.message }]
    };
  }
}