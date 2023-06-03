const User = require("../models/userModel");

const createUser = async (req, res) => {
    console.log("req body => ", req.body)
    const email = req.body.email;
    const findUser = await User.find({ email: email }); 
    if (!findUser) {
        const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
        res.json({
            msg: "User Already Exists",
            success: false,
        });
    }
};

module.exports = {
    createUser
}