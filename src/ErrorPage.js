import { useRouteError } from "react-router-dom";
import MainNav from "./MainNav";

import PageContent from "./PageContent";


function ErrorPage() {


  const error = useRouteError();

  let title = 'An error occured';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'not found'
    message = 'Could not find resource or page'
  }

  return (<>
    <MainNav />
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  </>)
}

export default ErrorPage;