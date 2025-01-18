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
    const userRoutines = await Routine.find({ userId });

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

export const setCurrentRoutine = async (req, res) => {
  const { routineId } = req.body;
  const userId = req.session.user.userId;
  try {
    const routine = await Routine.findById(routineId);
    if (routine.current === false) {
      try {
        try {
          await Routine.updateMany({ userId }, { current: false });
          res.status(200).json({ error: null, success: true, data: null });
        } catch (error) {
          console.log(error);
          res.status(400).json({ error: error, success: false, data: null });
        }
        await Routine.findByIdAndUpdate(routineId, {
          current: true,
        });
      } catch (error) {
        res.status(500).json({ error: error, success: false, data: null });
      }
    } else {
      res.status(400).json({
        error: "This Is Already Your Current Routine",
        success: false,
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
      data: null,
    });
  }
};

export const getCertainRoutine = async (req, res) => {
  try {
    const { _id } = req.params;
    const routine = await Routine.findOne({ _id });
    if (!routine) {
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
      data: routine,
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

export const updateRoutine = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, description, days } = req.body;
    await Routine.findByIdAndUpdate(
      _id,
      { name, description, days },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const getCurrentRoutine = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({
        error: "Unauthorized: No session found",
        success: false,
        data: null,
      });
    }

    const userId = req.session.user.userId;
    const currentRoutine = await Routine.findOne({ userId, current: true });
    if (currentRoutine) {
      res.status(200).json({
        error: null,
        success: true,
        data: currentRoutine,
      });
    } else {
      res.status(400).json({
        error: error,
        success: false,
        data: "error not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
      success: false,
      data: null,
    });
  }
};
