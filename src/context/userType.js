import React from "react";
import { useState } from "react";


const TypeContext = React.createContext({
  userType: null,
  typeText: '',
  checkInOpen: null,
  isCheckedIn: null,
  handleIsCheckedIn: () => { },
  changeType: () => { },
  openCheckIn: () => { }
});

export const TypeContextProvider = (props) => {




  const [checkInOpen, setcheckInOpen] = useState(false);
  const [userType, setUserType] = useState(true);
  const [typeText, setTypeText] = useState('employee');
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const handleUserType = () => {
    setUserType(prevType => !prevType);
    setTypeText(typeText => typeText === 'employee' ? 'manager' : 'employee'
    );
  }

  const handleOpenCheckIn = () => {
    setcheckInOpen(prevCheckIn => !prevCheckIn)
  }
  const handleIsCheckedIn = () => {
    setIsCheckedIn(prevCheckIn => !prevCheckIn)
  }

  return <TypeContext.Provider value={{
    userType: userType,
    typeText: typeText,
    checkInOpen: checkInOpen,
    isCheckedIn: isCheckedIn,
    handleIsCheckedIn: handleIsCheckedIn,
    openCheckIn: handleOpenCheckIn,
    changeType: handleUserType
  }}>
    {props.children}
  </TypeContext.Provider>
};

export default TypeContext;