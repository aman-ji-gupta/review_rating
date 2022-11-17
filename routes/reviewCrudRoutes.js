const express = require("express");
const router = express.Router();
const crudController = require("../controller/reviewCrudController");
router.post('/create',crudController.addReview())