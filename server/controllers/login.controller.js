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
