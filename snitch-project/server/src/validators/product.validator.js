import { body, validationResult } from "express-validator";

const createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .bail()
    .isLength({ min: 2, max: 150 })
    .withMessage("Product name must be between 2 and 150 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Product description must be at least 10 characters"),

  body("price")
    .notEmpty()
    .withMessage("Product price is required")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid positive number"),

  body("currency")
    .optional()
    .isIn(["INR", "USD"])
    .withMessage("Currency must be INR or USD"),

  body("discount")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("Discount must be between 0 and 100"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .bail()
    .isMongoId()
    .withMessage("Invalid category ID"),

  body("brand")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Brand cannot exceed 100 characters"),

  body("images").optional().isArray().withMessage("Images must be an array"),

  body("images.*.url")
    .if(body("images").exists())
    .notEmpty()
    .withMessage("Image URL is required")
    .bail()
    .isURL()
    .withMessage("Invalid image URL"),

  body("images.*.fileId")
    .if(body("images").exists())
    .notEmpty()
    .withMessage("Image fileId is required"),

  body("images.*.alt").optional().trim(),

  body("size")
    .optional()
    .isArray()
    .withMessage("Size must be an array")
    .bail()
    .custom((sizes) =>
      sizes.every((size) => ["XS", "S", "M", "L", "XL", "XXL"].includes(size)),
    )
    .withMessage("Invalid size"),

  body("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be a boolean"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export { createProductValidator };
