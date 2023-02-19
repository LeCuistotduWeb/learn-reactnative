import { StyleSheet, Text, TouchableOpacity } from "react-native"
import color from "../../constants/colors";
import font from "../../constants/fonts";

const getStyle = (variant) => {
  switch (variant) {
    case 'success':
      return {backgroundColor: color.success};
    case 'alert':
      return {backgroundColor: color.alert};
    case 'warning':
      return {backgroundColor: color.warning};
    case 'info':
      return {backgroundColor: color.info};
    default:
      return {backgroundColor: color.primary};
  }
}

const UIButton = ({onPress, variant, stylesProps, children}) => {
  return <TouchableOpacity activeOpacity={.8} onPress={onPress} style={[styles.button, getStyle(variant), stylesProps]}>
    <Text style={styles.buttonText}>
      {children}
    </Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontFamily: font.fontRegular,
  }
})

export default UIButton;