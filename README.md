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
curl --header "Content-Type: application/json" -XPOST http://localhost:4000/register --data '{ "email": "a@a.com", "password": "12345678" }'
```

#### Login

```shell
curl --header "Content-Type: application/json" -XPOST http://localhost:4000/login --data '{ "email": "a@a.com", "password": "12345678" }'
```

## Docker

You can also run this project using Docker.

```shell
cp .env.example .env
# Edit the .env file
docker compose up
```
