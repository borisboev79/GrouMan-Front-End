import { createContext, useState } from "react";

const GuestContext = createContext();

export const GuestContextProvider = ({ children }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [guestId, setGuestId] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const showDeleteHandler = () => {
    console.log(showDelete);
    if (showDelete) {
      setShowDelete(false);
    } else {
      setShowDelete(true);
    }
  };

  console.log(`after: ${showDelete}`);

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

    showDelete,
    showDeleteHandler,
  };

  return (
    <GuestContext.Provider value={values}>{children}</GuestContext.Provider>
  );
};

GuestContext.displayName = "GuestContext";

export default GuestContext;
