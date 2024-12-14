import Routine from "../models/routine.model.js";

export const getRoutines = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({
        error: "Unauthorized: No session found",
        success: false,
        data: null,
      });
    }

    const userId = req.session.user.userId;
    console.log(req.session.user.userId);
    console.log(userId);
    const userRoutines = await Routine.find({ userId });
    console.log(userRoutines);
    if (userRoutines.length == 0) {
      res.status(401).json({
        error: "No Routines Found For This User",
        success: false,
        data: null,
      });
      return;
    }
    res.status(200).json({
      error: null,
      success: true,
      data: userRoutines,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
      success: false,
      data: null,
    });
  }
};
export const addRoutine = async (req, res) => {
  const routine = req.body;
  const newRoutine = new Routine(routine);
  newRoutine.userId = req.session.user.userId;
  try {
    await newRoutine.save();
    res.status(200).json({
      error: null,
      success: true,
      data: routine,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
      success: false,
      data: null,
    });
  }
};
