import React, { useState, createRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const ForgotPasswordScreen = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const emailInputRef = createRef();
  const [errortext, setErrortext] = useState("");


  const handleSubmitButton = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
  };

  return (
    
    <View>
      <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                blurOnSubmit={false}
              />
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}
            >
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  buttonStyle: {
    backgroundColor: "steelblue",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    width: 100,
    alignItems: "center",
    borderRadius: 5,
    margin: 100,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  }
});

export default ForgotPasswordScreen;
