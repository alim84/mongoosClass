const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "all users",
  });
};
const getOneUser = (req, res) => {
  res.status(200).json({
    message: "One user",
  });
};
const createUser = (req, res) => {
  res.status(201).json({
    message: "User is Created",
  });
};
const updateUser = (req, res) => {
  res.status(200).json({
    message: "User is update",
  });
};
const deleteUser = (req, res) => {
  res.status(200).json({
    message: "User is Deleted",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
