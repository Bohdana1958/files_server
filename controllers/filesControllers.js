import fs from "fs/promises";
import path from "path";
import httpError from "../helpers/HttpError.js";

const folderPath = path.resolve("./files");

export const createFile = async (req, res, next) => {
  const { content, filename } = req.body;

  const pathToFile = path.resolve("./files", filename);

  try {
    await fs.writeFile(pathToFile, content, "utf-8");
    res.status(201).json({
      message: "Created successfully",
    });
  } catch (e) {
    next(e);
  }
};

export const getFiles = async (req, res, next) => {
  try {
    const contains = await fs.readdir(folderPath);
    if (contains.length === 0) {
      throw httpError(404, "File not found");
    }

    res.json(contains);
  } catch (e) {
    next(e);
  }
};

export const getFileInfo = async (req, res, next) => {
  try {
    const { filename } = req.params;
    const pathToFile = path.resolve("./files", filename);
    const files = await fs.readdir(folderPath);
    const isFileExists = files.find((file) => file === filename);

    if (!isFileExists) {
      throw httpError(404, "File doesn't exists");
    }
    const content = await fs.readFile(pathToFile, "utf-8");

    const fileExtension = path.extname(pathToFile);
    const basename = path.basename(pathToFile, fileExtension);
    const fileStats = await fs.stat(pathToFile);

    res.json({
      name: basename,
      extension: fileExtension.slice(1),
      size: fileStats.size,
      content,
    });
  } catch (e) {
    next(e);
  }
};
