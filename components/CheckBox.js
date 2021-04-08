import * as React from "react";
import { CheckBox } from "react-native-elements";

export default (props) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <CheckBox
      checked={checked}
      checkedColor="#0F0"
      checkedTitle="Great!"
      containerStyle={{ width: "100%" }}
      onIconPress={() => setChecked(!checked)}
      size={30}
      textStyle={{}}
      title={props.children}
      titleProps={{}}
      uncheckedColor="#F00"
    />
  );
};
