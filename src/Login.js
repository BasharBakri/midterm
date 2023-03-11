import { useContext } from "react"
import TypeContext from "./context/userType"
import { resetCurrentDay } from "./APIs/resetCurrentDay";
import { Form } from "react-router-dom";
export default function Login() {


  const type = useContext(TypeContext);



  return (<>

    <div className="loginContainer">
      <h2 className="loginItem">Login as:</h2>
      <div className="loginItem" >
        <button onClick={() => { type.changeType(4) }} className="loginButton dread"></button>
        <span className="btnText">Robert</span>
        <span className="btnText"><i className="btnBtnText">'Manager'</i></span>
      </div>

      <div className="loginItem">
        <button onClick={() => { type.changeType(1) }} className="loginButton friendly"></button>
        <span className="btnText">Blake</span>
        <span className="btnText"><i className="btnBtnText">'Production'</i></span>
      </div>
      <div className="loginItem">
        <button onClick={() => { type.changeType(2) }} className="loginButton lucy"></button>
        <span className="btnText sales"> Lucy</span>
        <span className="btnText sales"><i className="btnBtnText">'Sales'</i></span>
      </div>
      <div className="loginItem">
        <button onClick={() => { type.changeType(3) }} className="loginButton red"></button>
        <span className="btnText"> Red</span>
        <span className="btnText"><i className="btnBtnText"> 'Logistics'</i></span>
      </div>
      <Form className="resetForm"  >
        <button className="resetBtn" onClick={resetCurrentDay}>Refresh the day!</button>
      </Form>
    </div>


  </>
  )

}