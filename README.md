# Simple Task App

#### Backend Technologies
![Node.js](https://img.shields.io/badge/Node.js-Runtime-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue) ![Express](https://img.shields.io/badge/Express-Framework-lightgrey) ![promise-mysql](https://img.shields.io/badge/promise--mysql-Library-yellow) ![cors](https://img.shields.io/badge/cors-Library-green) ![dotenv](https://img.shields.io/badge/dotenv-Library-red)

#### Frontend Technologies

![HTML](https://img.shields.io/badge/HTML-Markup-red) ![SCSS](https://img.shields.io/badge/SCSS-Stylesheet-ff69b4) ![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue) ![Angular](https://img.shields.io/badge/Angular-Framework-red) ![Bootstrap](https://img.shields.io/badge/Bootstrap-Framework-purple)

This is a simple web application that allows users to manage their tasks. Users can add tasks, mark them as completed or not completed, and delete tasks.
# Backend
The backend of this application is built using Node.js and TypeScript. It uses the Express framework for handling HTTP requests and responses. The backend communicates with a MySQL database using the `promise-mysql` library. Cross-Origin Resource Sharing (CORS) is enabled using the `cors` middleware, and environment variables are managed using `dotenv`.
## Prerequisites
- Node.js (version 20.3.1)
- MySQL database

## Getting Started

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

## API Endpoints

The backend server exposes the following API endpoints:

- `GET /tasks`       : Get all tasks.
- `POST /tasks`      : Create a new task.
- `PATCH /tasks/:id` : Update the status of a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.


# Frontend

The frontend of this application is built using HTML, SCSS, TypeScript, Angular, and Bootstrap.

## Prerequisites

- Node.js (version 20.3.1)
- Angular CLI (version 19.8.1)

## Getting Started

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

## Screenshots

![Screenshot from 2023-06-16 02-12-26]()

## Contributing
Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request.

## License

This project is open-source and free to use, modify, and distribute. Feel free to customize this text editor or use it as a starting point for your own projects.

I encourage you to contribute to this project and help improve it for the community. Any feedback or suggestions are greatly appreciated.

## Acknowledgements

Special thanks to the developers and contributors of the Java and JavaFX communities for their valuable resources and support.

## Contact

For any inquiries or suggestions, please contact [pasinduhas@gmail.com](mailto:pasinduhas@gmail.com).
