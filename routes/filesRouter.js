import express from "express";
import {createFile, getFileInfo, getFiles} from "../controllers/filesControllers.js";
import { createFileSchema } from "../schemas/filesSchemas.js";
import validateBody from "../helpers/validateBody.js";
import { checkExtention } from "../middleWares/checkExtention.js";

const filesRouter = express.Router();

// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtention,
  createFile,
);

filesRouter.get("/", getFiles);

filesRouter.get("/:filename", getFileInfo)

// contactsRouter.put("/:id", updateContact);

export default filesRouter;
