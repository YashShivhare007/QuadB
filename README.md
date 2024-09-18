# Project README

## About Project

The project includes a responsive frontend, light/dark mode functionality(as done in the reference website) using ReactJs,tailwindCSS and Vite, and the integration of the top 10 API entries with PostgreSQL, Node.js, and Express.js that refreshes after every 60 seconds(as was being done in the reference website) as outlined.


## Overview

This project consists of a frontend and a backend component. Below are the instructions to get both up and running on your local machine.

## Prerequisites

Make sure you have the following installed:
- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install the required node modules:**

   ```bash
   npm install
   ```

3. **Run the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend should now be accessible at `http://localhost:5173` (or whichever port is specified in the rerminal by vite).

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install the required node modules:**

   ```bash
   npm install
   ```

3. **Start the backend server using Nodemon:**

   ```bash
   nodemon index.js
   ```

   The backend server should now be running and accessible at `http://localhost:8000` (or whichever port is specified in your configuration).

## Video Demonstration

For a walkthrough of the project, please refer to the following video demonstration:

[Video Demonstration](https://drive.google.com/file/d/1irO3lgesffR7F1lVhmvMRg3FVUDq8ba7/view?usp=sharing)

## Troubleshooting

- **Frontend issues:** Ensure that all dependencies are installed correctly and that no errors are reported in the console.
- **Backend issues:** Verify that `nodemon` is installed globally or within your project. If `nodemon` is not recognized, you can install it globally with `npm install -g nodemon`.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

