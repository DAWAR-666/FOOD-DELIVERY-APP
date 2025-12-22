import { createContext } from "react";
type UserContextType = {
  user: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
const UserContext = createContext({
  user: "user1",
  setUserName: () => {},

} as UserContextType);
export default UserContext;