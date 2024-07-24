import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Category } from "../models/Category.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Category Name are required");
  }

  const category = await Category.create({ name, owner: req.user._id });

  return res
    .status(201)
    .json(new ApiResponse(200, category, "Category created successfully"));
});

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ owner: req.user._id });
  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully"));
});

const getCategoryById = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const category = await Category.findById(categoryId);
  if (!category) {
    throw new ApiError(404, "Category does not exist");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, category, "Category fetched successfully"));
});

const updateCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  const owner = req.user._id;
  const categoryOwner = await Category.findById(categoryId);
  if (!categoryOwner) {
    throw new ApiError(404, "Category does not exist");
  }

  if (categoryOwner.owner.valueOf() === owner.valueOf()) {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      {
        $set: {
          name,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json(new ApiResponse(200, category, "Category updated successfully"));
  } else {
    throw new ApiError(404, "Somthing went Wrong");
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const owner = req.user._id;
  const categoryOwner = await Category.findById(categoryId);
  if (!categoryOwner) {
    throw new ApiError(404, "Category does not exist");
  }

  if (categoryOwner.owner.valueOf() === owner.valueOf()) {
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      throw new ApiError(404, "Category does not exist");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { deletedCategory: category },
          "Category deleted successfully"
        )
      );
  } else {
    throw new ApiError(404, "Somthing went Wrong");
  }
});

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
