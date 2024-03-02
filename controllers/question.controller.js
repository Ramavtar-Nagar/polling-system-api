import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

import { Question } from "../models/questions.model.js";
import { Option } from "../models/options.model.js";

const createQuestion = asyncHandler( async(req, res) => {

    try {
        const { title } = req.body;
        const createdQuestion = await Question.create({
            title,
            options: []
        });
    
        if(!createdQuestion){
            throw new ApiError(400, "All fields are required")
        }
        return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                createdQuestion,
                "Question is created Successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error')
    }
})

const addOptions = asyncHandler( async(req, res) => {
    
    try {
        const { id } = req.params;
        const { text } = req.body;
    
        const question = await Question.findById(id);
    
        if(!question){
            throw new ApiError(404, "Question not Found!!!")
        }
    
        const createdOption = await Option.create({
            text: text,
            questionId: question._id
        })
    
        question.options.push(createdOption._id);
        await question.save()
    
        return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                createdOption,
                "Option Created Successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error')
    }
})

const deleteQuestion = asyncHandler( async(req, res) => {
    
    try {
        const { id } = req.params;
    
        const question = await Question.findById(id);
        
        if(!question){
           throw new ApiError(404, "Question not Found!!!")
        }
    
        // TODO = Implement logic to check if there are votes on options before deleting the question (optional)
        const optionsWithVotes = await Option.find({ questionId: question._id, votes: { $gt: 0 } });

        if (optionsWithVotes.length > 0) {
            throw new ApiError(400, 'Cannot delete question with options having existing votes')
        }
        await question.remove();
    
        return res
                .status(201)
                .json(
                    new ApiResponse(
                        200,
                        question,
                        "Question Removed Successfully"
                    )
                )
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error')
    }
})


const viewQuestion = asyncHandler( async(req, res) => {
    try {
        const { id } = req.params;
    
        const question = awaitQuestion.findById(id).populate('options');
    
        if (!question) {
            throw new ApiError(404, "Question not Found!!!")
        }
    
        return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    question,
                    "Question Fetched Successfully"
                )
            )
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error')
    }
})

export {
    createQuestion,
    addOptions,
    viewQuestion,
    deleteQuestion
}