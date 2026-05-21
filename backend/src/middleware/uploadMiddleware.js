const fs = require("fs");
const path = require("path");
const multer = require("multer");
const slugify = require("slugify");
const { AppError } = require("../utils/AppError");

const uploadDir = path.resolve(__dirname, "../../uploads");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = slugify(path.basename(file.originalname, ext), {
      lower: true,
      strict: true,
    });
    cb(null, `${Date.now()}-${base}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new AppError("Only image uploads are supported.", 400));
    }
    return cb(null, true);
  },
});

module.exports = {
  upload,
};
