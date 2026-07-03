import User from "../models/users";

export const register = async (req: any, res: any) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};