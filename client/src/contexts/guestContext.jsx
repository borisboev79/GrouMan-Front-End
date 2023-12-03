import { createContext, useState } from "react";

const GuestContext = createContext();

export const GuestContextProvider = ({ children }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [guestId, setGuestId] = useState("");

  const guestIdSetter = (id) => {
    setGuestId(id);
  };

  const showGuestEditHandler = () => {
    if (showEdit) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
  };

  const values = {
    showEdit,
    showGuestEditHandler,
    guestId,
    guestIdSetter,
  }

  return <GuestContext.Provider value={values}>{children}</GuestContext.Provider>;
};

GuestContext.displayName = "GuestContext";

export default GuestContext;
