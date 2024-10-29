import { check } from "express-validator";

export const userRegisterValidation=[
    check('username')
        .notEmpty().withMessage('Username is required.'),
    check('email')
        .notEmpty().withMessage('Email is required.'),
    check('password')
        .notEmpty().withMessage('Password is required.'),
    check('confirmPassword')
        .notEmpty().withMessage('Confirm Password is required.')
];
export const userLoginValidation =[
    check('email')
        .notEmpty().withMessage('Email is required.'),
    check('password')
        .notEmpty().withMessage('Password is required.')
]
