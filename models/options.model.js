import mongoose, {Schema} from "mongoose";

const optionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true
    }
})

export const Option = mongoose.model("Option", optionSchema)