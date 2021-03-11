import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text style={styles.forgotBtn}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotBtn}>Signup</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#deb887",
  },
  bottom: {
    flexDirection: "row",
  },
  inputView: {
    backgroundColor: "white",
    width: "90%",
    height: 50,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    flex: 1,
    padding: 10,
    color: "grey",
  },
  forgotBtn: {
    height: 30,
    margin: 10,
    borderRadius: 15,
    color: "white",
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 15,
    color: "white",
  },
  loginBtn: {
    width: "30%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 10,
  },
});

export default LoginScreen;
