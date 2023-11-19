export const officeDecoder = (office) => {
  switch (office) {
    case "HO":
      return "Head Office";
      break;
    case "MOS":
      return "Mall of Sofia";
      break;
    case "PDV":
      return "Plovdiv";
      break;
      case "SOFR":
        return "Sofia Central";
        break;
  }
};
