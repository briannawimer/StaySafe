import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as userAction from '../../actions/user.action';
import route from '../../navigation/route';

const CovidInfoHome = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{props.userInfo.name}</Text>
            <Button title='open map' onPress={()=> route.navigate(props.navigation,{name:'CovidMap'})}/>
        </View>
    );
}

const mapStateToProps = (state) => ({
    ...state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidInfoHome)