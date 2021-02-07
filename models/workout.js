const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a type of workout",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a name for your workout",
        },
        duration: {
          type: Number,
          required: "How long was your workout in minutes?",
        },
        weight: {
          type: Number,
          required: "How heavy was the weight in pounds?",
        },
        reps: {
          type: Number,
          required: "How many reps did you complete?",
        },
        sets: {
          type: Number,
          required: "How many sets did you complete?",
        },
        distance: {
          type: Number,
          required: "How far did you go in miles?",
        },
      },
    ],
  },
  {
    toJSON: {
      //include virtual properties when data is requested
      virtuals: true,
    },
  }
);

//virtuals for stats page
workoutSchema.virtual("totalDuration").get(function () {
  //reduce array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
