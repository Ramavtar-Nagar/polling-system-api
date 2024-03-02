import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

import { Question } from "../models/questions.model.js";
import { Option } from "../models/options.model.js";

const deleteOption = asyncHandler(async(req, res) => {
    
  try {
      const { id } = req.params;
  
      const option = await Option.findById(id);
  
      if(!option){
          throw new ApiError(404, "Option not Found!!!")
      }
  
      // TODO = implement logic to check if there are votes on this option before deleting (optional)
      if (option.votes > 0) {
        throw new ApiError(404, "Cannot delete option with existing votes!!!")
      }
      await option.remove()
      
      return res
              .status(201)
              .json(
                  new ApiResponse(
                      200,
                      option,
                      "Option Deleted Successfully"
                  )
              )
  } catch (error) {
    throw new ApiError(500, 'Internal Server Error')
  }
})

const addVotes = asyncHandler(async(req, res) => {
    
    const { id } = req.params;

    const option = await Option.findById(id);
  
    if(!option){
        throw new ApiError(404, "Option not Found!!!")
    }

    option.votes += 1;
    await option.save();

    return res
              .status(201)
              .json(
                  new ApiResponse(
                      200,
                      {},
                      "Vote Added Successfully"
                  )
              )

})

export {
    deleteOption,
    addVotes
}