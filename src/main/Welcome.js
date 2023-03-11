import { useContext } from "react";
import { useRouteLoaderData } from "react-router-dom";
import TypeContext from "../context/userType";


function Welcome() {
  const info = useRouteLoaderData('root');
  const employees = info.employees;

  const type = useContext(TypeContext)
  let name;
  let source;
  switch (parseInt(type.userType)) {
    case 4:
      name = 'Robert';
      source = employees[3].image;
      break;
    case 1:
      name = 'Blake';
      source = employees[0].image;
      break;
    case 2:
      name = 'Lucy';
      source = employees[1].image;
      break;
    case 3:
      source = employees[2].image;
      name = 'Red';
      break;
    default:
      name = '';
      source = ''
      break;
  }




  return (<>
    <h3>Hey There {name},</h3>
    <img className="welcomeImage" src={source} alt='img' />

    <p className="currentDateParagpraph"> {new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}.</p>
    <hr></hr>
  </>)
}

export default Welcome;