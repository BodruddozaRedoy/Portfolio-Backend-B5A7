# Portfolio Backend B5A7

A TypeScript and Express backend for managing portfolio content such as users, projects, and blogs. Data is stored in PostgreSQL via Prisma ORM, with automatic admin bootstrapping and basic authentication endpoints.

## Features
- RESTful endpoints for users, projects, and blogs with CRUD support.
- PostgreSQL data models managed through Prisma Client and migrations.
- Automatic admin account creation on startup seeded from environment variables.
- Simple login endpoint with bcrypt password verification.
- CORS and JSON body parsing configured for local frontend integration.

## Tech Stack
- Node.js 20+
- TypeScript
- Express 5
- Prisma ORM
- PostgreSQL
- bcrypt
- dotenv and dotenv-vault for secrets management
- cors

## Prerequisites
- Node.js 20 or later and npm
- Access to a PostgreSQL database
- Prisma CLI (installed automatically with devDependencies)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (or use `.env.vault`) with the required variables listed below.
3. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
4. Apply database migrations to create the schema:
   ```bash
   npx prisma migrate deploy
   ```
   For local development you can alternatively run:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   The server listens on `http://localhost:5000` by default.

## Environment Variables
Set the following keys in `.env` (values omitted intentionally):
- `PORT` (optional, defaults to `5000`)
- `DATABASE_URL`
- `DIRECT_URL`
- `ADMIN_NAME`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

The first application start after setting admin credentials will hash the password and create the admin user if it does not already exist.

## Available Scripts
- `npm run dev` - start the server with `ts-node-dev` and live reload.
- `npm run build` - compile TypeScript to JavaScript into `dist/`.
- `npm start` - run the compiled server from `dist/`.
- `npm run postinstall` - automatically invoked to generate the Prisma client after dependency installation.

## API Overview
Base URL: `http://localhost:5000/api/v1`

### Auth
- `POST /auth/login` - authenticate with `email` and `password`.

### Users
- `GET /user/` - list users.
- `POST /user/` - create a user; expects `name`, `email`, and `password`.

### Blogs
- `GET /blog/` - list blogs (includes author data).
- `GET /blog/:id` - fetch a single blog.
- `POST /blog/` - create a blog; requires `userId` and content fields.
- `PATCH /blog/:id` - update a blog.
- `DELETE /blog/:id` - remove a blog.

### Projects
- `GET /project/` - list projects (includes owner data).
- `GET /project/:id` - fetch a single project.
- `POST /project/` - create a project; requires `userId`, `title`, `description`, and `techStack`.
- `PATCH /project/:id` - update a project.
- `DELETE /project/:id` - remove a project.

All POST and PATCH routes expect JSON bodies.

## Project Structure
```
.
+-- prisma/
|   +-- migrations/
|   \-- schema.prisma
+-- src/
|   +-- app.ts
|   +-- server.ts
|   +-- config/
|   |   \-- db.ts
|   +-- prisma/
|   |   \-- client.ts
|   \-- modules/
|       +-- auth/
|       +-- blogs/
|       +-- projects/
|       \-- user/
+-- package.json
\-- tsconfig.json
```

## Additional Notes
- CORS currently allows requests only from `http://localhost:3000`. Adjust `src/app.ts` if you need to support other origins.
- Prisma models live in `prisma/schema.prisma`. Update the schema and rerun `npx prisma migrate dev` to evolve the database.
- `json-web-token` is listed in dependencies but not used by the code base yet. Remove it or integrate JWT handling if needed.
- The repository includes `.env.vault` support for managing environment variables securely across environments.
