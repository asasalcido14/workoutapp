const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        day: {
            type: Date, 
            default: () => new Date 
        },
        exercises: [
            {
                type: {
                   type: String,
                    trim: true,
                    required: "Enter an exercise type",  
                },
                name: {
                    type: String, 
                    trim: true,
                    required: "Must enter exercise name",
                },
                duration: {
                    type: Number,
                    required: "Must enter the exercise duration in minutes",

                },
                weight: {
                    type: Number,
                    required: "How much resistance would you like?"
                },
                reps: {
                    type: Number,
                    required: " How many goals do you have for your reps?"
                },
                sets: {
                    type: Number,
                    required: " How many sets do you plan to do?"
                },
                distance: {
                    type: Number,
                },
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual ("totalDuration").get(function(){
    return this.exercises.reduce(( total, exercise )=>{
        return total + exercise.duration;
    },0)
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
