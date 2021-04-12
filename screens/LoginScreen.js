import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";
import { userLogin } from '../firebase_config'

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithFireabse = () => {
    console.log('login...');
    const user = {
      email: email,
      password: password
    }
    userLogin(user).then((res) => {
      Alert.alert(
        "Alert",
        "Login successfuly!",
        [
          { text: "OK", onPress: () => props.navigation.pop() }
        ]
      );
      
    }).catch((err) => {
      console.log(err);
    })
  }

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
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({ routeName: "ForgotPassword" });
          }}
        >
          <Text style={styles.forgotBtn}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({ routeName: "CreateAccount" });
          }}
        >
          <Text style={styles.forgotBtn}>Signup</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={loginWithFireabse}>
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
    backgroundColor: "linen",
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
    color: "midnightblue",
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
