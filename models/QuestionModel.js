const mongoose = require("mongoose");

const QuestionModelSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please enter the question"],
      unique: true,
    },
    correct_answer: {
      type: String,
      required: [true, "Please provide the correct answer"],
    },
    incorrect_answers: {
      type: [String],
      required: [true, "Please provide incorrect answers"],
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    question_type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuestionModel", QuestionModelSchema);
