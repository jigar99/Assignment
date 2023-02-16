import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/items.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use("/", usersRoutes);
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



