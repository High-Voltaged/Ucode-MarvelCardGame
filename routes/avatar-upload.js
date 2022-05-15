import express from "express";
import fileUpload from "../middleware/file-upload.js";
import uploadController from "../controllers/upload-controller.js";

const router = express.Router();

router.post('/avatar-upload', [
    fileUpload,
    uploadController
]);

export default router;
