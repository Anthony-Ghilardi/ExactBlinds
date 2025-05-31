# Exact Blinds - Save, Edit, and Estimate Your Blind Measurements Today

Exact Blinds provides powerful tools for accurately measuring, saving, and customizing blinds for your home. With built-in blind-cutting utilities, users can calculate how much material needs to be trimmed for a perfect fit. The designer tool includes access to a virtual showroom, where users can save and manage window measurements across multiple designs—whether for different rooms or entirely separate homes. 

## Table of Contents

- [Overview](#exact-blinds---save-edit-and-estimate-your-blind-measurements-today)
- [Deployed Website](#deployed-website)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Upcoming Features](#upcoming-features)
- [Author](#solo-project-created-by)

## Deployed Website

- Frontend
  - https://exactblindsfrontend-production.up.railway.app/
  - Hosted on: [Railway](https://railway.com/)
- Backend
  - Node.js
  - Hosted on: [Railway](https://railway.com/)
- Database
  - PostgreSQL
  - Hosted on: [Railway](https://railway.com/)

### Getting Started

Prerequisites
- Node.js
- npm
- PostgreSQL
- Firebase project setup for authentication

Installation
1. Clone the repository.
  - git clone https://github.com/Anthony-Ghilardi/exact-blinds.git
2. Navigate into project directories and install dependencies.
  - cd frontend
    - npm install
  - cd backend
    - npm install
3. Set up .env files for frontend and backend.
  - Frontend .env
    - REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
  - Backend .env
    - PG_HOST=YOUR_PG_HOST
    - PG_PORT=YOUR_PG_PORT
    - PG_DATABASE=YOUR_PG_DATABASE
    - PG_USER=YOUR_PG_USER
    - PG_PASSWORD=YOUR_PG_PASSWORD
    - PORT=YOUR_PORT
4. Start development servers.
  - For frontend
    - npm start
  - For backend 
    - npm run dev

### Technologies

Frontend:
- [Toastify](https://www.npmjs.com/package/react-toastify)
  - Provides user-friendly notifications for interactions and feedback.
- [uuid](https://www.npmjs.com/package/uuid?activeTab=readme)
  - Generates unique IDs for users and application state handling.
- [Tippy.js/react](https://www.npmjs.com/package/@tippyjs/react)
  - Adds accessible and customizable tooltips for enhanced UX.
- [Firebase Auth](https://firebase.google.com/docs/auth)
  - Handles user signup, login, and authentication. 

Backend:
- [Node.js express](https://expressjs.com/)
  - Serves HTTP requests and routes
- [node-postgres](https://node-postgres.com/)
  - Handles communication with PostgreSQL database
- [nodemon](https://www.npmjs.com/package/nodemon)
  - Automatically restarts server during development.
- [firebase-admin](https://firebase.google.com/docs/admin/setup)
  - Handles user token authentication.

### Upcoming features

- Mobile responsive layouts.
- Editing, updating, deleting account information.

### Author 

Anthony Ghilardi
  - [Github:](https://github.com/Anthony-Ghilardi)
  - [LinkedIn:](https://www.linkedin.com/in/anthony-ghilardi/)