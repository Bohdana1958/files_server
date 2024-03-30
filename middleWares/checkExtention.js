import HttpError from "../helpers/HttpError.js";
export const checkExtention = (req, res, next) => {
  const EXTENTIONS = ["html", "css", "js", "json", "txt"];
  const fileName = req.body.fileName;
  const extention = fileName.split(".").pop();
  if (EXTENTIONS.includes(extention)) {
    next();
  }
  next(HttpError(400, "Sorry, this app doesnt support this formate!"));
};
