import express from 'express';
import cors from 'cors';
import routes from './routes.js'; // Assuming your routes file is named routes.js
import { connection } from './postgres/postgres.js'; // Your database connection

const app = express();
const port = 5000; // Or any other port

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use('/api', routes); // Prefix API routes with /api

connection(); // Initialize DB connection

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
