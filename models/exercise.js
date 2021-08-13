const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'You must enter the exercise NAME.'
            },
            type: {
                type: String,
                trim: true,
                required: 'You must enter the exercise TYPE.'
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: 'You must enter the exercise DURATION.'
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;