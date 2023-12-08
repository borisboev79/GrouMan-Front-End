import { createContext, useState, useEffect } from "react";

const GuestContext = createContext();

export const GuestContextProvider = ({ children }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [guestId, setGuestId] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const showDeleteHandler = () => {
    if (showDelete) {
      setShowDelete(false);
    } else {
      setShowDelete(true);
    }
  };

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

  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const preventDefaultScroll = (e) => {
      if (scrollLocked) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventDefaultScroll, { passive: false });
    window.addEventListener("touchmove", preventDefaultScroll, {
      passive: false,
    });
    window.addEventListener("keydown", preventDefaultScroll);

    return () => {
      window.removeEventListener("wheel", preventDefaultScroll);
      window.removeEventListener("touchmove", preventDefaultScroll);
      window.removeEventListener("keydown", preventDefaultScroll);
    };
  }, [scrollLocked]);

  const scrolLockToggler = () => {
    if (scrollLocked) {
      setScrollLocked(false);
    } else {
      setScrollLocked(true);
    }
  };

  const values = {
    showEdit,
    showGuestEditHandler,
    guestId,
    guestIdSetter,

    showDelete,
    showDeleteHandler,

    scrolLockToggler,
  };

  return (
    <GuestContext.Provider value={values}>{children}</GuestContext.Provider>
  );
};

GuestContext.displayName = "GuestContext";

export default GuestContext;
