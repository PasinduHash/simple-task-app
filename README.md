# Simple Task App

This is a simple web application that allows users to manage their tasks. Users can add tasks, mark them as completed or not completed, and delete tasks.

## Backend

The backend of this application is built using Node.js and TypeScript. It uses the Express framework for handling HTTP requests and responses. The backend communicates with a MySQL database using the `promise-mysql` library. Cross-Origin Resource Sharing (CORS) is enabled using the `cors` middleware, and environment variables are managed using `dotenv`.

### Prerequisites

- Node.js (version X.X.X)
- MySQL database

### Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/PasinduHash/simple-task-app.git
   
2. Navigate to the backend directory:

   ```shell
   cd simple-task-app/back-end
3. Install dependencies:

   ```shell
   pnpm install
4. Set up the environment variables:

   Create a .env file in the backend directory.

   Add the following environment variables and their corresponding values:

   ```shell
   host=<MySQL host>
   port=3306
   database=<MySQL database name>
   user=<MySQL username>
   password=<MySQL password>
   connectionLimit=5

5. Start the server:

   ```shell
   pnpm start

6. The backend server should now be running at http://localhost:8080.

## Frontend

The frontend of this application is built using HTML, SCSS, TypeScript, Angular, and Bootstrap.

### Prerequisites

- Node.js (version X.X.X)
- Angular CLI (version X.X.X)

### Getting Started

1. Navigate to the frontend directory:

   ```shell
   cd simple-task-app/frontend
2. Install dependencies:

   ```shell
   pnpm install

3. Start the development server:

   ```shell
   ng serve

4. Open your browser and visit http://localhost:4200.

