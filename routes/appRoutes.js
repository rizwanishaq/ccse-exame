const express = require("express");
const router = express.Router();

const { getQuestions, addQuestion } = require("../controller/appRoutes");

router.route("/questions").get(getQuestions);
router.route("/createquestion").post(addQuestion);

module.exports = router;
