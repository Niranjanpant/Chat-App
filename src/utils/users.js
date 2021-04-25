const users = [];

//adduser,removeuser,getuser,getuserinroom

const addUser = ({ id, username, room }) => {
  //clean the data
  // username = username.trim().toLowercase();
  // room = room.trim().toLowercase();

  //validate the data
  if (!username || !room) {
    return {
      error: "username and room are required",
    };
  }
  //check existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "username is in use",
    };
  }

  //store user
  const user = { id, username, room };

  users.push(user);
  return { user };
};

//remove user
const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });
  //-1 for nomatch 0 or 1 for match
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//getUser

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//getUsersInRoom
const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};
// addUser({ id: 22, username: "janjan", room: "dang" });
// const data = getUser(22);
// console.log(data);
// console.log(users);
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
