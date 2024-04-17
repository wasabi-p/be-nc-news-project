const { selectAllUsers } = require('../models/users.models')

exports.getAllUsers = (req, res, next) => {
    return selectAllUsers()
        .then(({ rows }) => {
            res.status(200).send({ users: rows })
        })
}