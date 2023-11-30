import { useState } from "react";

import GroupDetails from "./GroupDetails";
import GroupDetailsPassengerButtons from "./GroupDetailsPassengerButtons";


const GroupDetailWrapper = () => {
    
const [showForm, setShowForm] = useState(false);
const showGuestAddHandler = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };
return (
<GroupDetails showForm={showForm} showGuestAddHandler={showGuestAddHandler}>
    <GroupDetailsPassengerButtons showForm={showForm} showGuestAddHandler={showGuestAddHandler}/>
</GroupDetails>);
}

export default GroupDetailWrapper;