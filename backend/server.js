const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const router = require("./routes/notesRoute");
const connectToDb = require("./utils/db");
const { errorHandler } = require("./middleware/errorHandler");
dotenv.config();

const port = process.env.PORT || 5000;

connectToDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/notes", router);

app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`App listening http://localhost:${port} 🌐`.bgBlue);
});
