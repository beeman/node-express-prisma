# node-express-prisma

This starter implements a basic Express server with Prisma and TypeScript.

## Requirements

- Basic Node and TypeScript knowledge
- Node 16+
- Yarn 1.22.x

## Running this project

### 1. Clone the repo

```shell
git clone https://github.com/beeman/node-express-prisma.git
cd node-express-prisma
```

### 2. Install the dependencies

```shell
yarn install
```

### 3. Configure your environment

You need to create the `.env` file and configure the settings. All the env vars are required.

Read the `.env.example` file for configuration options.

```shell
// Or use your editor to copy the file...
cp .env.example .env
```

### 4. Run the server

```shell
yarn dev
```

### 5. Call server endpoints

#### Register a new user

```shell
curl -XPOST http://localhost:4000/register --header "Content-Type: application/json" --data '{ "email": "a@a.com", "password": "12345678" }'
```

#### Login

```shell
curl -XPOST http://localhost:4000/login --header "Content-Type: application/json" --data '{ "email": "a@a.com", "password": "12345678" }'
```

#### Get user info

```shell
curl -XGET http://localhost:4000/me --header "Content-Type: application/json" --header "Authorization: Bearer <token>"
```

## Docker

You can also run this project using Docker.

```shell
cp .env.example .env
# Edit the .env file
docker compose up
```
