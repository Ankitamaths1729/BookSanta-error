import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingsScreen from '../screens/SettingsScreen';
import SideBar from './SideBar';
import {TabNavigator} from './TabNavigator';


export const DrawNavigator = createDrawerNavigator({
    Home:{
        screen:TabNavigator
    },
    Settings:{
        screen:SettingsScreen
    }
},
{
    contentComponent:SideBar
},{
    initialRouteName:'Home'
})