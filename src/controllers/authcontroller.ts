import User from "../models/users";


// register
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


// login 

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data: user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};