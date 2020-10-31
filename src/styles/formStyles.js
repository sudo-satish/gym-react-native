import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
  input: {
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  inputError: {
    color: colors.error,
    fontSize: 10,
    marginBottom: 10,
    paddingLeft: 5,
  },
});
