
const { check } = require('express-validator');

export const FactureValidation = [
            check('name').not().isEmpty().withMessage('Name must have at least three characters').isLength({min: 3}),
            check('surName').not().isEmpty().withMessage('Surname must have at least three characters').isLength({min: 3}),
            check('netto').not().isEmpty(),
            check('date','Chose your date ').not().isEmpty().optional('dd-MM-yyyy'),
            check('title').not().isEmpty().withMessage('Facture nead title').isLength({min: 2})
]
        