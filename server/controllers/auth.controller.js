import User from "../models/user.model.js";

export const login = async (req, res) => {
  const user = req.body;
  try {
    const foundUser = await User.findOne(user);
    if (!foundUser) {
      res.status(404).json({
        error: "Username Or Password Is Incorrect",
        success: false,
        data: null,
      });
      return;
    }
    req.session.user = {
      username: foundUser.username,
      userId: foundUser._id.toString(),
    };
    console.log(req.session.user);
    res.status(200).json({
      error: "Logged In Successfully",
      success: true,
      data: foundUser.username,
    });
  } catch (error) {
    res.status(400).json({
      error: "Couldnt Login , Try Again Later",
      success: false,
      data: null,
    });
  }
};
export const reg = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json({
      error: null,
      success: true,
      data: null,
    });
  } catch (error) {
    console.log(error.code);
    if (error.code === 11000) {
      res.status(400).json({
        error: "Username Already Exists",
        success: false,
        data: null,
      });
      return;
    }
    res.status(400).json({
      error: "Server Error",
      success: false,
      data: null,
    });
  }
};
