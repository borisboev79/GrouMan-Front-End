import { createContext, useState } from "react";
import * as guestService from '../services/guestService';

const GuestContext = createContext();

export const GuestContextProvider = ({children}) => {

const [showEdit, setShowEdit] = useState(false);

const showGuestEditHandler = () => {
    if (showEdit) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
  };

const selectedGuest = async (guestId) => {
    const result = await guestService.getOne(guestId);

    return result;
};

const values = {
    showEdit,
    showGuestEditHandler,
    selectedGuest,
};

return 
    <GuestContext.Provider value={values}>
        {children}
    </GuestContext.Provider>

};

GuestContext.displayName = "GuestContext";

export default GuestContext;