import * as React from 'react';

import { Linking } from "react-native";
//import Map from '../components/Map';

const VaccineDistributionMap = (props) => {
    return Linking.canOpenURL("https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367");
    //return <Map uri={'https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367'} />;
}

export default VaccineDistributionMap;