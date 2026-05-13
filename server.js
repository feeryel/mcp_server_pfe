import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

// 🔗 tools
import * as client from "./tools/client.js";
import * as appareil from "./tools/appareil.js";
import * as reparation from "./tools/reparation.js";
import * as demande from "./tools/demandereparation.js";
import * as facture from "./tools/facture.js";
import * as ligne from "./tools/lignereparation.js";
import * as piece from "./tools/piece.js";
import * as planning from "./tools/planning.js";
import * as user from "./tools/user.js";
import { setToken } from "./axios.js";
const baseSchema = {
  type: "object",
  properties: {},
  additionalProperties: true
};

// ================= SERVER =================
const server = new Server(
  {
    name: "atelier-mcp",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

// ================= LIST TOOLS =================
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "getClients",
      description: "Lister clients",
      inputSchema: baseSchema
    },
    {
  name: "setToken",
  description: "Set JWT token",
  inputSchema: {
    type: "object",
    properties: {
      token: { type: "string" }
    },
    required: ["token"]
  }
},
    {
      name: "createClient",
      description: "Créer client",
      inputSchema: {
        type: "object",
        properties: {
          nom: { type: "string" },
          email: { type: "string" }
        },
        required: ["nom", "email"],
        additionalProperties: false
      }
    },
{
  name: "getClient",
  description: "Get client by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateClient",
  description: "Update client",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      nom: { type: "string" },
      email: { type: "string" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteClient",
  description: "Delete client",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
    {
      name: "getAppareils",
      description: "Lister appareils",
      inputSchema: baseSchema
    },
   {
  name: "createAppareil",
  description: "Créer appareil",
  inputSchema: {
    type: "object",
    properties: {
      marque: { type: "string" },
      modele: { type: "string" },
      numSerie: { type: "string" },
      type: { type: "string" },
      clientId: { type: "number" }
    },
    required: ["marque", "modele", "numSerie", "type", "clientId"],
    additionalProperties: false
  }
},
{
  name: "getAppareil",
  description: "Get appareil by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateAppareil",
  description: "Update appareil",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      marque: { type: "string" },
      modele: { type: "string" },
      numSerie: { type: "string" },
      type: { type: "string" },
      clientId: { type: "number" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteAppareil",
  description: "Delete appareil",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
    {
      name: "getReparations",
      description: "Lister réparations",
      inputSchema: baseSchema
    },
{
  name: "createReparation",
  description: "Créer réparation",
  inputSchema: {
    type: "object",
    properties: {
      dateFinRep: { type: "string" },
      descriptionReparation: { type: "string" },
      tempsMainOeuvre: { type: "number" },
      estReparable: { type: "boolean" },
      demandeId: { type: "number" },
      technicienId: { type: "number" }
    },
    required: ["descriptionReparation", "demandeId"],
    additionalProperties: false
  }
},
{
  name: "getReparation",
  description: "Get réparation by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateReparation",
  description: "Update réparation",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      dateFinRep: { type: "string" },
      descriptionReparation: { type: "string" },
      tempsMainOeuvre: { type: "number" },
      estReparable: { type: "boolean" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteReparation",
  description: "Delete réparation",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
  {
  name: "getDemandes",
  description: "Lister demandes",
  inputSchema: {
    type: "object",
    properties: {},
    additionalProperties: false
  }
},
{
  name: "createDemande",
  description: "Créer demande",
  inputSchema: {
    type: "object",
    properties: {
      dateDepot: { type: "string" },
      datePrevueRep: { type: "string" },
      symptomesPanne: { type: "string" },
      etat: { type: "string" },
      idEtiquette: { type: "number" },
      appareilId: { type: "number" }
    },
    required: ["dateDepot", "symptomesPanne", "appareilId"],
    additionalProperties: false
  }
},
{
  name: "getDemande",
  description: "Get demande by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateDemande",
  description: "Update demande",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      description: { type: "string" },
      statut: { type: "string" },
      appareilId: { type: "number" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteDemande",
  description: "Delete demande",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},

    {
      name: "getFactures",
      description: "Lister factures",
      inputSchema: baseSchema
    },


  
  

  {
  name: "getPieces",
  description: "Lister pièces",
  inputSchema: baseSchema
},
{
  name: "createPiece",
  description: "Créer pièce",
  inputSchema: 
{
  type: "object",
  properties: {
    code: { type: "string" },
    nom: { type: "string" },
    prixHT: { type: "number" },
    quantiteEnStock: { type: "number" }
  },
  required: ["code", "nom", "prixHT", "quantiteEnStock"],
  additionalProperties: false
}
},
{
  name: "getPiece",
  description: "Get piece by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updatePiece",
  description: "Update piece",
  inputSchema: {
  type: "object",
  properties: {
    id: { type: "number" },
    code: { type: "string" },
    nom: { type: "string" },
    prixHT: { type: "number" },
    quantiteEnStock: { type: "number" }
  },
  required: ["id"],
  additionalProperties: true
}
},
{
  name: "deletePiece",
  description: "Delete piece",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "createFacture",
  description: "Créer facture",
  inputSchema: {
    type: "object",
    properties: {
      numero: { type: "string" },
      date: { type: "string" },
      montantHT: { type: "number" },
      montantTVA: { type: "number" },
      timbreFiscale: { type: "number" },
      montantTotal: { type: "number" },
      reparationId: { type: "number" } // ✅ AJOUT ICI
    },
    required: ["numero", "date", "montantHT", "montantTVA", "montantTotal", "ReparationId"],
    additionalProperties: false
  }
},{
  name: "getFacture",
  description: "Get facture by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},{
  name: "updateFacture",
  description: "Update facture",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      numero: { type: "string" },
      date: { type: "string" },
      montantHT: { type: "number" },
      montantTVA: { type: "number" },
      timbreFiscale: { type: "number" },
      montantTotal: { type: "number" }
    },
    required: ["id"],
    additionalProperties: true
  }
},{
  name: "deleteFacture",
  description: "Delete facture",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
    {
      name: "getPlannings",
      description: "Lister planning",
      inputSchema: baseSchema
    },
{
  name: "createPlanning",
  description: "Créer planning",
  inputSchema: {
    type: "object",
    properties: {
      dateDebut: { type: "string" },
      dateFin: { type: "string" },
      demandeId: { type: "number" },
      responsableId: { type: "number" }
    },
    required: ["dateDebut", "dateFin", "demandeId", "responsableId"],
    additionalProperties: false
  }
},
{
  name: "getPlanning",
  description: "Get planning by id",
inputSchema: {
  type: "object",
  properties: {
    id: { type: "number" }
  },
  required: ["id"],
  additionalProperties: false
}
},
{
  name: "updatePlanning",
  description: "Update planning",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      dateDebut: { type: "string" },
      dateFin: { type: "string" },
      demandeId: { type: "number" },
      responsableId: { type: "number" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deletePlanning",
  description: "Delete planning",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
    {
      name: "getUsers",
      description: "Lister users",
      inputSchema: baseSchema
    },
  {
  name: "createUser",
  description: "Créer user",
  inputSchema: {
    type: "object",
    properties: {
      login: { type: "string" },
      motDePasse: { type: "string" },
      role: { type: "string" }
    },
    required: ["login", "motDePasse", "role"],
    additionalProperties: false
  }
},{
  name: "getUser",
  description: "Get user by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateUser",
  description: "Update user",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      login: { type: "string" },
      motDePasse: { type: "string" },
      role: { type: "string" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteUser",
  description: "Delete user",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }

},{
  name: "getLignes",
  description: "Lister lignes de réparation",
  inputSchema: baseSchema
},
{
  name: "createLigne",
  description: "Créer ligne de réparation",
  inputSchema: {
    type: "object",
    properties: {
      ReparationId: { type: "number" },
      PieceId: { type: "number" },
      quantite: { type: "number" },
      prixHT: { type: "number" }
    },
    required: ["ReparationId", "PieceId", "quantite", "prixHT"],
    additionalProperties: false
  }
},
{
  name: "getLigne",
  description: "Get ligne by id",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
},
{
  name: "updateLigne",
  description: "Update ligne",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" },
      ReparationId: { type: "number" },
      PieceId: { type: "number" },
      quantite: { type: "number" },
      prixUnitaire: { type: "number" }
    },
    required: ["id"],
    additionalProperties: true
  }
},
{
  name: "deleteLigne",
  description: "Delete ligne",
  inputSchema: {
    type: "object",
    properties: {
      id: { type: "number" }
    },
    required: ["id"],
    additionalProperties: false
  }
}
  ]
}));

// ================= CALL TOOL =================
server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params;

  switch (name) {
    case "getClients":
      return await client.getClients();

    case "createClient":
      return await client.createClient(args);
case "getClient":
  return await client.getClient(Number(args.id));

case "updateClient":
  return await client.updateClient(Number(args.id), args);

case "deleteClient":
  return await client.deleteClient(Number(args.id));

  case "setToken":
  setToken(args.token);
  return {
    content: [{ type: "text", text: "Token saved" }]
  };
    case "getAppareils":
      return await appareil.getAppareils();

    case "createAppareil":
      return await appareil.createAppareil(args);
case "getAppareil":
  return await appareil.getAppareil(Number(args.id));

case "updateAppareil":
  return await appareil.updateAppareil(Number(args.id), args);

case "deleteAppareil":
  return await appareil.deleteAppareil(Number(args.id));
    case "getReparations":
      return await reparation.getReparations();

    case "createReparation":
      return await reparation.createReparation(args);
case "getReparation":
  return await reparation.getReparation(Number(args.id));

case "updateReparation":
  return await reparation.updateReparation(Number(args.id), args);

case "deleteReparation":
  return await reparation.deleteReparation(Number(args.id));
    case "getDemandes":
      return await demande.getDemandes();

    case "createDemande":
      return await demande.createDemande(args);
      case "getDemande":
  return await demande.getDemande(Number(args.id));

case "updateDemande":
  return await demande.updateDemande(Number(args.id), args);

case "deleteDemande":
  return await demande.deleteDemande(Number(args.id));

    case "getFactures":
      return await facture.getFactures();

    case "createFacture":
      return await facture.createFacture(args);
case "getFacture":
  return await facture.getFacture(Number(args.id));

case "updateFacture":
  return await facture.updateFacture(Number(args.id), args);

case "deleteFacture":
  return await facture.deleteFacture(Number(args.id));
    case "getLignes":
      return await ligne.getLignes();

    case "createLigne":
      return await ligne.createLigne(args);
case "getLigne":
  return await ligne.getLigne(Number(args.id));

case "updateLigne":
  return await ligne.updateLigne(Number(args.id), args);

case "deleteLigne":
  return await ligne.deleteLigne(Number(args.id));
case "getPieces":
  return await piece.getPieces();

case "createPiece":
  return await piece.createPiece(args);

case "getPiece":
  return await piece.getPiece(Number(args.id));

case "updatePiece":
  return await piece.updatePiece(Number(args.id), args);

case "deletePiece":
  return await piece.deletePiece(Number(args.id));

    case "getPlannings":
      return await planning.getPlannings();

    case "createPlanning":
      return await planning.createPlanning(args);

case "getPlanning": {
  const id = Number(args?.id);

  if (!id || isNaN(id)) {
    return {
      content: [{ type: "text", text: "❌ Invalid or missing ID" }]
    };
  }

  return await planning.getPlanning(id);
}

case "updatePlanning":
  return await planning.updatePlanning(args.id, args);

case "deletePlanning":
  return await planning.deletePlanning(args.id);

    case "getUsers":
      return await user.getUsers();

    case "createUser":
      return await user.createUser(args);
case "getUser":
  return await user.getUser(Number(args.id));

case "updateUser":
  return await user.updateUser(Number(args.id), args);

case "deleteUser":
  return await user.deleteUser(Number(args.id));
    default:
      throw new Error("Tool inconnue");
  }
});

// ================= START =================
const transport = new StdioServerTransport();
await server.connect(transport);