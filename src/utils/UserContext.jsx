const { createContext } = require("react");

const UserContext = createContext({
  user: "user1",
});
export default UserContext;