import React from "react";
import { useState } from "react";


const TypeContext = React.createContext({
  userType: null,
  typeText: '',
  checkInOpen: null,
  changeType: () => { },
  openCheckIn: () => { }
});

export const TypeContextProvider = (props) => {
  const [checkInOpen, setcheckInOpen] = useState(false);
  const [userType, setUserType] = useState(true);
  const [typeText, setTypeText] = useState('employee');
  const handleUserType = () => {
    setUserType(prevType => !prevType)
    setTypeText(typeText => typeText === 'employee' ? 'manager' : 'employee')
  }
  const handleOpenCheckIn = () => {
    setcheckInOpen(prevCheckIn => !prevCheckIn)
  }
  return <TypeContext.Provider value={{
    userType: userType,
    typeText: typeText,
    checkInOpen: checkInOpen,
    openCheckIn: handleOpenCheckIn,
    changeType: handleUserType
  }}>
    {props.children}
  </TypeContext.Provider>
};

export default TypeContext;