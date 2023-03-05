import { Outlet, useNavigation } from "react-router-dom";

function DailyRoot() {
  const navigation = useNavigation();

  return <>
    {navigation.state === 'loading' && <p>Loading...</p>}
    {(navigation.state === 'idle' || navigation.state === 'submitting') && <Outlet />}
  </>
}
export default DailyRoot;