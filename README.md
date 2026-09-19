# Apotek Sehat Server

## Setup Guide

### Prerequisites

* Node.js 20 or Node.js 24 is recommended.
* Docker and Docker Compose must be installed.

### Installation

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Make sure the `.env` file exists in the project root.

3. Adjust the server port and database port in the `.env` file according to your local environment.

4. Start the Docker services:

   ```bash
   npm run docker-up
   ```

5. Generate the Prisma Client:

   ```bash
   npm run prisma-generate
   ```

6. Run the Prisma database migrations:

   ```bash
   npm run prisma-migrate
   ```

7. Generate the default admin user *(optional)*:

   ```bash
   npm run generate-seed
   ```

8. Start the development server:

   ```bash
   npm run dev
   ```

The server should now be running on the port configured in your `.env` file.
