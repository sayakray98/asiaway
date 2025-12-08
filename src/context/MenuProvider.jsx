import React, { useState } from "react";
import MenuContext from "./MenuContext";

export default function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
 const onToggleMenu = () => {
  console.log("hy");
  setShowMenu(prev => !prev);
};


  return (
    <MenuContext.Provider value={{ showMenu, onToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
