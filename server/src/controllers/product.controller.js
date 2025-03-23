import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Category } from "../models/Category.model.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProduct = asyncHandler(async (req, res) => {
  const { name, description, category, price, stock } = req.body;

  console.log(name,description);
  console.log(req);
  //   const categoryToBeAdded = await Category.findById(category);

  //   if (!categoryToBeAdded) {
  //     throw new ApiError(404, "Category does not exist");
  //   }

  //   if (!req.files?.mainImage || !req.files?.mainImage.length) {
  //     throw new ApiError(400, "Main image is required");
  //   }

  return res
    .status(201)
    .json(new ApiResponse(201, "Product created successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {});
const getAllProducts = asyncHandler(async (req, res) => {});
const getProductById = asyncHandler(async (req, res) => {});
const getProductsByCategory = asyncHandler(async (req, res) => {});
const updateProduct = asyncHandler(async (req, res) => {});
const removeProductSubImage = asyncHandler(async (req, res) => {});

export {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
  removeProductSubImage,
};
