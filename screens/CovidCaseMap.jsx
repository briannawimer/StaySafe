import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as userAction from '../../actions/user.action';
import Map from '../../components/Map';

const CovidCaseMap = (props) => {

    return <Map uri={'https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367'} />;
}

const mapStateToProps = (state) => ({
    ...state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidCaseMap)