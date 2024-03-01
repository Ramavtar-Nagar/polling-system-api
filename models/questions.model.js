import mongoose, {Schema} from "mongoose";

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    options: [
        {
            type: Schema.Types.ObjectId,
            ref: "Option"
        }
    ]
})

export const Question = mongoose.model("Question", questionSchema)