import * as React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { WebView } from "react-native-webview";

const PHONE_WIDTH = Dimensions.get('window').width;

const renderLoading = () => (
  <View><Text>loading...</Text></View>
);

const Map = (props) => {

  const [progress, setProgress] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: PHONE_WIDTH * progress, height: 2, backgroundColor: '#22A3F1' }} />
      <WebView
        source={{ uri: props.uri }}
        originWhitelist={['*']}
        onLoadEnd={() => setProgress(0)}
        javaScriptEnabled={true}
        mixedContentMode={'compatibility'}
        scalesPageToFit={true}
        useWebKit={false}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      />
    </SafeAreaView>
  );
};

export default Map;
