﻿# nest-fullstack

A full-stack authentication module built with React + TypeScript on the front end and NestJS + MongoDB on the back end. The project implements secure and production-ready user registration and login functionality, following modern best practices.

✨ Features
🔐 Sign Up: Email, name, and secure password validation

🔑 Sign In: Authentication with token-based access

🔒 Protected Route: Simple authenticated page

💅 TypeScript: Full type safety on both client and server

🧰 Modular Code: Clean and maintainable architecture

📄 API Docs (Optional Swagger)

🧾 Logging & Error Handling (Optional)

full-stack-auth/
├── client/           # React + TypeScript front end
└── server/           # NestJS + MongoDB back end

🚀 Getting Started
🖥️ Front End (React + TypeScript)
Prerequisites
    Node.js v18+

    npm or yarn

setup

cd client
npm install
# or
yarn install


Run
npm run dev
# or
yarn dev

⚙️ Back End (NestJS + MongoDB)
Prerequisites
    Node.js v18+

    MongoDB instance (local or cloud)

Setup

cd server
npm install

Create a .env file in server/ with the following:

DB_URL=mongodb://localhost:27017/library_next_api
JWT_SECRET=codingwithabbas
JWT_EXPIRE=3d

Run
npm run start:dev



📦 API Endpoints
POST /auth/signup
Creates a new user. Requires:

email

name

password (must include letter, number, special char, min 8 chars)

POST /auth/signin
Returns JWT if credentials are valid.

GET /app
Protected route. Requires Authorization header: Bearer <token>

🔒 Password Rules
Minimum 8 characters

At least one letter

At least one number

At least one special character

✅ Optional Features
✅ API Documentation via Swagger (/api endpoint)
localhost:3000/api/

✅ Basic logging

✅ Modular folder structure

✅ Error handling middleware
