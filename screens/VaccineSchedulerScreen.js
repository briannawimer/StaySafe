import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Flatlist,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const VaccineSchedulerScreen = (props) => {
  return (
    <View>
     <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Choose a date to be reminded to take your vaccine second dose
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="MM-DD-YYYY"
          minDate="03-01-2021"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 2,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 39,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
    </View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default VaccineSchedulerScreen;
