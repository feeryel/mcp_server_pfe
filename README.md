# 🤖 MCP Server — Repair Management System

A custom **Model Context Protocol (MCP) Server** that connects a local AI layer powered by **Ollama** to the **Repair Management System** through structured tools.

The project enables a locally running Large Language Model (LLM) to interact with the repair workshop backend through MCP tools, allowing AI-driven retrieval and management of business data without direct access to the database.

---

## 🧠 What is this project?

The **MCP Server** acts as a bridge between a local AI model and the Repair Management System REST API.

Instead of giving an AI model direct access to the database, the MCP server exposes a controlled set of **structured tools** representing the application's business operations.

The AI can determine which tool is required based on the user's request and execute the corresponding operation through the MCP protocol.

### Architecture Overview

```text
┌──────────────────────────────┐
│       Local AI / LLM         │
│                              │
│           Ollama             │
│       Local AI Model         │
└──────────────┬───────────────┘
               │
               │ MCP
               ▼
┌──────────────────────────────┐
│         MCP Server           │
│                              │
│  • Structured Tools          │
│  • Tool Discovery            │
│  • Tool Execution            │
│  • Input Validation          │
│  • JWT Management            │
└──────────────┬───────────────┘
               │
               │ REST / HTTP
               │ Axios
               ▼
┌──────────────────────────────┐
│    Repair Management API     │
│                              │
│     Node.js / Express        │
└──────────────┬───────────────┘
               │
               ▼
        MySQL / MariaDB

        🧠 Local AI with Ollama

The project uses Ollama to run the Large Language Model locally.

This architecture allows the AI layer to operate locally while communicating with the application through the MCP protocol.

User Request
     │
     ▼
Local LLM
(Ollama)
     │
     │ Tool Selection
     ▼
MCP Tool
     │
     ▼
MCP Server
     │
     ▼
Repair Management API
     │
     ▼
MySQL / MariaDB
     │
     ▼
Result
     │
     ▼
Ollama
     │
     ▼
Natural Language Response

The LLM is responsible for understanding the user's request and determining which available MCP tool should be used.

The MCP server is responsible for executing the requested operation through the existing backend API.

✨ Key Features
👥 Client Management

AI agents can interact with customer data through dedicated MCP tools.

Available operations include:

List clients
Create a client
Retrieve a client by ID
Update client information
Delete a client

Example:

"Show me all registered clients."

The local AI model can identify the appropriate MCP tool and request the corresponding operation.

💻 Device Management

The MCP server provides tools for managing customer devices.

Available operations:

List devices
Create a device
Retrieve a device
Update device information
Delete a device

Device information can include:

Brand
Model
Serial number
Device type
Associated customer
🛠️ Repair Management

The AI layer can interact with repair records through MCP tools.

Available operations:

List repairs
Create a repair
Retrieve a repair
Update a repair
Delete a repair

Repair information can include:

Repair description
End date
Labor time
Repairability status
Repair request
Assigned technician
📋 Repair Requests

The server exposes tools for managing repair requests.

Available operations:

List repair requests
Create a repair request
Retrieve a repair request
Update a repair request
Delete a repair request

A repair request can contain information such as:

Deposit date
Expected repair date
Failure symptoms
Status
Device
Label identifier
🧾 Invoice Management

AI agents can interact with invoice data through MCP tools.

Available operations:

List invoices
Create invoices
Retrieve invoices
Update invoices
Delete invoices

Invoice information includes:

Invoice number
Date
Amount excluding tax
VAT
Fiscal stamp
Total amount
Associated repair
🔩 Spare Parts Management

The MCP server exposes tools for managing spare parts used in repairs.

Available operations:

List spare parts
Create a spare part
Retrieve a spare part
Update a spare part
Delete a spare part

Supported information includes:

Part code
Name
Price excluding tax
Stock quantity
📅 Planning Management

AI agents can interact with workshop planning.

Available operations:

List planning records
Create planning records
Retrieve planning records
Update planning records
Delete planning records

Planning information includes:

Start date
End date
Repair request
Responsible user
👤 User Management

The MCP server provides user management tools including:

List users
Create users
Retrieve users
Update users
Delete users

User information includes:

Login
Password
Role
🔧 Repair Line Management

Repair line items can also be managed through MCP.

Operations include:

List repair lines
Create a repair line
Retrieve a repair line
Update a repair line
Delete a repair line

A repair line associates:

A repair
A spare part
Quantity
Unit price
🔐 Authentication

The MCP server supports JWT authentication when communicating with the Repair Management backend.

A dedicated setToken tool allows the MCP server to store the JWT token used for authenticated API requests.

User
  │
  ▼
Ollama
  │
  ▼
setToken(JWT)
  │
  ▼
MCP Server
  │
  ▼
Authenticated REST API Request
  │
  ▼
Repair Management Backend

This allows the MCP server to perform authenticated operations while respecting the security mechanisms already implemented by the backend.

🧩 MCP Tools

The server exposes a collection of structured tools through the Model Context Protocol.

Clients
getClients
createClient
getClient
updateClient
deleteClient
Devices
getAppareils
createAppareil
getAppareil
updateAppareil
deleteAppareil
Repairs
getReparations
createReparation
getReparation
updateReparation
deleteReparation
Repair Requests
getDemandes
createDemande
getDemande
updateDemande
deleteDemande
Invoices
getFactures
createFacture
getFacture
updateFacture
deleteFacture
Spare Parts
getPieces
createPiece
getPiece
updatePiece
deletePiece
Planning
getPlannings
createPlanning
getPlanning
updatePlanning
deletePlanning
Users
getUsers
createUser
getUser
updateUser
deleteUser
Repair Lines
getLignes
createLigne
getLigne
updateLigne
deleteLigne

The tools use structured schemas to define their inputs and required parameters.

🏗️ Complete Architecture

The project follows an:

AI → MCP → REST API → Database

architecture.

                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Ollama / LLM     │
                    │                     │
                    │   Local AI Model    │
                    └──────────┬──────────┘
                               │
                               │ MCP
                               ▼
                    ┌─────────────────────┐
                    │     MCP Server      │
                    │                     │
                    │ • Tool Discovery    │
                    │ • Tool Execution    │
                    │ • Input Schemas     │
                    │ • JWT Management    │
                    └──────────┬──────────┘
                               │
                               │ Axios / HTTP
                               ▼
                    ┌─────────────────────┐
                    │   Backend REST API  │
                    │                     │
                    │ Node.js + Express   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   MySQL / MariaDB   │
                    └─────────────────────┘
Data Flow
User Request
     ↓
Ollama interprets the request
     ↓
Selects the appropriate MCP tool
     ↓
MCP Server executes the tool
     ↓
Axios sends HTTP request
     ↓
Repair Management REST API
     ↓
MySQL / MariaDB
     ↓
Result returned to MCP Server
     ↓
Ollama processes the result
     ↓
Natural language response
🛠️ Tech Stack
AI & MCP
Ollama
Local Large Language Models (LLMs)
Model Context Protocol (MCP)
@modelcontextprotocol/sdk
MCP Tools
Structured tool schemas
n8n-nodes-mcp
Backend Communication
Axios
REST API
HTTP / JSON
JWT authentication
Validation
Zod
Runtime
Node.js
JavaScript
ES Modules
📦 Main Dependencies
Technology	Purpose
Ollama	Local LLM execution
MCP SDK	Model Context Protocol implementation
Axios	REST API communication
Zod	Input validation and schemas
n8n-nodes-mcp	MCP / n8n integration
Node.js	Runtime environment
📂 Project Structure
mcp_server_pfe/
│
├── tools/
│   ├── client.js
│   ├── appareil.js
│   ├── reparation.js
│   ├── demandereparation.js
│   ├── facture.js
│   ├── lignereparation.js
│   ├── piece.js
│   ├── planning.js
│   └── user.js
│
├── .vscode/
│
├── axios.js
├── config.js
├── server.js
├── package.json
├── package-lock.json
└── README.md

The tools/ directory contains domain-specific MCP operations, while server.js registers and executes the available tools.

⚙️ Installation
Prerequisites

Make sure you have:

Node.js
npm
Ollama
A local LLM compatible with your Ollama setup
A running Repair Management backend
MySQL / MariaDB configured for the backend
An MCP-compatible client
1. Clone the repository
git clone https://github.com/feeryel/mcp_server_pfe.git


cd mcp_server_pfe
2. Install dependencies
npm install
3. Install and Run Ollama

Install Ollama on your machine and download a compatible local model.

Example:

ollama pull llama3

Start Ollama:

ollama serve

Check installed models:

ollama list

The exact model can be changed depending on your hardware and project requirements.

4. Configure the Backend URL

The MCP server communicates with the Repair Management REST API.

Configure the backend URL in config.js.

Example:

export const BASE_URL = "http://localhost:3000";

Update the URL if your backend runs on another host or port.

▶️ Running the MCP Server

Start the MCP server with:

node server.js

The server uses STDIO transport, making it suitable for integration with MCP-compatible clients and AI development environments.

🔌 MCP Integration

Once the MCP server is connected to an MCP-compatible AI client, the AI can discover the available tools and use them according to the user's request.

Example:

User:
"Show me the clients currently registered in the repair workshop."


        ↓


Ollama
        ↓
Understands the request
        ↓
Selects getClients
        ↓
MCP Server
        ↓
Axios
        ↓
Repair Management REST API
        ↓
Database
        ↓
Client data
        ↓
Ollama
        ↓
Natural language response
💬 Example AI Interactions
Retrieve Clients
User:
"Show me all registered clients."

Possible tool:

getClients
Retrieve Repairs
User:
"Show me the repairs currently in progress."

Possible tool:

getReparations
Create a Repair Request
User:
"Create a repair request for device #42 with
the symptom: broken screen."

Possible tool:

createDemande
Retrieve Invoices
User:
"Show me the invoices associated with the repair workshop."

Possible tool:

getFactures
🔒 Security Considerations

The architecture intentionally avoids giving the AI direct access to the database.

❌ AI → Database


✅ AI → MCP Tool → REST API → Database

This provides a controlled layer between the AI model and the application's data.

The MCP server acts as a gateway for AI-driven operations while relying on the backend's authentication and authorization mechanisms.

JWT authentication is used when communicating with protected backend endpoints.

🎯 Project Objectives

The main objectives of this project are to:

Connect a local LLM to a real-world business application
Use Ollama for local AI inference
Implement the Model Context Protocol
Expose backend capabilities as structured MCP tools
Allow AI agents to interact with business data
Avoid direct database access from AI agents
Provide controlled access to business operations
Integrate authentication into AI-driven workflows
Explore AI agents in enterprise applications
Build a reusable architecture for AI-assisted repair management
💡 Technical Highlights
🧠 Local AI

The project uses Ollama to run an LLM locally rather than relying exclusively on a cloud-based model.

🔌 Model Context Protocol

MCP provides a standardized interface between the AI layer and the application's tools.

🛠️ Tool-Based Architecture

Business operations are exposed as structured tools such as:

getClients
createClient
getReparations
createDemande
getFactures
getPieces
getPlannings
🔐 Controlled Access

The AI does not access the database directly.

All operations go through the MCP server and the existing REST API.

🌐 Existing Backend Integration

The MCP server integrates with the existing Node.js / Express Repair Management backend through Axios.

🚀 Future Improvements

Potential improvements include:

Stronger input validation with Zod
More granular authorization per MCP tool
Tool-level permissions
Improved error handling
Logging and observability
Dockerized MCP server
Remote MCP transport
Additional AI-specific tools
More MCP-compatible client integrations
Automated MCP tool testing
Improved conversational memory
More advanced AI workflows
Better model selection for different tasks
🔗 Related Projects

This MCP server is part of the larger Repair Management System ecosystem.

Frontend — Angular

https://github.com/feeryel/repair-management-system

Backend — Node.js / Express

https://github.com/feeryel/Backend_pfe

MCP Server

https://github.com/feeryel/mcp_server_pfe

👩‍💻 Author
Feryel Dadi

Software Engineer — Software Engineering
Master's Degree in Mobile Development Engineering

🌐 Portfolio:
https://portfolio-feryel.vercel.app

💼 LinkedIn:
https://www.linkedin.com/in/feeryel-dadi

🐙 GitHub:
https://github.com/feeryel

📄 License

This project was developed as part of an academic and professional software engineering project.
