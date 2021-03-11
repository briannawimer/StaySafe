import { CommonActions, TabActions } from '@react-navigation/native';

const checkLogin = (navigation) => {
    let isLogin = false;
    console.log('checkLogin', isLogin);
    if (!isLogin) {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Login',
            })
        )
    }
    return isLogin;
}

const navigate = (navigation, { check = false, name = '', params = {} }) => {
    console.log('navigate', name);
    if (check && !checkLogin(navigation)) {
        return;
    }
    navigation.dispatch(
        CommonActions.navigate({
            name,
            params
        })
    )
}

const navigateTab = (navigation, { check = false, name = '', params = {} }) => {
    if (check && !checkLogin(navigation)) {
        return;
    }
    navigation.dispatch(
        TabActions.jumpTo(
            name,
            {
                ...params
            }
        )
    )
}

const reset = (navigation, { name = '', params = {} }) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: 'Main' },
            ],
        })
    )
}

const goBack = (navigation,) => {
    navigation.dispatch(
        CommonActions.goBack()
    );
}

export default {
    checkLogin,
    navigate,
    navigateTab,
    goBack,
    reset,
}