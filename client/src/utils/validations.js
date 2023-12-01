const formValidator = (type, value) => {
  switch (type) {
    case "password":
      if (value.length < 8) {
        return "Password should be at least 8 characters";
      }
      break;
    case "username":
      if (value.length < 3) {
        console.log("vliza s username");
        return "Username should be at least 3 characters";
      }
      break;
    case "email":
      if (!value.includes(".") || !value.includes("@")) {
        console.log("vliza s email");
        return "This is not a valid email.";
      }
      break;
      case "minAge":
        function isDateNotSoonerThan6MonthsAgo(inputDate) {
            // Parse the input date
            const inputDateObj = new Date(inputDate);
          
            // Get the current date
            const currentDate = new Date();
          
            // Calculate the date 6 months ago
            const sixMonthsAgo = new Date(currentDate);
            sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
          
            // Compare the input date with the date 6 months ago
            return inputDateObj <= currentDate && inputDateObj >= sixMonthsAgo;
          }
          
          // Example usage:
          const userInputDate = "2023-05-01"; // Replace this with the actual user input
          if (isDateNotSoonerThan6MonthsAgo(userInputDate)) {
            console.log("Valid date!");
          } else {
            console.log("Date should be at least 6 months ago.");
          }

    default:
      return "";
  }
};

export default formValidator;
