require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}