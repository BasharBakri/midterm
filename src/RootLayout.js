import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";
import TypeContext from "./context/userType";
import { useContext } from "react";


function RootLayout() {

  const type = useContext(TypeContext);
  return (
    <>
      <MainNav />
      {type.userType && <main className="mainContentContainer">
        <Outlet />
      </main>}
    </>
  )
}

export default RootLayout;