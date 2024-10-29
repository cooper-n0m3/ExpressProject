import { check } from "express-validator";
export const adminValidation=[
    check('title')
        .notEmpty()
        .withMessage('Title is required'),
    check('type')
        .notEmpty()
        .withMessage('Type is required'),
    check('category')
        .notEmpty()
        .withMessage('Category is required'),
    check('description')
        .notEmpty()
        .withMessage('Description is required')
]