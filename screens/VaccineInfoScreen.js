import * as React from 'react';
import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/AntDesign';

import * as userAction from '../../actions/user.action';
import route from '../../navigation/route';

const VaccineInfo = (props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'VaccineInfo',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => login()}
                    style={{ paddingRight: 10 }} >
                    <Icon name='user' color="black" size={22} />
                </TouchableOpacity>
            )
        });
    });

    const login = () => {
        route.navigate(props.navigation, { name: 'Login' });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{props.userInfo.name}</Text>
            {
                !props.loginState &&
                <Button title={'Map'} onPress={() => route.navigate(props.navigation,{name:'VaccineMap'})} />
            }
        </View>
    );
}

const mapStateToProps = (state) => ({
    ...state.user
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VaccineInfo)