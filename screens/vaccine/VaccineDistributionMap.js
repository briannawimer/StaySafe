import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as userAction from '../../actions/user.action';
import Map from '../../components/Map';


const VaccineDistributionMap = (props) => {

    return <Map uri={'https://tools.cdc.gov/medialibrary/index.aspx'} />;
}

const mapStateToProps = (state) => ({
    ...state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VaccineDistributionMap)