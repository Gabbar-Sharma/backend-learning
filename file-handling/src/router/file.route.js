const express = require("express");
const upload = require("../config/multer");

const createNotesController = require("../app")

const router = express.Router()
router.post("/create", upload.single("image"), createNotesController)


module.exports = router;