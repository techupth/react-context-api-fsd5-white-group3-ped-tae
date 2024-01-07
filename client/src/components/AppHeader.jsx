import { useContext } from "react";
import { UserDataContext } from "./UserDataContext";
function AppHeader() {
  const userName = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userName.username}</h2>
    </div>
  );
}

export default AppHeader;
