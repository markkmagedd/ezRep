import User from "../models/user.model.js";

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
