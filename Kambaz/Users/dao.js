import { v4 as uuidv4 } from "uuid";

export default function UsersDao(db) {
  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    db.users = [...db.users, newUser];
    return newUser;
  };

  const findAllUsers = () => {
    console.log("Finding all users, count:", db.users.length);
    return db.users;
  };

  const findUserById = (userId) => {
    return db.users.find((user) => user._id === userId);
  };

  const findUserByUsername = (username) => {
    return db.users.find((user) => user.username === username);
  };

  const findUserByCredentials = (username, password) => {
    return db.users.find(
      (user) => user.username === username && user.password === password
    );
  };

  const updateUser = (userId, user) => {
    db.users = db.users.map((u) => (u._id === userId ? user : u));
    return user;
  };

  const deleteUser = (userId) => {
    db.users = db.users.filter((u) => u._id !== userId);
  };

  return {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    deleteUser,
  };
}
