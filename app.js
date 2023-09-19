import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import { router } from "./src/routers.js";
app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("conected to port", port);
});
