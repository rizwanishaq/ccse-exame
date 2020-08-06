const QuestionModel = require("../models/QuestionModel");

// @desc GET questions
// @route GET /questions
exports.getQuestions = async (req, res, next) => {
  try {
    // Get all the questions
    const questions = await QuestionModel.find({});

    return res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error ${error}`,
    });
  }
};

// @desc POST question
// @route /createquestion
exports.addQuestion = async (req, res, next) => {
  try {
    const question = await QuestionModel.create(req.body);

    return res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error ${error}`,
    });
  }
};
