const jwt = require("jsonwebtoken");
const User = require("../db/users")

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const varifytoken = jwt.verify(token, process.env.SECRET_KEY);
        const rootuser = await User.findOne({ _id: varifytoken._id, "tokens.token": token })
        if (!rootuser) {
            throw new Error("User not find")
        }
        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;
        next();
    }
    catch (err) {
        res.status(401).send("unauthorized : No token provided")
    }
}
module.exports = authenticate;