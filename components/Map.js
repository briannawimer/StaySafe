import * as React from 'react';
import { WebView } from 'react-native-webview';

const Map = (props) => {

    return <WebView source={{ uri: props.uri }}  />;
}

export default Map;