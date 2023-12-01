const formValidator = (type, value) => {
  switch (type) {
    case "username":
      if (value.length < 3) {
        console.log("vliza s username");
        return "Username should be at least 3 characters";
      }
      break;
    case "email":
      if (!value.includes(".") || !value.includes("@")) {
        console.log("vliza s email")
        return "This is not a valid email.";
      }
      break;
    default:
      return "";
  }
};

export default formValidator;
