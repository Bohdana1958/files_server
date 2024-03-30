import HttpError from "../helpers/HttpError.js";
export const checkExtention = (req, res, next) => {
  const EXTENTIONS = ["html", "css", "js", "json", "txt"];
  const fileName = req.body.filename;
  const extention = fileName.split(".").pop();
  if (EXTENTIONS.includes(extention)) {
    next();
    return
  }
  next(HttpError(400, `Sorry, this app doesnt support extension ${extention}!`));
};
