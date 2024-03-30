import express from "express";
import { createFile } from "../controllers/filesControllers.js";
import { createFileSchema } from "../schemas/filesSchemas.js";
import validateBody from "../helpers/validateBody.js";
import { checkExtention } from "../middleWares/checkExtention";

const filesRouter = express.Router();

// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtention,
  createFile
);

// contactsRouter.put("/:id", updateContact);

export default filesRouter;
