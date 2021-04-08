import * as React from "react";
import { Overlay, Text, TouchableOpacity } from "react-native-elements";
import Modal from "modal-react-native-web";

export default () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Overlay
      backdropStyle={{}}
      isVisible={isVisible}
      ModalComponent={Modal}
      onBackdropPress={() => setIsVisible(!isVisible)}
      overlayStyle={{}}
    >
      <Text>Some content</Text>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <Text>Click to close</Text>
      </TouchableOpacity>
    </Overlay>
  );
};
